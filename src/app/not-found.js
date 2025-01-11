import Link from "next/link";

export const metadata = {
  title: "CC - Page not found",
};

function NotFound() {
  return (
    <>
      <h3 className="text-2xl text-center my-4">💔 Requested page was not found 💔</h3>
      <Link href="/" className="inline-block text-center text-slate-300 w-full">
        HOME
      </Link>
    </>
  );
}

export default NotFound;
