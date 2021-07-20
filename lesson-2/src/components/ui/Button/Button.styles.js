import { css } from "@emotion/react";
import styled from "@emotion/styled";

const buttonSecondary = css`
  background-color: #98f321;
  font-size: 24px;
`;

const buttonDefault = css`
  background-color: #3c1fc0;
  font-size: 14px;
`;

const CustomSize = (props) => {
  if (props.size === "small") {
    return buttonDefault;
  }
  return buttonSecondary;
};

export const CustomButton = styled.button`
  ${CustomSize}
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  color: #ffffff;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

// .ButtonSecondary {
//     background-color: #98f321;
//   }

//   .ButtonDefault {
//     background-color: #3c1fc0;
//   }
