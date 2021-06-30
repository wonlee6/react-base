import React, { Component } from "react";

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  // DOM 요소에 접근하지 않고 createRef 통해 멤버 변수를 저장한 후
  // 원하는 곳에 ref 연결하면 됨

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };
  render() {
    return (
      // submit => 페이지가 리프래쉬 됨 preventDefault 사용하면댐
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type='text'
          className='add-inpuit'
          placeholde='Habit'
        />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
