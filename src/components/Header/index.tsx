import styled from "styled-components";
import { AlignBottom, MessengerLogo } from 'phosphor-react'
import { NavLink } from "react-router-dom";

export const ContainerHeader = styled.div`

    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 20%;
    background-color: ${props => props.theme.white};
    
    
`;

export const ContainerWrapper = styled.div`
   
    display: flex;
    width: 100%;
    height: 100%;
    

    h1{
        font-size: 20px;
        text-align: center;
        font-weight: 600;
        color: ${props => props.theme["green-600"]};
        font-family: 'Poppins', sans-serif;
    }
`;

export const ContainerActions = styled.div`
    
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    button{
        margin: 0 10px;
        background-color: #fff;
        border: 1px solid #416;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        &:hover{
            background-color: #416752;
            color: #fff;
        }
    }
`;



export function Header(){
    return(
        <ContainerHeader>
            <ContainerWrapper>
            <h1>Criando Componente Tabela Sinapi</h1>
            <ContainerActions>
                <NavLink to="/">                  
                    <AlignBottom size={24} color="#fff"/>
                </NavLink>
                <NavLink to="products">                   
                    <MessengerLogo size={24} color="#fff"/>              
                </NavLink>
              
            </ContainerActions>
            </ContainerWrapper>
        </ContainerHeader>      
        
    )
}