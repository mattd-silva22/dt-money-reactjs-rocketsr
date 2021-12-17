import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";



interface transactionTypes {
    uid: string;
    type :  'deposit' | 'withdrawal' | string;
    date :  Date;
    amount : number;
    category : string;
    title: string;
  
}

//type TransactionInput = Omit<transactionTypes , "uid" | "date">

interface transactionProviderProps {
    children : ReactNode
}

interface TransactionsContextData  {
    transList : transactionTypes[],
    createTransaction : (transaction:transactionTypes)=> Promise<void>
}




export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionProvider(props:transactionProviderProps) {
    const [ transList , setTransList] = useState<transactionTypes[]>([])
    useEffect(()=>{


        api.get('transactions').then( res => { 
            setTransList(res.data.transactions) 
        
        })
        

    },[]) 

    async function createTransaction(transactionInput:transactionTypes) {
        const response = await api.post("/transactions" , transactionInput)
        const { transaction} = response.data;

        setTransList(transList.concat(transaction))
    }


    return (
        <TransactionContext.Provider value={{transList , createTransaction}}>
            {props.children}
        </TransactionContext.Provider>

    )
}