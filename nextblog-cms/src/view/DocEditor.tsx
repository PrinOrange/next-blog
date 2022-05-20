import { useRequest } from "ahooks";
import axios, { AxiosResponse } from "axios";
import Editor from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaPaste } from "react-icons/fa";
export default function DocEditor() {
  const [model_text, set_model_text] = useState<string>("");

  const [title, set_title] = useState<string>("");
  const [subtitle, set_subtitle] = useState<string>("");
  const [citation, set_citation] = useState<string>("");
  const [imgURL, set_imgURL] = useState<string>("");
  const [tags, set_tags] = useState<string>("");
  const [declaration, set_declaration] = useState<string>("");
  const [originFrom, set_originFrom] = useState<string>("");
  const [author, set_author] = useState<string>("");
  const [originURL, set_originURL] = useState<string>("");
  const [allowShare, set_allowShare] = useState<boolean>(false);

  const { runAsync: postDoc } = useRequest(axios.post, {
    manual: true,
    onSuccess: (res) => {
      console.log(res);
      set_model_text(res.data);
    },
    onError: () => {},
    onBefore: () => {},
  });

  return (
    <div>
      <div>
        <InputGroup size="sm" className="">
          <InputGroup.Text id="inputGroup-sizing-sm">{"标题"}</InputGroup.Text>
          <Form.Control
            className="shadow-none"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e: any) => {
              set_title(e.target.value);
            }}
          />
          <InputGroup.Text id="inputGroup-sizing-sm">{"副标题"}</InputGroup.Text>
          <Form.Control
            className="shadow-none"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e: any) => {
              set_subtitle(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="my-1">
          <InputGroup.Text id="inputGroup-sizing-sm">{"背景URL"}</InputGroup.Text>
          <Form.Control
            className="shadow-none"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e: any) => {
              set_imgURL(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="my-1">
          <InputGroup.Text id="inputGroup-sizing-sm">{"引言"}</InputGroup.Text>
          <Form.Control
            className="shadow-none"
            as="textarea"
            rows={3}
            onChange={(e: any) => {
              set_citation(e.target.value);
            }}
          />
        </InputGroup>
      </div>
      <Editor
        toolbarsExclude={["save"]}
        modelValue={model_text}
        onChange={(text: string) => {
          set_model_text(text);
        }}
      />
      <div className="my-2">
        <InputGroup size="sm" className="">
          <InputGroup.Text id="inputGroup-sizing-sm">{"标签"}</InputGroup.Text>
          <Form.Control
            className="shadow-none"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e: any) => {
              set_tags(e.target.value);
            }}
          />
          <InputGroup.Text id="inputGroup-sizing-sm">{"声明"}</InputGroup.Text>
          <Form.Control
            className="shadow-none"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e: any) => {
              set_declaration(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">{"作者"}</InputGroup.Text>
          <Form.Control
            className="shadow-none"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e: any) => {
              set_author(e.target.value);
            }}
          />
          <InputGroup.Text id="inputGroup-sizing-sm">{"来源"}</InputGroup.Text>
          <Form.Control
            className="shadow-none"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e: any) => {
              set_originFrom(e.target.value);
            }}
          />
          <InputGroup.Text id="inputGroup-sizing-sm">{"链接"}</InputGroup.Text>
          <Form.Control
            className="shadow-none"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e: any) => {
              set_originURL(e.target.value);
            }}
          />
        </InputGroup>
      </div>
      <div className="d-flex justify-content-between my-2">
        <Form.Switch
          type="switch"
          id="custom-switch"
          label="允许转载"
          checked={allowShare}
          onChange={(e: any) => {
            set_allowShare(e.target.checked);
          }}
        />
        <div>
          <Button className="mx-1" variant="secondary">
            本地保存
          </Button>
          <Button
            className="mx-1"
            onClick={async () =>
              postDoc(
                "http://127.0.0.3:8080/doc-server/post-doc.php",
                JSON.stringify({
                  title: title,
                  subtitle: subtitle,
                  citation: citation,
                  imgURL: imgURL,
                  tags: tags,
                  declaration: declaration,
                  originFrom: originFrom,
                  author: author,
                  originURL: originURL,
                  text:model_text,
                })
              )
            }
          >
            发表
          </Button>
        </div>
      </div>
    </div>
  );
}
