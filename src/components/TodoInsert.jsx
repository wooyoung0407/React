import { useState } from "react";

function TodoInsert({ onInsert }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    onInsert(text);
    setText("");
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        placeholder="할일을 입력하세요."
        onChange={onChange}
      />
      <button type="submit">입력</button>
    </form>
  );
}

export default TodoInsert;
