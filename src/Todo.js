// // Todo.js
// import Todoitem from "./Todoitem";
// import React, { useState } from "react";

// const Todo = () => {
//   const [todo, setTodo] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const handleAdd = () => {
//     if (newTodo.trim() !== "") {
//       setTodo([...todo, newTodo]);
//       setNewTodo("");
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todo.filter((_, i) => index !== i);
//     setTodo(updatedTodos);
//   };

//   return (
//     <div className="TodoList">
//       <label>ADD List</label>
//       <input type="text"value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={handleAdd}>Add</button>
//       {todo.map((tt, index) => (
//         <Todoitem
//           key={index}
//           todo={tt}
//           onDelete={() => handleDeleteTodo(index)} // Pass onDelete function correctly
//         />
//       ))}
//     </div>
//   );
// };

// export default Todo;
