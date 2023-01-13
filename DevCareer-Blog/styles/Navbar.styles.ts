import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #ffc116;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 48px;
  width: 100%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    padding: 10px 16px;
  }
`;
