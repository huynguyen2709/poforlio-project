import styled from "styled-components";
import * as palette from "./cssVariables";

// LAYOUT
export const Container = styled.div`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

// BUTTON
export const Button = styled.div`
  display: inline-block;
  background-color: ${palette.titleColor};
  color: ${palette.containerColor};
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  font-weight: ${palette.fontMedium};
  :hover {
    background-color: ${palette.titleColorDark};
  }
`;

export const ButtonFlex = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const ButtonIcon = styled.div`
  margin-left: 20px;
`;
