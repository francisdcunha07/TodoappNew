import react from "react";

const List = ({ listData, handleTodoClick }) => (
  <div>
    <h2>Todo List</h2>
    {listData &&
      listData.map((item) => {
        return <div key={item.id}>
         <label>
        <input type="checkbox" checked={item.complete} onChange={() => handleTodoClick(item.id)} />
        {item.name}
      </label></div>;
      })}
  </div>
);

export default List;
