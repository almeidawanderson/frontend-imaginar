import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
`;



export function Header(){
    return(
        <ContainerHeader>
            <h1>Header</h1>
        </ContainerHeader>      
        
    )
}