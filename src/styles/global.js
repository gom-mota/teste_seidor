import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body{
        width: 100vw;
        min-height: 100vh;
        max-width: 100%;
        background-color: ${props => props.theme.colors.background};
        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.colors.text};
    }
`;