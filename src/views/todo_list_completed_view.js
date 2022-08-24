import React from "react";
import { ListDisplay } from "./todo_list_view";
import { useSelector } from "react-redux";

const TodoListCompletedView = () => {
  const { doneList } = useSelector((state) => state.todo);
  return (
    <div>
      <div className="w-1/2 m-auto">
        <ListDisplay isCompleted={true} todo={doneList} />
      </div>
    </div>
  );
};

export default TodoListCompletedView;
