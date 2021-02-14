import styled from "styled-components";

export const Button = styled.a.attrs(props => ({
    color: props.color || props.theme.colors.accent.buttonPrimary,
    size: props.size || props.theme.sizes.buttonNormal
}))`
    color: ${props => props.theme.colors.textButton};
    cursor: pointer;
    border-radius: ${props => props.theme.sizes.borderRadius};
    padding: ${props => props.size};
    background: ${props => props.color};
`;