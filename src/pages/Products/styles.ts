import styled from "styled-components";

interface ITableProps {
  rowType?: "FASE" | "SUB-FASE" | "SERVICOS";
}
export const TableContainer = styled.main`
  width: 100%;
  padding: 0 1rem;  
 
`;

export const ContentTable = styled.table<ITableProps>`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.125rem;
   thead {
    tr {
      height: 1.5rem;
    }
  }
  
  tbody {
    tr {   
     
      height: 1.5rem;
    }
  }
  

  th {
    align-items: center;
    color: #F9F9F9;
    font-weight: 600;
    font-size: 1rem;
    padding: 1.5rem auto;
    text-align: left;
    line-height: 1.5rem;  
    background-color: #2F4A7D;
    text-align: center;
    
  }
  
  td {
    font-family: Poppins;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #2F4A7D;
    padding: 0 .125rem;
    /* background: #CDD1EB; */
    text-align: center;
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const FaseRow = styled.tr`
  background-color: #CDD1EB;
  color: #F9F9F9;

`;

export const SubFaseRow = styled.tr`
  background-color: #E7E9F6;
  color: #F9F9F9;
`;

export const ServicesRow = styled.tr`
  background-color: #FFFFFF;
  color: #2F4A7D;
`;


