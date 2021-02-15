import styled from 'styled-components';

export const Container = styled.div`
    
.modal {
    width: 100%;
    height: 100vh;
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
        width: 85%;
        max-width: 620px;
        height: 560px;
        border-radius: 20px;
        

        .content {
            margin-top: 20px;

            div{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                margin-top: 15px;

                h1{
                    font-size: clamp(0.4em,0.8em + 1vw,1.6em)
                }

                .item{
                    margin: 10px;
                }
                .item:nth-child(1){
                    margin: 20px;
                }
            }
        }
        .close {
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 1.4rem;
            right: calc(-100% + 40px);
            top: 16px;
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;
        }
    }
}

    
`;