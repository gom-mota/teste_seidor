import styled from "styled-components";

export const Container = styled.table`
    border-spacing: 1; 
    border-collapse: collapse; 
    text-align: left;
    width: 100%;
    overflow:hidden;
    border-radius: ${props => props.theme.sizes.borderRadius};
    box-shadow: ${props => props.theme.effects.shadow};

    tr {
        height:60px;
        color: #212121;
        font-size:16px;
        
        &:nth-child(even) {background: #ffffff}
        &:nth-child(odd) {background: #ececec}
    }
 	
    td{
        padding: 0 22px 0 22px;
        
    }
    th{
        padding: 0 22px 0 22px;
    }
`;