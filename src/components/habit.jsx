import React, { PureComponent } from "react";

class Habit extends PureComponent {
  // state 초기값
  // state = {
  //   count: 0,
  // };
  handleIncrement = () => {
    // state Obejct 안에 있는 count를 증가 한뒤 state를 업데이트해야됨
    // setState 사용해야지 렌더링 됨
    // this.setState({ count: this.state.count + 1 });
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    // console.log(this.props.habit);
    // const habitName = this.props.habit.name;
    const { name, count } = this.props.habit;
    // const { count } = this.props;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
        >
          <i className='fas fa-plus-square'></i>
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecrement}
        >
          <i className='fas fa-minus-square'></i>
        </button>
        <button
          className='habit-button habit-delete'
          onClick={this.handleDelete}
        >
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
