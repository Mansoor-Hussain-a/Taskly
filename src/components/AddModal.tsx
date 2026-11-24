import { createPortal } from "react-dom";

export default function AddModal() {
  return createPortal(
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] z-10 rounded-3xl bg-amber-50">
      <form action=""></form>
    </div>,
    document.body,
  );
}
