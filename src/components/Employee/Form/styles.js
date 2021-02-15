import styled from "styled-components";

export const Form = styled.form`
  p{
    color: #d94c4c;
    
  }
  .action{
    margin-bottom: 40px;
  }
`;

export const TextInput = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "100%",
    align: props.align || "center",
    color: props.color || props.theme.colors.background,
    border: props.border || props.theme.colors.text,
  }))`
    border-radius: ${props => props.theme.sizes.borderRadius};
    padding: 10px;
    text-align: ${props => props.align};
    width: ${props => props.size};
    background: ${props => props.color};
    border: 1px solid ${props => props.border};
    color: ${props => props.theme.colors.text};
    font-size: 16px;
`;