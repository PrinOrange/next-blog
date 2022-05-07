import { DocMetaModel } from "../model/DocMetaModel";
import MDReader from "md-editor-rt";

export default function DocReader(props: {
  docMeta: DocMetaModel;
  docModelText: string;
  readerId:string;
}) {
  return (
    <div>
      <div className="tw-flex tw-justify-center">
        {props.docMeta.imgURL != null ? (
          <img
            className="img-fluid tw-rounded-xl tw-my-5"
            src={props.docMeta.imgURL!}
            alt={props.docMeta.title}
          />
        ) : null}
      </div>
      <div className=" tw-flex tw-justify-center tw-flex-col tw-border border-bottom border-3  tw-border-gray-700 tw-mx-4 tw-my-6">
        <h2 className="tw-font-bold tw-text-3xl tw-text-center">
          {props.docMeta.title}
        </h2>
        <h3 className=" tw-text-lg tw-text-center">
          {props.docMeta.subtitle}
        </h3>
        <p className=" tw-indent-8">{props.docMeta.citation}</p>
      </div>
      <MDReader
        previewOnly
        modelValue={props.docModelText}
        editorId={props.readerId}
        previewTheme="github"
      />
    </div>
  );
}
