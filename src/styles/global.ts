import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};
    }

    body {
        background: ${props => props.theme.white};
        color: ${props => props.theme["gray-300"]};
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;