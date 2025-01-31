"use client";

import Edit from "@/../public/icons/edit.svg";
import submitReviewAction from "@/lib/actions/submitReviewAction";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const INIT_STATE = {
  message: "",
  error: undefined,
};

function CreateReview() {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useFormState(submitReviewAction, INIT_STATE);
  const params = useParams();
  const dialogRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    dialogRef?.current?.showModal();
    window && (window.document.body.style.overflow = "hidden");

    dialogRef?.current?.addEventListener("close", handleModalClose);

    return () => {
      dialogRef?.current?.removeEventListener("close", handleModalClose);
    };
  }, [open]);

  useEffect(() => {
    if (state.message === "success") {
      formRef.current?.reset();
      handleModalClose();
    }
  }, [state]);

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
          <form action={formAction} ref={formRef}>
            <div className="my-4">
              <label htmlFor="name" className="block text-slate-200 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
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
                required
                className="h-36 appearance-none border border-secondary-300 bg-secondary-400/30 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline focus:ring-0 focus:outline-accent"
              ></textarea>
            </div>

            <input type="hidden" name="media_id" id="media_id" value={Object.values(params)[0]} />

            <div className="my-4 flex gap-4 items-center">
              <SubmitButton />
              <span
                className="text-red-500 hover:text-red-400 cursor-pointer"
                onClick={handleModalClose}
              >
                Cancel
              </span>
            </div>
            {state.message === "fail" && <p className="text-sm text-red-600 mt-1">{state.error}</p>}
          </form>
        </div>
      </dialog>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="border text-white border-accent rounded-lg py-2 px-3 hover:bg-accent hover:text-secondary disabled:bg-secondary-300 disabled:border-slate-400"
    >
      {pending ? "Creating..." : "Create"}
    </button>
  );
}

export default CreateReview;
