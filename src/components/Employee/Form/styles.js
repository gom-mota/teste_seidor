import styled from "styled-components";

export const ContainerButton = styled.div`
        width: 100%;
        p{
          margin-top: -10px;
          color: #bd5151;
        }
`;

export const TextInput = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "70%",
    align: props.align || "center",
    color: props.color || props.theme.colors.backgroundItem,
    border: props.border || props.theme.colors.text,
  }))`
    border-radius: ${props => props.theme.sizes.borderRadius};
    padding: 10px;
    text-align: ${props => props.align};
    width: ${props => props.size};
    background: #fff;
    border: 1px solid ${props => props.border};
    color: ${props => props.theme.colors.text};
    font-size: 16px;
`;