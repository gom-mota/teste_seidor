import { Button } from './styles';

const ButtonPrimary = (props) => {
    return (
            <Button size={props.size} onClick={props.onClick}>{props.children}</Button>
    )
}

 export {ButtonPrimary};