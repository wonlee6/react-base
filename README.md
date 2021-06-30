# React Study

> 출처 드림 코딩

### 목차

1. state, props
2. 오브젝트
3. React Component
4. 리액트 동작 원리

# state and props

## state

컴포넌트 안에서 우리가 정의한 컴포넌트의 state 오브젝트 입니다.

컴포넌트 UI를 위한 데이터를 보관하는 오브젝트로, 이 state라는 오브젝트를 통해서 데이터에 업데이트가 발생하면 리액트가 자동적으로 우리가 구현한 render 함수를 호출하죠. 이 부분은 아마 제가 개념 설명을 할때 많이 얘기 해서 잘 아실것 같아요 🙌

![state](https://files.cdn.thinkific.com/file_uploads/292401/images/2c3/f08/d8a/1601248661813.jpg)

## Props

컴포넌트 밖에서 주어지는 데이터 입니다.

컴포넌트 안에서 자체적으로 데이터를 정의해서 사용하는 State와는 다르게, Props은 컴포넌트 외부에서 데이터를 제공받습니다. 가장 근본적인 이유는 컴포넌트의 재사용을 높이기 위해서죠 :) 상황에 따라 주어진 데이터를 받아서 그 데이터에 맞게 UI를 보여주기 위해서 사용 되어져요.

아래처럼 부모컴포넌트에서 이렇게 LikeButton 컴포넌트를 사용할때 title, onClick과 같은 아이들을 인자로 전달해 주면 이 아이들이 props 오브젝트로 묶여서 LikeButton 컴포넌트에 전달되어집니다.
![props](https://files.cdn.thinkific.com/file_uploads/292401/images/3fb/f4a/03a/1601248661740.jpg)  
그래서 LikeButton안에서 this.props.title, this.props.onClick으로 각각 전달된 'Like' 와 'this.handleClick' 함수에 접근 할 수가 있어요 :)

