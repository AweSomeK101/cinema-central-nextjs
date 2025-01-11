"use client";

import Link from "next/link";

function Error({ error, reset }) {
  return (
    <>
      <h3 className="text-2xl text-center">⚠ Something went wrong ⚠</h3>
      <p className="text-center">{error.message || ""}</p>

      <div className="flex gap-8 justify-center items-center my-4">
        <Link href="/" className="text-slate-300">
          HOME
        </Link>
        <button onClick={reset} className="border border-primary hover:bg-primary p-2 rounded">
          Try Again
        </button>
      </div>
    </>
  );
}

export default Error;
