import { createPortal } from "react-dom";

export default function AddModal() {
  return createPortal(
    <>
      <div className="fixed"></div>
    </>,
    document.body,
  );
}
