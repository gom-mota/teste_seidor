import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    max-width: 100%;

    svg{
        font-size: 120px;
    }
    *{
        margin-top: 20px;
    }
    .noDecoration{
        text-decoration:none;
    }
`;