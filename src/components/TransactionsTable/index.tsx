import { useContext} from "react";
import { TransactionContext } from "../../context/TransactionsContext";

import { Container } from "./style";



export function TransactionTable() {

    const { transList }  = useContext(TransactionContext)
    
    return (
        <Container>    
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>

                { transList.map( transaction => {
                        return (
                            <tr key={transaction.uid}>
                                <td>
                                    {transaction.title}
                                </td>
                                <td className={transaction.type}> {new Intl.NumberFormat('pt-BR' , {
                                    style: 'currency',
                                    currency : 'BRL'
                                }
                                ).format(transaction.amount)}
                                
                                </td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.date))}</td>
                            </tr>
                        )
                })}

                 
                    <tr>
                        <td>
                            COMPRA MERCADO
                        </td>
                        <td className="income"> R$ 345,98</td>
                        <td>compras</td>
                        <td>23/08/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
        
    )
}