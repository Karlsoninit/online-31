import styled from "@emotion/styled";
import { TextField } from "@material-ui/core";

export const InputContainer = styled.div`
  margin-bottom: ${(props) => (props.indentBottom ? "20px" : "0")};
`;
export const InputField = styled(TextField)`
  width: 100%;
`;
