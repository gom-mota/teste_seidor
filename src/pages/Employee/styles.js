import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .containerButton{
        justify-content: flex-end;
        display: flex;
        width: 100%;
        margin-bottom: 20px;
        @media screen and (max-width: 970px) {
            justify-content: center;
        }
    }
`;

export const Content = styled.div`
    padding: 0 80px 0 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 970px) {
        padding: 0 20px 0 20px;
    }

    h1{
        margin-bottom: 20px;
    }
`;