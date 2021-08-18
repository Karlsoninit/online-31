import styled from "@emotion/styled";

export const MenuContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.li`
  font-size: 30px;
  padding: 30px;
  font-weight: 700;

  & a {
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
