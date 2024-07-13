export default function contentParser(string) {
  if (typeof string !== "string") {
    throw `unable to parse type ${typeof string}. input must be a string`;
  }

  const result = string.split("\n").map((stringContent, index) => {
    return (
      <span key={index}>
        {stringContent}
        <br />
      </span>
    );
  });
  return result;
}
