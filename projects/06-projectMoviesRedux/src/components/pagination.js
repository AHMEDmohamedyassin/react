import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ page, pageNum }) => {
    const handlePageClick = (e) => {
        page(e.selected + 1);
    };
    let pageCount = pageNum;
    return (
        <div>
            {pageNum > 1 ? (
                <ReactPaginate
                    breakLabel={null}
                    nextLabel="التالي >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={0}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    previousLabel="< السابق"
                    renderOnZeroPageCount={null}
                    containerClassName={
                        "pagination d-flex justify-content-center my-5"
                    }
                    pageClassName={"page-item"}
                    nextClassName={"page-item mx-2"}
                    previousClassName={"page-item mx-2"}
                    activeClassName={"page-item"}
                    breakClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    nextLinkClassName={"page-link"}
                    previousLinkClassName={"page-link"}
                    breakLinkClassName={"page-link"}
                    activeLinkClassName={"page-link"}
                />
            ) : null}
        </div>
    );
};
