import { Button, ButtonTab } from './styles';

const ButtonPrimary = (props) => {
    return (
            <Button size={props.size} onClick={props.onClick} className={props.className=="active"?"active":""} disabled={props.disabled}>
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