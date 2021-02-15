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
    }
`;

export const Content = styled.div`
    padding: 0 80px 0 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;