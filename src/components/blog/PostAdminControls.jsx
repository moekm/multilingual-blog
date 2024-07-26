export default function PostAdminControls({ onDelete, onEdit, onSave }) {
  return (
    <div id="edit-post">
      {onSave ? (
        <button onClick={onSave}>Save</button>
      ) : (
        <button onClick={onEdit}>Edit</button>
      )}
      <button className="delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
