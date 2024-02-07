import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.todoName !== deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  };
  const toggleTodoStatus = (index) => {
    const updatedTodoList = todoList.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };
  return (
    <div className="bg-black w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto text-center bg-black p-5">
        <h1 className="text-4xl text-white font-bold mb-8">Todo List</h1>
        <form onSubmit={handleForm}>
          <div className="flex" >
          <input
            className="border-2 mr-3 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-10 text-black"
            type="text"
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-8 rounded-lg mb-10"
          >
            Add Todo
          </button>
          </div>
          
        </form>
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo, index) => {
              return (
              
                <li
                key={index}
                className={`bg-black mb-5 flex justify-between text-white py-5 rounded-lg text-3xl px-5 ${
                  singleTodo.completed ? "line-through text-red-600" : ""
                }`}
              >
                <input
                  type="checkbox"
                  onChange={() => toggleTodoStatus(index)}
                  checked={singleTodo.completed || false}
                />
                  {singleTodo.todoName}{" "}
                  <span
                    onClick={() => deleteTodo(singleTodo.todoName)}
                    className="text-red-600 cursor-pointer"
                  >
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;