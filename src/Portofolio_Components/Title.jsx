import React from "react";
import styled from "styled-components";

const Title = ({ title, subTitle }) => {
  return (
    <>
      <div className="title">
        <TitleH1>{title}</TitleH1>
        <TitleP>{subTitle}</TitleP>
      </div>
    </>
  );
};

export default Title;

const TitleH1 = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
`;
const TitleP = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 5px;

  &:before {
    width: 28px;
    height: 5px;
    display: block;
    content: "";
    position: absolute;
    bottom: 3.5px;
    left: 50%;
    margin-left: -14px;
    z-index: 1;
    background-color: rgb(255, 145, 25);
  }

  &:after {
    width: 100px;
    height: 1px;
    display: block;
    content: "";
    position: relative;
    margin-top: 1rem;
    left: 50%;
    margin-left: -50px;
    background-color: black;
  }
`;
