import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import Fetch from "./Fetch";

// 각 test가 끝나면 clean하도록 설정
afterEach(cleanup);

it("fetches and displays data", async() => {
            axiosMock.get.mockResolvedValueOnce({ data: { greeting: "hello there" } })
            const url = "/greeting";
            // Fetch component를 rendering하게 되면
            // rendering된 객체를 확인할 수 있다.
            // rendering된 객체 중에 속성으로 
            // data-testid=""로 id를 지정해준 부분으르 체크할 수 있다.
            const { getByTestId } = render( < Fetch url = { url }
                />)
                expect(getByTestId('loading')).toHaveTextContent('Loading data...');
                const resolvedSpan = await waitFor(() => getByTestId("resolved"));

                expect(resolvedSpan).toHaveTextContent("hello there");

                // axiosMock.get mockup function이 한 번 호출되었는지 체크
                expect(axiosMock.get).toHaveBeenCalledTimes(1);
                // axiosMock.get이 호출될때 같이 넘겨준 argument를 체크
                // axios.get() function의 argument로 지정 url을 넘겨주었는지 체크
                expect(axiosMock.get).toHaveBeenCalledWith(url);
            });