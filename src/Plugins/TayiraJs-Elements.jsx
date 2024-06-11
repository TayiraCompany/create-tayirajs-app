
import styled from 'styled-components';
import React, { Component,useEffect,useState,useRef } from 'react';

function CopyFunction(text) {
    navigator.clipboard.writeText(text);
}
function ifClickFunction(data) {
    data()
}

const defaultProps = {
    title: "",
    about: "",
    copy: ""
};

const WebApp = ({ children, copy }) => {
    
    const Div = styled.div`
        width: auto;
        height: auto;
        font-size: 16.3px;
        font-weight: 400;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        text-transform: none;
        word-spacing: normal;
        white-space: normal;
        word-break: normal;
        display: block;
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e5e7eb;
        unicode-bidi: isolate;
    `;

    return (
        <Div onClick={() => { CopyFunction(copy) }}>
            {children}
        </Div>
    );
};

WebApp.defaultProps = defaultProps;

export { 
    WebApp
};
