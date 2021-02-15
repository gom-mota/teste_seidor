import styled from "styled-components";

export const Container = styled.div`
`;

export const Action = styled.div`
    display: flex;
    grid-gap: 20px;
    justify-content: flex-start;

    a{
        cursor: pointer;
    }

    .delete{
        color: #bd5151;
    }
    .edit {
        color: #52984a;
    }
`;