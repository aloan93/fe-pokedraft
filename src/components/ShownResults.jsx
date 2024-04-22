export default function ShownResults({
  resultTotal,
  page,
  isInvalidPage,
  limit,
}) {
  const currentResultsShown = `Showing results ${
    page * limit - (limit - 1)
  } - ${page * limit > resultTotal ? resultTotal : page * limit}`;

  if (resultTotal === 0)
    return <p className="shownResults">No matching results</p>;
  else if (isInvalidPage) return <p className="shownResults">Invalid page</p>;
  else
    return (
      <p className="shownResults">{`${currentResultsShown} of ${resultTotal}`}</p>
    );
}
