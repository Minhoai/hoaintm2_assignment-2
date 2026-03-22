function TodoItem({ item, onToggle, onRemove }) {
  return (
    <li className={`todo-item ${item.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
      <span className="todo-text">{item.text}</span>
      <button className="btn-delete" onClick={() => onRemove(item.id)}>
        Delete
      </button>
    </li>
  );
}
export default TodoItem;
