export default function PageNav({ page, setPage, resultTotal }) {
  function pageDown(e) {
    e.preventDefault();
    setPage(page - 1);
  }

  function pageUp(e) {
    e.preventDefault();
    setPage(page + 1);
  }

  return (
    <div className="pageNavDiv">
      <button
        className="pageNavButton"
        id="pageNavButtonBack"
        onClick={pageDown}
        hidden={page === 1}>
        {"<"}
      </button>
      <p className="pageNavCurrentPage">{page}</p>
      <button
        className="pageNavButton"
        id="pageNavButtonForward"
        onClick={pageUp}
        hidden={page * 20 >= resultTotal}>
        {">"}
      </button>
    </div>
  );
}
