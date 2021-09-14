import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface transactionTypes {
    uid: string;
    type :  'deposit' | 'withdrawal';
    date :  string;
    amount : number;
    category : string;
    title: string;
  
  }


export function TransactionTable() {

    const [ transList , setTransList] = useState<transactionTypes[]>([])
    useEffect(()=>{


        api.get('transactions').then( res =>  setTransList(res.data))

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

                    {transList.map( trans => {
                        return (
                            <tr>
                                <td>
                                    {trans.title}
                                </td>
                                <td className={trans.type}> R$ {trans.amount}</td>
                                <td>{trans.category}</td>
                                <td>{trans.date}</td>
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