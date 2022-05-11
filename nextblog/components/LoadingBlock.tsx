import { Spinner } from "react-bootstrap";

export default function LoadingBlock() {
  return (
    <div className="tw-text-2xl tw-font-bold tw-text-center tw-flex tw-justify-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}