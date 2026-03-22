import TodoItem from "./TodoItem";
function TodoList({ items, onToggle, onRemove }) {
  if (items.length === 0) {
    return <div className="empty-state">No items in here</div>;
  }

  return (
    <>
      <h3>TodoList</h3>
      <ul className="todo-list">
        {items.map((it) => (
          <TodoItem
            key={it.id}
            item={it}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </>
  );
}
export default TodoList;
