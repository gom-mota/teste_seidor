import { Button, ButtonTab } from './styles';

const ButtonPrimary = (props) => {
    return (
            <Button size={props.size} onClick={props.onClick} className={props.className=="active"?"active":""} type={props.type}>
                {props.children}
            </Button>
    )
}

const ButtonTabPrimary = (props) => {
    return (
        <ButtonTab size={props.size} onClick={props.onClick} className={props.className=="active"?"active":""}>
                    {props.children}
        </ButtonTab>
    )
}

 export { ButtonPrimary, ButtonTabPrimary };