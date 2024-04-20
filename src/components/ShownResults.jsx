export default function ShownResults({ resultTotal, page, isInvalidPage }) {
  const currentResultsShown = `Showing results ${
    resultTotal === 0 ? 0 : page * 20 - 19
  } - ${page * 20 > resultTotal ? resultTotal : page * 20}`;

  if (resultTotal === 0)
    return <p className="shownResults">No matching results</p>;
  else if (isInvalidPage) return <p className="shownResults">Invalid page</p>;
  else
    return (
      <p className="shownResults">{`${currentResultsShown} of ${resultTotal}`}</p>
    );
}
