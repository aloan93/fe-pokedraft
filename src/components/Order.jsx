export default function Order({ order, setOrder, setPage }) {
  function inputOrder(e) {
    e.target.value === "Ascending" ? setOrder("asc") : setOrder("desc");
    setPage(1);
  }

  return (
    <>
      <form onChange={inputOrder}>
        <fieldset>
          <legend>Order</legend>
          <label>
            Ascending
            <input
              type="radio"
              value="Ascending"
              readOnly
              checked={order === "asc"}
            />
          </label>
          <label>
            Descending
            <input
              type="radio"
              value="Descending"
              readOnly
              checked={order === "desc"}
            />
          </label>
        </fieldset>
      </form>
    </>
  );
}
