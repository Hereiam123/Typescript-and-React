import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const textInpuRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInpuRef.current!.value;
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text </label>
        <input type="text" id="todo-text" ref={textInpuRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
