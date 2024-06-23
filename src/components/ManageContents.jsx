export default function ManageContents({ page, children }) {
  if (children.length > 1) {
    return children[page];
  }
  return children;
}
