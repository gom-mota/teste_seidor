import styled from "styled-components";

export const Button = styled.button.attrs(props => ({
    color: props.color || props.theme.colors.accent.buttonPrimary,
    size: props.size || props.theme.sizes.buttonNormal
}))`
    color: ${props => props.theme.colors.textButton};
    cursor: pointer;
    border-radius: ${props => props.theme.sizes.borderRadius};
    padding: ${props => props.size};
    background: ${props => props.color};
    border: 1px solid ${props => props.color};
    font-size: ${props => props.theme.sizes.textButton};

    svg{
        padding-top: 2px;
    }

`;

export const ButtonTab = styled(Button)`
    color: ${props => props.theme.colors.text};
    background: none;
    border: 1px solid ${props => props.color};

    &.active{
        background: ${props => props.color};
        color: ${props => props.theme.colors.textButton};
        border: 1px solid ${props => props.color};
    }
    &:hover:not(.active){
        background: ${props => props.color};
        color: ${props => props.theme.colors.textButton};
    }
`;