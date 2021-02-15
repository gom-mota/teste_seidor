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
        color: #d94c4c;
    }
    .edit {
        color: #49b947;
    }
`;