import React, { memo } from "react";

// memo === purecomponent
const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  // DOM 요소에 접근하지 않고 createRef 통해 멤버 변수를 저장한 후
  // 원하는 곳에 ref 연결하면 됨

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = "";
    formRef.current.reset();
  };

  return (
    // submit => 페이지가 리프래쉬 됨 preventDefault 사용하면댐
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add-input'
        placeholde='Habit'
      />
      <button className='add-button'>Add</button>
    </form>
  );
});

export default HabitAddForm;
