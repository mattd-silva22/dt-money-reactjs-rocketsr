import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface transactionTypes {
    uid: string;
    type :  'deposit' | 'withdrawal';
    date :  Date;
    amount : number;
    category : string;
    title: string;
  
  }


export function TransactionTable() {

    const [ transList , setTransList] = useState<transactionTypes[]>([])
    useEffect(()=>{


        api.get('transactions').then( res => { 
            setTransList(res.data.transactions) 
        
        })
        

    },[])
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
                                <td className={transaction.type}> R$ {transaction.amount}</td>
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