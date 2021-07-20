import styled from "@emotion/styled";

export const InputContainer = styled.input`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid ${(props) => (props.name === "email" ? "red" : "green")};
`;
