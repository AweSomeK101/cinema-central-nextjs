"use client";

import ReactPaginate from "react-paginate";
import ChevronLeft from "@/../public/icons/chevron-left.svg";
import ChevronRight from "@/../public/icons/chevron-right.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Pagination({ totalPages }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handlePageClick({ selected }) {
    const params = new URLSearchParams(searchParams);

    params.set("page", (selected + 1).toString());

    router.push(pathname + "?" + params.toString());
  }
  return (
    <div>
      <ReactPaginate
        pageCount={Number(totalPages) - 1 || 0}
        onPageChange={handlePageClick}
        forcePage={Number(searchParams.get("page")) - 1 || 0}
        breakLabel="..."
        nextLabel={<ChevronRight />}
        pageRangeDisplayed={1}
        previousLabel={<ChevronLeft />}
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center sm:justify-start items-center gap-3"
        activeClassName="text-primary"
        pageClassName=""
      />
    </div>
  );
}

export default Pagination;
