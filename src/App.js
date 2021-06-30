import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

// pureComponent
// 업데이트 전과 후 props, state를 비교한다
// shouldComponentUpdate를 가지고 있따
// 비교후 동일하면 render 함수가 실행되지 않는다
class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    // console.log(`${habit.count}`);
    // state를 직접적으로 사용하는 것 보단 스프레드 연산자 사용해서 하자
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    const habits = this.state.habits.map((item) => {
      // 새로운 오브젝트를 만들어 작업
      if (item.id === habit.id) return { ...habit, count: habit.count + 1 };
      return item;
    });
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map((item) => {
      // 새로운 오브젝트를 만들어 작업
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    // item id와 habit의 아이디르 비교하여 새로운 배열로 반환하기에 내가 선택한게 삭제한거처럼됨
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  hadleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    const habits = this.state.habits.map((item) => {
      if (item !== 0) return { ...item, count: 0 };
      return item;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.hadleReset}
        />
      </>
    );
  }
}

export default App;
