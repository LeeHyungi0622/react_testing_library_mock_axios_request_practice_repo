import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import Fetch from "./Fetch";

// 각 test가 끝나면 clean하도록 설정
afterEach(cleanup);

it("fetches and displays data", async() => {
            const url = "/greeting";
            // Fetch component를 rendering하게 되면
            // rendering된 객체를 확인할 수 있다.
            // rendering된 객체 중에 속성으로 
            // data-testid=""로 id를 지정해준 부분으르 체크할 수 있다.
            const { getByTestId } = render( < Fetch url = { url }
                />)
                expect(getByTestId('loading')).toHaveTextContent('Loading data...');
            });