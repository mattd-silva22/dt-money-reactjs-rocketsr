import { Container } from './styles';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from "../../assets/total.svg";
import { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionsContext';

export function Summary() {
    const { transList }  = useContext(TransactionContext)

    const totalDeposity = transList.reduce((acc , transaction)=> {
        if( transaction.type === "deposit") {
            return acc + transaction.amount
        }

        return acc
    }, 0 );

    const totalOutCome = transList.reduce((acc , transaction)=> {
        if( transaction.type === "withdrawal") {
            return acc + transaction.amount
        }

        return acc
    }, 0 );
    const totalBalace =  totalDeposity - totalOutCome

    return(
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeIcon} alt="img entrada" />
                </header>

                <strong> R$ {totalDeposity}</strong>
            </div>

            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcomeIcon} alt="img entrada" />
                </header>

                <strong> R$  {totalOutCome}</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="img entrada" />
                </header>

                <strong>R$ {totalBalace.toFixed(2)}</strong>
            </div>
        </Container>
    )
}