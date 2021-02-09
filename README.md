# **RTL(React Testing Library)를 활용한 Axios Mockup 테스트**

<img src="img/210209_react_testing_library.png" alt="210209_react_testing_library">

실습의 전반적인 내용은 아래 링크의 페이지에 자세하게 설명이 되어있다. <br/>
[https://testing-library.com/docs/react-testing-library/example-intro/](https://testing-library.com/docs/react-testing-library/example-intro/)

### <ins>**React Testing Library 설치**</ins>

```bash
$ npm install --save-dev @testing-library/react
```

<br/>

### (1) <ins>**react-testing-library에서 지원하는 render()function을 이용해서 테스트하고자 하는 component의 rendering 테스트하기**</ins>

```javascript
import { render } from "@testing-library/react";
import Fetch from "./Fetch";
....
const { getByTestId } = render(<Fetch url={url} />);
```

<br/>

### (2) <ins>**rendering한 component의 요소에 `data-testid`를 지정해서 해당요소를 검사할 수 있다. **</ins>

```javascript
import "@testing-library/jest-dom/extend-expect";

it("fetches and displays data", async () => {
  const url = "/greeting";
  // Fetch component를 rendering하게 되면 rendering된 객체를 확인할 수 있다.
  // rendering된 객체 중에 속성으로 data-testid로 id를 지정해준 부분을 체크할 수 있다.
  const { getByTestId } = render(<Fetch url={url} />);
  expect(getByTestId("loading")).toHaveTextContent("Loading data...");
});
```

<br/>

### (3) <ins>**각 테스트 단계가 끝나면 테스트 상태를 초기화 시키기 위해서 `afterEach(cleanup)`를 사용한다. (cleanup은 react-testing-library에서 지원한다)**</ins>

```javascript
afterEach(cleanup);
```
