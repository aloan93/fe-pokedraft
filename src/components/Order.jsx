export default function Order({ order, setSearchParams }) {
  function inputOrder(e) {
    setSearchParams((prev) => {
      e.target.value === "Ascending"
        ? prev.set("order", "asc")
        : prev.set("order", "desc");
      prev.delete("page");
      return prev;
    });
  }

  return (
    <form className="radioSorting" onChange={inputOrder}>
      <fieldset>
        <legend>Order</legend>
        <label htmlFor="ascending">
          Ascending
          <input
            id="ascending"
            type="radio"
            value="Ascending"
            readOnly
            checked={order === "asc"}
          />
        </label>
        <label htmlFor="descending">
          Descending
          <input
            id="descending"
            type="radio"
            value="Descending"
            readOnly
            checked={order === "desc"}
          />
        </label>
      </fieldset>
    </form>
  );
}
