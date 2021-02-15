import styled from 'styled-components';

export const Container = styled.div`
    
.modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #000000c7;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.text};

    h1{
        font-size: 22px;
        text-align: center;
    }
    
    
    .container {
        background-color: ${props => props.theme.colors.background};
        width: 100%;
        max-width: 620px;
        min-height: 480px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        

        .content {
            margin-top: 60px;

            div{
                display: flex;
                flex-direction: row;
                width: 100%;
                gap: 12px;
                margin-top: 4px;
                justify-content: center;

                h1{
                    font-size: clamp(0.4em,0.8em + 1vw,1.6em)
                }
            }
        }
        .close {
            display: inline-table;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 1.4rem;
            right: calc(-100% + 115px);
            top: 16px;
            cursor: pointer;
            position: relative;
            align-items: center;
        }
    }
}

    
`;