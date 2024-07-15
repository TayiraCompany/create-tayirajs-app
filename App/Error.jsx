import React, { memo, Suspense } from "react";
import styled from "styled-components";

const Container = styled.div``;
const ErrorFont = styled.h1`
  font-size: 46px;
  color: #ccc;
`;
const ErrorMiniFont = styled.p`
  font-size: 17px;
  color: #ccc;
`;

export const Error = memo(() => {
  return (
    <Suspense>
      <Container className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
        <button
          onClick={() => {
            window.history.back();
          }}
          className="shadow-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {"Back"}
        </button>
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg shadow-md transition-transform transform">
          <ErrorFont className="grid text-center">Error</ErrorFont>
          <ErrorMiniFont className="grid px-10 py-2 rounded flex-col mt-15 bg-gradient-to-r from-blue-400 to-purple-500">
            Page Not Found{" "}
            <code className="grid text-center text-red-800">404</code>
          </ErrorMiniFont>{" "}
          <button
            onClick={() => {
              window.location.assign('/')
            }}
            className="shadow-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {"MainPage"}
          </button>
        </div>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="shadow-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {"Refresh"}
        </button>
      </Container>
    </Suspense>
  );
});

export default Error;
