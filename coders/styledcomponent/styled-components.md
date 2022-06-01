## styled-components

1. props

-   컴포넌트에 props를 넘겨서 받아서 사용할 수 있다.

```javascript
const Box = styled.div`
    background-color: ${({ bgColor }) => (bgColor ? bgColor : 'teal')};
    width: 100px;
    height: 100px;
`;
```

2. 원래있던 컴포넌트의 스타일에 추가하여 새로운 컴포넌트를 만들때.

-   Box속성에 border-radius만 새로 추가하여 Circle컴포넌트를 생성

```javascript
const Circle = styled(Box)`
    border-radius: 50px;
`;
```

3. as

-   이미 스타일된 컴포넌트를 as를 사용하여 스타일은 그대로 쓰되, 태그를 바꿔준다.

```javascript
//button태그를 a태그로 바꿔줌 Log in
<Btn as="a" href="/">
    Log in
</Btn>
```

4. attr

-   태그의 속성들을 지정해줄 수 있다.

```javascript
// input의 속성들을 추가해줌
const Input = styled.input.attrs({ required: true, maxLength: 8 })`
    background-color: tomato;
`;
```

5. animation

-   styled-componetns에서 keyframes를 지원한다. (import해서 쓰면댐)

```javascript
const rotateAnimate = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        transform: rotate(360deg);
        border-radius: 100px;
    }
    100%{
        transform: rotate(0deg);
        border-radius: 0px;
    }
`;
const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    animation: ${rotateAnimate} 1s linear infinite;
`;
```

6. selectors

-   &(Pseudo Selector) : 자기 자신을 가리킴

```javascript
// &을 사용하여 hover를 작성함
const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;

    &:hover {
        background-color: black;
    }
`;
```

-   child태그를 지정할 수 있음.

```javascript
//Box컴포넌트 하위의 span을 select 함
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 30px;

        &:hover {
            font-size: 60px;
        }
    }
`;
```

-   component를 select 할 수 도 있음.

```javascript
//Emoji 컴포넌트를 선택
const Emoji = styled.span`
    font-size: 30px;
`;
const Box = styled.div`
    display: flex;

    ${Emoji} {
        &:hover {
            font-size: 98px;
        }
    }
`;
```

7. ThemeProvider

-   Dark mode, Light mode를 구현할때 사용.

```javascript
//dark, light theme을 설정후 App컴포넌트를 Provider로 감싸준다.
const darkTheme = {
    textColor: 'whitesmoke',
    backgroundColor: '#111',
};
const lightTheme = {
    textColor: '#111',
    backgroundColor: 'whitesmoke',
};

<ThemeProvider theme={darkTheme}>
    <App />
</ThemeProvider>;

//이후에 컴포넌트에서 global props로 받은 theme객체의 프로퍼티를 사용
const Title = styled.h1`
    color: ${props => props.theme.textColor};
`;
```
