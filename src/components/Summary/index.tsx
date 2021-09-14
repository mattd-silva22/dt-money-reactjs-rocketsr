import { Container } from './styles';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from "../../assets/total.svg";

export function Summary() {


    return(
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeIcon} alt="img entrada" />
                </header>

                <strong> R$ 1000</strong>
            </div>

            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcomeIcon} alt="img entrada" />
                </header>

                <strong> R$ -300</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="img entrada" />
                </header>

                <strong>R$ 700</strong>
            </div>
        </Container>
    )
}