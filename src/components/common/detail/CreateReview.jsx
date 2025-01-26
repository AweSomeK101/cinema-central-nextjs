"use client";

import Edit from "@/../public/icons/edit.svg";
import { useEffect, useRef, useState } from "react";

function CreateReview() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    dialogRef?.current?.showModal();
    window && (window.document.body.style.overflow = "hidden");

    dialogRef?.current?.addEventListener("close", handleModalClose);

    return () => {
      dialogRef?.current?.removeEventListener("close", handleModalClose);
    };
  }, [open]);

  function handleModalClose() {
    window && (window.document.body.style.overflow = "auto");
    dialogRef?.current?.close();
    setOpen(false);
  }

  return (
    <>
      <button
        className="border border-accent rounded-lg p-2 flex gap-2 mb-4 hover:bg-accent hover:text-secondary"
        onClick={() => setOpen(true)}
      >
        <Edit className="inline" /> Create Review
      </button>
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/80 border rounded-xl border-secondary-400"
      >
        <div className="py-2 px-4 w-[650px] max-w-full bg-secondary ">
          <h3 className="text-xl border-b border-secondary-300 uppercase py-2 text-primary">
            Create Review
          </h3>
          <form action="">
            <div className="my-4">
              <label htmlFor="name" className="block text-slate-200 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="appearance-none border border-secondary-300 rounded bg-secondary-400/30 w-full py-2 px-3 text-gray-300 leading-tight focus:outline focus:ring-0 focus:outline-accent"
              />
            </div>
            <div className="my-4">
              <label htmlFor="reviewText" className="block text-slate-200 mb-1">
                Your Review
              </label>
              <textarea
                name="reviewText"
                id="reviewText"
                cols={4}
                className="h-36 appearance-none border border-secondary-300 bg-secondary-400/30 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline focus:ring-0 focus:outline-accent"
              ></textarea>
            </div>
            <div className="my-4 flex gap-4 items-center">
              <button
                type="submit"
                className="border text-white border-accent rounded-lg py-2 px-3 hover:bg-accent hover:text-secondary"
              >
                Create
              </button>
              <span
                className="text-red-500 hover:text-red-400 cursor-pointer"
                onClick={handleModalClose}
              >
                Cancel
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default CreateReview;
