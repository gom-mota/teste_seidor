import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const Content = styled.div`
    padding: 0 80px 0 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Text = styled.div`
    width: 65%;
    margin-top: 20px;
    margin-bottom: 30px;
    
    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    
    p{
        margin-bottom: 10px;
        text-align: center;
    }
`;