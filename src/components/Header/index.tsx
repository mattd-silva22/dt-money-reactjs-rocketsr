import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

type HeaderProps = {
    OnOpenModal : ()=> void;
}
export function Header(props:HeaderProps){
    
    return (
        <Container>

            <Content>
                <img src={logo} alt="dtmoney" />
                <button type="button" onClick={props.OnOpenModal}>
                    Nova transação
                </button>
            </Content>
            
        </Container>
    )
}