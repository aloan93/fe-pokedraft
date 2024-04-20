export default function PageNav({
  page,
  setSearchParams,
  resultTotal,
  isInvalidPage,
}) {
  function pageDown(e) {
    e.preventDefault();
    setSearchParams((prev) => {
      prev.set("page", page - 1);
      return prev;
    });
  }

  function pageUp(e) {
    e.preventDefault();
    setSearchParams((prev) => {
      prev.set("page", page + 1);
      return prev;
    });
  }

  if (resultTotal <= 20 || isInvalidPage) return null;
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
