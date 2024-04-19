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
  );
}
