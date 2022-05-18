import Editor from "md-editor-rt";

export default function CatalogDrawer(props: { mapId: string }) {
  return (
    <div>
      <div className="tw-my-2 tw-text-xl tw-font-bold tw-text-center">
        {"Catalog"}
      </div>
      <div className="tw-overflow-y-auto e" style={{ maxHeight: 450 }}>
        <Editor.Catalog
          editorId={props.mapId}
          scrollElement={document.documentElement!}
        />
      </div>
    </div>
  );
}
