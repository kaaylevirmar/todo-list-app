import { useState } from "react";
import NavbarCommon from "../components/common/navbar";
import TodoListCompletedView from "./todo_list_completed_view";
import TodoListView from "./todo_list_view";

function App() {
  const [pageNavigator, setPageNavigator] = useState(1);
  return (
    <div className="App">
      <NavbarCommon setView={setPageNavigator} />
      {pageNavigator === 2 && <TodoListCompletedView />}
      {pageNavigator === 1 && <TodoListView />}

      {/* <button
        onClick={() => {
          setPageNavigator(1);
        }}
        className="p-5 bg-black"
      >
        1
      </button>
      <button
        onClick={() => {
          setPageNavigator(2);
        }}
        className="p-5 bg-blue-400"
      >
        2
      </button> */}
    </div>
  );
}

export default App;
