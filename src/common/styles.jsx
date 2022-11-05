import styled from "styled-components";

// LAYOUT
export const Container = styled.div`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;

  /* BREAKPOINTS */
  /* For large devices */
  @media (max-width: 992px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  /* For small devices */
  @media (max-width: 350px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

// BUTTON
export const Button = styled.div`
  display: inline-block;
  background-color: #333333;
  color: #fff;
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  font-weight: 500;
  :hover {
    background-color: #000000;
  }
`;

export const ButtonFlex = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const ButtonIcon = styled.div`
  margin-left: 20px;
`;
