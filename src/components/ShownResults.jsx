export default function ShownResults({ resultTotal, page }) {
  const currentResultsShown = `Showing results ${page * 20 - 19} - ${
    page * 20 > resultTotal ? resultTotal : page * 20
  }`;

  return <p>{currentResultsShown}</p>;
}
