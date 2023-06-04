import { Grid } from '@mui/material';
import styled from 'styled-components';

const Div = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  width: 362px;
  height: 0.5px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  button {
    display: flex;
    background-color: transparent;
    border: none;
    color: #616c84;

    &:disabled {
      background: transparent;
    }
  }
`;

export const TitleModalDiv = styled.div`
  font-size: 24px;
  color: #4a4a4a;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;

export const Specifications = styled.div`
  font-size: 10px;
  font-weight: 300;
  color: #4a4a4a;
  text-align: left;
`;

export const GridPassword = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

export default Div;
