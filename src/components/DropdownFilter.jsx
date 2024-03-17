import { capitalLetter } from "../../utilities/utils";

export default function DropdownFilter({
  criteria,
  options,
  setCriteria,
  setPage,
}) {
  function submitOption(e) {
    e.preventDefault();
    if (e.target[0].value !== "choose") {
      setCriteria(e.target[0].value);
      setPage(1);
    }
  }

  return (
    <form className="dropdownFilterForm" onSubmit={submitOption}>
      <label
        className="dropdownFilterLabel"
        htmlFor={criteria + "Filter"}>{`${criteria}: `}</label>
      <select
        className="dropdownFilterSelect"
        type="text"
        id={criteria + "Filter"}
        defaultValue="choose"
        required>
        <option key="placeholder" value="choose" hidden>
          {`---${criteria}---`}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {capitalLetter(option)}
          </option>
        ))}
      </select>
      <button>{">>"}</button>
    </form>
  );
}
