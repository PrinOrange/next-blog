/* eslint-disable @next/next/no-img-element */
import { DocMetaModel } from "../model/DocMetaModel";
import MDReader from "md-editor-rt";

export default function Reader(props: {
  docMeta: DocMetaModel;
  docModelText: string;
  readerId: string;
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
      <div className="tw-flex tw-justify-center tw-flex-col tw-border-b-2 tw-mx-4 tw-my-6">
        <h2 className="tw-font-bold tw-text-3xl tw-text-center">
          {props.docMeta.title}
        </h2>
        <h3 className="tw-text-lg tw-text-center tw-font-bold tw-text-gray-500">{props.docMeta.subtitle}</h3>
        <p className="tw-indent-8 tw-text-justify tw-my-4">{props.docMeta.citation}</p>
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