![im](https://files.cdn.thinkific.com/file_uploads/292401/images/c0e/e68/9fb/Screen_Shot_2020-09-28_at_9.27.00_am.png)
이렇게 App 부모 컴포넌트에서 LikeButton 컴포넌트에 title과 onClick을 인자로 전달해 주면
![im1](https://files.cdn.thinkific.com/file_uploads/292401/images/c83/326/546/Screen_Shot_2020-09-28_at_9.26.41_am.png)
전달된 인자들이 오브젝트로 묶어져서 LikeButton컴포넌트 안에서 this.props으로 할당되어집니다.

![aa](https://files.cdn.thinkific.com/file_uploads/292401/images/0e9/0b9/7b0/Screen_Shot_2020-09-28_at_9.29.22_am.png)

# 오브젝트 할당

## 기본정리

변수에 문자열, 숫자와 같은 원시형 데이터를 할당하게 되면 데이터 자체가 변수에 할당되지만,

오브젝트를 변수에 할당하면 변수에는 오브젝트가 메모리에 들어있는 주소인, 참조 값이 할당된다.

예를 들면,

```js
const num = 2; // num에는 숫자 2가 들어 있고
const numObj = { num: 2 }; // numObj에는 x1234 주소가 들어가 있음
```

위 코드 보면 `num` 변수에는 숫자 2자체가 들어있지만,  
`numObj`에는 `{num:2}` 오브젝트가 메모리에 들어 있는 주소인, 참조값이
예를들면 주소가 x1234라고 하면, x1234가 할당된다.

### 오브젝트를 가르키는 변수를 다른 변수에 할당하면?

```js
const a = { id: `1`, count: 0 };
const b = { id: `2`, count: 0 };
const c = b;
```

- 총 2개의 오브젝트가 메모리에 생성 됨
- 3개의 변수가 메모리에 생성 됨

```js
const a = { id: `1`, count: 0 };
```

id가 1인 오브젝트가 메모리에 생성되고(참조값을 x123이라고한다면)  
그 참조값이 변수 a에 할당 되어진다. 즉, a에는 x123이 들어있음

```js
const b = { id: `2`, count: 0 };
```

id가 2인 오브젝트가 메모리에 생성되고(참조값 x234)그 참조 값이 변수 b에 할당되어진다. 즉 b에는 x234가 들어 있음

```js
const c = b;
```

b변수를 c에 할당하니, b변수에 들어있던 참조값 x234가 c변수에 복사되어져서 할당이 된다.  
즉, c변수에는 b변수와 마찬가지로 x234가 들어가 있다

변수에 할당된 값들을 살펴보면 모두 오브젝트를 가리키고 있는 참조값이 들어 있고,
**b와 c변수는 id가 2인 동일한 오브젝트를 가르킨다.**

```js
b.count = 1;
console.log(b);
console.log(c);
```

여기서 b 변수를 이용해서 b변수가 가리키고 있는 오브젝트의 count 값을 변경하고, b와 c변수를 출력한다면?

```js
{id: "2", count: 1} // b
{id: "2", count: 1} // c
```

동일한 결과값이 나온다.  
b와 c는 동일한 오브젝트를 가리키고 있기 때문에 b를 통해서든 c를 통해서든 오브젝트를 수정하게 되면 b와 c는 수정된 내용을 바로 적용받게 된다.

이것들은 다 오브젝트는 _값(Value) 자체가 변수에 저장되는 것이 아니라_, **참조값(Reference)이 저장되기 때문**

그래서 아무리 오브젝트 변수를 const라고 상수 변수로 저장해 두어도, 참조값 자체는 바꿀 수 없지만 (다른 오브젝트로 다시 대체 할 순 없지만) 오브젝트 자체의 데이터는 수정이 가능한 이유중에 하나

또, 오브젝트 변수를 함수 인자로 전달해서 함수 안에서 오브젝트를 변경해도, 함수 밖에서 다시 그 오브젝트의 변경사항을 볼수 있다

이 모든 것들이 변수에는 오브젝트의 참조값이 들어 있게 때문

## 배열로 연결해서 생각해 보면?

```js
const array = [
 {id: '1', count: 0}
 {id: '2', count: 0}
]
```

총 생성된 오브젝트는 3개

> id가 1인 오브젝트 하나, id가 2인 오브젝트 하나, 배열 자체의 오브젝트 하나

```js
const array = [ // x567
 {id: '1', count: 0} // x123
 {id: '2', count: 0} // x234
]
```

- `array[0]` 에는 id가 1인 오브젝트의 참조값 x123이 들어가 있다.
- `array[1]` 에는 id가 2인 오브젝트의 참조값 x234이 들어가 있다.
- `array[]` 배열자체의 오브젝트의 주소는 x567

```js
const array = [ // x567
 {id: '1', count: 0} // x123
 {id: '2', count: 0} // x234
]
const array2 = array //x567
const array3 = [...array] //x999
```

`array2`에는 단순히 `array` 변수에 할당하니, `array` 에 들어 있던 참조값인 x567이 그대로 할당된다.  
즉, `array` 와 `array2` 는 동일한 배열 오브젝트를 가르키므로, 한쪽에서 `id` 가 1인 오브젝트의 `count` 를 변경해도 _둘다 변경된 내용을 볼 수 있고_, 한쪽에서 배열에 새로운 아이템을 추가 해도 _둘다 변경된 내용을 볼 수 있다._ 둘다 총 3개의 아이템이 들어 있겠죠?

`array3` 은 단순히 참조 값을 가지고 온 것이 아니라,

spread Operator 를 이용해서 `array`에 있는 모든 아이템들을 새로운 배열로 가지고 와서 새로운 배열을 만들게 된다. 그래서 완전히 새로운 배열 오브젝트를 가르키게 된다.

하지만, **spread Operator는 배열 안의 모든 오브젝트 내용들을 일일이 복사해서 새로운 것을 만드는 것이 아니라**, 오브젝트는 그대로 두고 `array` 배열을 빙글 빙글 돌면서 각각의 아이템들의 _참조값을 복사 하게 된다._

즉, `array3` 배열 안에는 `array` 안에 들어 있는 동일한 오브젝트들이 들어 있지만, **배열 오브젝트자체만 새롭게 만들어진다**

```js
array[0].count = 2;
console.log(array[0]); // {id: '1', count: 2}
console.log(array2[0]); // {id: '1', count: 2}
console.log(array3[0]); // {id: '1', count: 2}
```

`array` 배열에 새로운 아이템을 추가하면 `array2`는 `array` 배열과 동일한 배열을 가르키고 있기 때문에 새로운 아이템이 추가 되는 것을 확인할 수 있지만, `array3`에서는 확인할 수 없다.

**array3은 새로운, 엄연히 다른 배열 오브젝트이기 때문**

```js
array.push({ id: "3", count: 0 });
console.log(array.length); // 3
console.log(array2.length); // 3
console.log(array3.length); // 2
```

> Spread Operator는 Shallow-cloning을 합니다. 🚨  
> Spread Operator를 이용하면 처음에는 안에 들어 있는 내용물들을 복사해 오지만 (값이 아니라 레퍼런스, 참조값만 복사해 오죠!)

# React Component

> 리액트에서 컴포넌트란 웹어플리케이션, 웹페이지에서 독립적이고 재사용이 가능한 단위로 나뉘어진 블럭을 말한다.

## Class Component

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

위처럼 리액트에서 제공되는 `React.Component` 클래스를 상속하는 클래스를 만들면 되고, UI가 어떻게 표기 될 것인지 정의하는 `render()` 함수를 구현해 주어야 한다.

컴포넌트 자체에 계속 기억이 되어져야 하는, UI를 표기 하기 위한 데이터가 있다면, `this.state` 멤버 변수에 오브젝트 형태로 데이터를 저장할 수 있다.

그래서 `render()` _함수가 아무리 많이 호출이 되어져도_ `this.state`_에 들어 있는 데이터는 변하지 않기 때문에_, 컴포넌트에서 가지고 있던 데이터를 잃어 버리지 않고 일정하게 데이터를 사용자에게 보여줄 수 있다.

컴포넌트에서 데이터를 변경해서 UI를 업데이트 해주고 싶다면, 간단하게 `this.state`**만 업데이트 해주면 리액트가 알아서 `render()` 함수를 다시 호출해 주고 브라우저에 업데이트를 해주게 된다.**

정리하면, 리액트에서 컴포넌트를 만들려면 `React.Component` _클래스를 상속하고_, **데이터를 꼭 this.state에 담아 두고**, _render() 함수에 Html과 같은 JSX 문법을 이용해서 데이터를 어떻게 UI로 표기 할건지 정의를 해놓도록 만들기!_

### 리액트는 변경사항이 한가지의 방향으로 흘러간다.

데이터가 변경되면 -> UI가 업데이트 된다.

즉, **데이터(state)가 변경이 되면 -> 리액트가 render() 함수를 호출해서 UI가 업데이트 된다.**

## 함수형 컴포넌트

```jsx
function Welcome(props) {
  return <h1>Hello, {this.props.name}</h1>;
}

const Welcome = (props) => {
  return <h1>Hello, {this.props.name}</h1>;
};
```

이렇게 함수형으로 표현이 가능하다.

컴포넌트 자체에 `데이터(State)`가 없는 경우, 외부에서 전달받은 `데이터(Props)`만 보여주면 되거나, 아니면 `State`, `Props` 둘다 없는 아주 정적인 컴포넌트인 경우 굳이 클래스를 정의 하지 않고 이렇게 함수 만으로 리액트 컴포넌트를 만들 수 있다.

앞에서 설명해드린 클래스와는 반대로 함수의 특성상, 함수를 호출할때마다 _함수의 코드 블럭이 다시 실행이 되고, 그안에 선언한 모든 로컬 변수들은 함수의 실행 컨텍스 안에서 재 정의, 값이 할당되어진다._

그래서 함수 안에서 `State`를 보관해서 일관적으로 사용자에게 보여줄 수 있는 방법이 없기 때문에 (함수가 호출될때 모든 로컬 변수들의 값이 초기화 되어서 기존의 데이터 들이 다 초기화 되겠죠?) 일반 함수형 컴포넌트에서는 컴포넌트만의 자체적인 `데이터(State)`를 가질 수가 없다.

그래서 함수형 컴포넌트는 따로 `State`가 필요 없고, 리액트에서 제공하는 라이프 싸이클 메소드들을 사용하지 않아도 될때, 그럴때 간편하게 함수만 정의해서 사용할 수 있다 :)

## React Hooks

함수형 컴포넌트에서 클래스 컴포넌트에서만 이용이 가능했던 State와 라이프 싸이클 메소드들을 이용할 수 있도록 도와주는, 함수형 컴포넌트에 리액트의 다른 기능들을 갈고리처럼 연결해주는 아이들을 말한다.

# 리액트 동작 원리

```jsx
class App extends Component {
  state = {
    count: 0,
  };
  return() {
    return (
      <>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            // 클릭이 되면 count를 하나씩 증가 한다
          }}
        >
          Click
        </button>
      </>
    );
  }
}
```

위 코드를 보면, Class Component이고, `this.state`에는 수자를 담을 수 있는 `count`가 들어있는 오브젝트가 있다. 그리고 `button`이 클릭되면 `onClick`콜백이 실행될 것이고, 거기에서 `state`를 업데이트

## State를 바로 수정하는 경우

```jsx
class App extends Component {
  state = {
    count: 0,
  };
  return() {
    return (
      <>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            this.state.count++;
          }}
        >
          Click
        </button>
      </>
    );
  }
}
```

위와 같이 코드를 작성한다면 ?  
=> 작동하지 않음

> 리액트에서 제대로 상태를 업데이트 하기 위해서는 리액트에서 제공하는 `setState` 함수를 호출해야 한다.

```jsx
class App extends Component {
  state = {
    count: 0,
  };
  return() {
    return (
      <>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
      </>
    );
  }
}
```

위 코드를 보면, setState 함수를 이용하여 새로운 상태 오브젝트를 인자로 전달한다.  
리액트가 업데이트 되어야 한다고 알아 차리게 하기 위해서는 이렇게 `setState` _함수를 호출해 주어야 한다._

`setState` 함수가 호출이 되면 이제 리액트는 현재 컴포넌트가 가지고 있는 상태와(`this.state`), 업데이트 해야 하는 새로운 상태(`setState` 함수의 인자로 전달된 새로운 오브젝트) **두 가지를 비교해서 업데이트가 필요한 경우 해당 컴포넌트의 `render()` 함수를 호출해준다.**

### 컴포넌트를 업데이트 할때 현재 컴포넌트의 상태와 새로운 상태를 비교하는 방식

`PureComponent`인 경우에는 두가지를 얇게 비교해서 달라진게 있다면 컴포넌트를 업데이트 한다.

일반 Component 경에는 따로 lifeCycle Method 중 하나인 shouldComponentUpdate를 구현하지 않았다면 setState가 호출될때마다 무조건 render() 함수가 호출된다.

> setState는 비동기 API

setState를 호출한다고 해서 무조건 바로 render() 함수가 호출되는 것이 아니라,  
리액트에 업데이트 요청을 하기만 하고 다시 뒤에 이어지는 코드가 실행되어 진다.

## 중요한 것

**`state`를 업데이트 할 때 이전 `state` 값에서 무언가가 계산이 되어지느 경우라면**

컴포넌트 내의 `state` 값에 의존해서 계산한 값을 `setState(updated)`로 설정하기 보다는,  
`setState(prevState => newState)` 이렇게 이전 `state` 값을 받아서 그걸로 업데이트 되는 `state` 값을 만드는 `arrow` 함수를 전달할 수 있는 함수를 호출 하는 것이 좋다.

### 리액트에서 제공되는 setState 함수는 두 가지 종류가 있다.

1. `setState(newState)` : 새로운 `state` **오브젝트를 인자**로 바로 받는 함수
2. `setState(prevState => {return newState})` : 이전 `state` 를 받아서 그걸로 계산해서 새로운 `state`를 리턴하는 **함수를 인자로 받는 함수**

코드로 보면

```jsx
<button
  onClick={() => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }}
>
  Click
</button>
```

추가 학습할 경우 [여기](https://reactjs.org/docs/state-and-lifecycle.html) 들어가서 확인

## state를 수정하면 안되는 이유?

> 리액트에서는 상태를 직접적으로 절대! 그 어떤 경우에도 절대! 수정하면 좋지 않다.

```jsx
class App extends Component {
  state = {
    count: 0,
  };
  return() {
    return (
      <>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            this.state.count++; // 여기
            this.setState(this.state);
          }}
        >
          Click
        </button>
      </>
    );
  }
}
```

위 코드상으론 동작에 문제가 없다.

하지만 좋지 않은 이유로

1. `setState` 는 _비동기적으로 동작한다._  
   즉, **이전 업데이트 내용이 다음 업데이트 내용으로 덮어 쓰여질 수 있고**, 예상치 못한곳에서 버그가 생길 위험이 있다.
2. `PureComponent`에서 정상적으로 동작 하지 않는다.  
   위 코드에서` pureComponet`로 변경시 동작하지 않는다.

   `PureComponent`는 _현재 컴포넌트가 가지고 있는 상태와_(`this.state`) *업데이트 해야 하는 새로운 상태*의 **레퍼런스를 비교해서 업데이트가 필요한 경우** 해당 컴포넌트의 `render()` 함수를 호출한다.

   위 코드 경우 `this.state` 오브젝트를 직접적으로 수정해서 `setState`함수에 동일한 오브젝트를 전달하니깐, 비교 해야 하는 대상의 레퍼런스가 동일하므로 리액트는 업데이트 할 필요가 없다고 판단해서 `render()` 함수를 호출해주지 않는다.

> 즉, 리액트 상태 `State`를 직접적으로 수정하는 것은 예상치 못한 문제가 발생할 수 있기 때문에 꼭 불변성을 유지 하는 것이 좋다.
