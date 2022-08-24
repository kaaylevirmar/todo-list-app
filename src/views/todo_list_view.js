import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { InputComponent, TextAreaComponent } from "../components/Input_common";
import { POPUPTYPE, sweetAlertPopup } from "../helpers/sweetalert_popup_helper";
import { setDoneList, setList } from "../redux/slice/todoList_slice";

const TodoListView = () => {
  const { list } = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  // const [title, setTitle] = useState("");
  const form = useFormik({
    initialValues: { title: "", description: "" },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is Required!"),
      description: Yup.string().required("Description is required!!"),
    }),
    onSubmit: (values, { resetForm }) => {
      // if (title === "" || description === "") return null;
      //if (description === "") return null;
      // filter, Find index, Splice, push
      try {
        dispatch(
          setList([
            ...list,
            { title: values.title, description: values.description },
          ])
        );
        //throw new Error("Failed to add new todo");

        sweetAlertPopup(POPUPTYPE.success, "Added new Todo.");
        resetForm();
        // localStorage.clear();
        // localStorage.setItem("todo_list", JSON.stringify(todoList));
      } catch (error) {
        sweetAlertPopup(POPUPTYPE.failed, error.message);
      }

      // setTitle("");
      // setDescription("");
      // sweet alert 2
    },
  });

  //const [description, setDescription] = useState("");
  //const [todoList, setTodoList] = useState(
  //   JSON.parse(localStorage.getItem("todo_list")) ?? []
  // );
  // useEffect(() => {
  //   const item = JSON.parse(localStorage.getItem("todo_list"));
  //   console.log(item);
  //   if (localStorage.getItem("todo_list") !== null) {
  //     setTodoList(item);
  //   }
  //   if (localStorage.getItem("todo_list") === null) {
  //     localStorage.getItem("todo_list", JSON.stringify([]));
  //   }
  //   console.log(localStorage.getItem("todo_list"));
  // }, []);
  return (
    <div>
      <div className="w-1/2 m-auto">
        <InputComponent name="title" label="title" form={form} />
        <TextAreaComponent name="description" label="description" form={form} />

        <div className="mt-5">
          <button
            onClick={form.handleSubmit}
            className="px-5 py-3 bg-black text-white rounded hover:bg-gray-800"
          >
            Add todo
          </button>
          <ListDisplay todo={list} />
        </div>
      </div>
    </div>
  );
};

export default TodoListView;

export const ListDisplay = ({ todo = [], isCompleted = false }) => {
  const { doneList } = useSelector((state) => state.todo);

  const setCompleted = (index) => {
    const arrHolder = [...todo];
    const completedList = [...doneList];
    completedList.push(todo[index]);
    dispatch(setDoneList([...completedList]));
    arrHolder.splice(index, 1);
    dispatch(setList([...arrHolder]));
    sweetAlertPopup(POPUPTYPE.success, "Successfully completed the todo.");
  };
  const dispatch = useDispatch();
  const removeTodoList = (index) => {
    const arrHolder = [...todo];
    arrHolder.splice(index, 1);
    dispatch(setList([...arrHolder]));

    sweetAlertPopup(POPUPTYPE.success, "Successfully deleted todo.");
    // localStorage.setItem("todo_list", JSON.stringify(arrHolder));
  };
  return (
    <div className="mt-5">
      <label className="font-bold bg-auto">
        {isCompleted === false ? "TodoList" : ""}
      </label>
      <ul>
        {todo &&
          todo?.map((data, index) => {
            return (
              <li className=" m-2 border rounded border-black p-5" key={index}>
                <div className="flex flex-col gap-2 justify-center">
                  <div className="flex flex-row gap-2 items-center justify-between">
                    <span className="font-bold text-2xl font-inter ">
                      {data.title}{" "}
                    </span>
                    {isCompleted === false ? (
                      <div className="flex flex-row gap-2">
                        <div
                          className="bg-green-300 w-5 h-5 rounded-3xl hover:scale-105 "
                          onClick={() => {
                            setCompleted(index);
                            console.log(doneList);
                          }}
                        ></div>
                        <div
                          onClick={() => {
                            removeTodoList(index);
                          }}
                          className="bg-red-400 w-5 h-5 rounded-3xl hover:scale-105"
                        ></div>
                      </div>
                    ) : null}
                  </div>
                  <span className="">{data.description}</span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
