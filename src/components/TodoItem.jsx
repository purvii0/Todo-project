function TodoItem({ item, handleToggle, handleDelete }) {
  return (
    <div>
      {item.title} - {item.status ? "Done" : "Not Done"}
      <button
        onClick={() => {
          handleToggle(item.id);
        }}
      >
        {" "}
        Toggle
      </button>
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
