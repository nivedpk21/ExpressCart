import React from "react";

export default function Pagination({ totalPosts, postsPerpage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pages.push(i);
  }

  return (
    <>
      {/* <div className="border rounded p-1 text-center" style={{ height: "50px" }}>
        {pages.map((page, index) => (
          <button
            className={page == currentPage ? "btn btn-primary active" : "btn btn-primary"}
            key={index}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        ))}
      </div> */}

        <nav aria-label="Page navigation">
          <ul class="pagination   justify-content-center ">
            <li className="page-item ">
              <a class="page-link btn" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pages.map((page, index) => (
              <li
                className={page == currentPage ? "page-item active" : "page-item"}
                aria-current="page"
              >
                <a
                  class="page-link "
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </a>
              </li>
            ))}
            <li class="page-item">
              <a class="page-link btn" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
    </>
  );
}
