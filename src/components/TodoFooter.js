function TodoFooter({ leftCount }) {
  return (
    <div className="todo-footer">
      {leftCount} item{leftCount !== 1 ? "s" : ""} left
    </div>
  );
}
export default TodoFooter;
