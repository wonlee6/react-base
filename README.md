# React Study

> 출처 드림 코딩



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