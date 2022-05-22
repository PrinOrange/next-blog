import Editor from 'md-editor-rt';
import { Card } from 'react-bootstrap';
import { FaListAlt } from 'react-icons/fa';

export default function CatalogBlock(props: { mapId: string }) {
  return (
    <Card className="tw-border tw-rounded-2xl tw-my-6 tw-hidden md:tw-block">
      <Card.Body>
        <div className="tw-my-2 tw-text-xl tw-font-bold tw-text-center">
          <FaListAlt className=" tw-inline tw-mx-2" />
          {"Catalog"}
        </div>
        <div className="tw-overflow-y-auto e" style={{ maxHeight: 450 }}>
          <Editor.Catalog
            editorId={props.mapId}
            scrollElement={document.documentElement!}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
