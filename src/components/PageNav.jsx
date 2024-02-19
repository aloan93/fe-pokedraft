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
    <>
      <button onClick={pageDown} hidden={page === 1}>
        {"<"}
      </button>
      <p>{page}</p>
      <button onClick={pageUp} hidden={page * 10 >= resultTotal}>
        {">"}
      </button>
    </>
  );
}
