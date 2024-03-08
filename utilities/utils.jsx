export function capitalLetter(str) {
  const splitStr = str.split("-");
  const mappedStr = splitStr.map(
    (e) => `${e.slice(0, 1).toUpperCase()}${e.slice(1)}`
  );
  return mappedStr.join("-");
}
