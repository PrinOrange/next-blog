import { useRequest } from "ahooks";
import axios from "axios";
import Editor from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

export default function DocEditor() {
  const [modal_show, set_modal_show] = useState({ show: false, text: "" });

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
      set_modal_show({ show: true, text: "提交成功" });
      cleanEdit();
      set_model_text(res.data);
    },
    onError: (err) => {
      set_modal_show({ show: true, text: `${err.message}\n` });
    },
    onBefore: () => {},
  });

  const cleanEdit = () => {
    set_title("");
    set_author("");
    set_citation("");
    set_declaration("");
    set_imgURL("");
    set_model_text("");
    set_originFrom("");
    set_originURL("");
    set_subtitle("");
    set_tags("");
    set_allowShare(false);
    set_model_text("");
    window.localStorage.removeItem("edit_state");
  };

  const getPostDate = () => {
    let date = new Date();
    const pad2 = (n: number) => (n < 10 ? "0" + n : n);
    return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds());
  };

  const handleCloseModal = () => {
    set_modal_show({ text: "", show: false });
  };

  return (
    <>
      <div>
        <div>
          <InputGroup size="sm" className="">
            <InputGroup.Text id="inputGroup-sizing-sm">{"标题"}</InputGroup.Text>
            <Form.Control
              className="shadow-none"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={title}
              onChange={(e: any) => {
                set_title(e.target.value);
              }}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">{"副标题"}</InputGroup.Text>
            <Form.Control
              className="shadow-none"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={subtitle}
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
              value={imgURL}
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
              value={citation}
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
              value={tags}
              onChange={(e: any) => {
                set_tags(e.target.value);
              }}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">{"声明"}</InputGroup.Text>
            <Form.Control
              className="shadow-none"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={declaration}
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
              value={author}
              onChange={(e: any) => {
                set_author(e.target.value);
              }}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">{"来源"}</InputGroup.Text>
            <Form.Control
              className="shadow-none"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={originFrom}
              onChange={(e: any) => {
                set_originFrom(e.target.value);
              }}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">{"链接"}</InputGroup.Text>
            <Form.Control
              className="shadow-none"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={originURL}
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
            <Button
              className="mx-1"
              onClick={async () =>
                postDoc(
                  "http://blog.dragonbook.cn/server/doc-server/post-doc.php",
                  JSON.stringify({
                    title: title.trim() === "" ? null : title,
                    subtitle: subtitle.trim() === "" ? null : subtitle,
                    citation: citation.trim() === "" ? null : citation,
                    imgURL: imgURL.trim() === "" ? null : imgURL,
                    tags: tags.trim() === "" ? null : tags,
                    declaration: declaration.trim() === "" ? null : declaration,
                    originFrom: originFrom.trim() === "" ? null : originFrom,
                    author: author.trim() === "" ? null : author,
                    originURL: originURL.trim() === "" ? null : originURL,
                    text: model_text.trim() === "" ? null : model_text,
                    allowShare: allowShare ? "1" : "0",
                    postDate: getPostDate(),
                    token:"zytengQQ123",
                  })
                )
              }
            >
              {"发表"}
            </Button>
          </div>
        </div>
      </div>
      <Modal show={modal_show.show} onHide={handleCloseModal} centered>
        <Modal.Body>
          {modal_show.text}
          <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleCloseModal}>
              {"关闭"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
