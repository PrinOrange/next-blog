import Editor from "md-editor-rt";
import React from "react";

export interface CatalogDrawerProps extends React.HTMLAttributes<HTMLElement> {
  mapId: string
  onClick:any
}

export default function CatalogDrawer(props: CatalogDrawerProps ) {
  return (
    <div>
      <div className="tw-my-2 tw-text-xl tw-font-bold tw-text-center">
        {"Catalog"}
      </div>
      <div className="tw-overflow-y-auto ">
        <Editor.Catalog
          editorId={props.mapId}
          scrollElement={document.documentElement!}
        />
      </div>
    </div>
  );
}
