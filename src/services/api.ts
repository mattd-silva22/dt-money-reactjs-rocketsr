import axios from 'axios';
import { nanoid } from 'nanoid';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})



interface transactionTypes {
    uid: string;
    type :  'deposit' | 'withdrawal';
    date :  string;
    amount : number;
    category : string;
    title: string;
  
  }
  
  export const apiData:transactionTypes[] = [
    {uid: nanoid(6) , date: "12/08/2021" , type : "deposit" , title : 'compra 1' , category : "shop" , amount: 1258.58},
    {uid : nanoid(6) , date: "13/08/2021" , type : "withdrawal" , title : 'compra 1' , category : "shop" , amount: 1058.58 },
    {uid : nanoid(6) , date: "12/08/2021" , type : "deposit" , title : 'compra 1' , category : "shop", amount: 987.78 },
    {uid : nanoid(6) , date: "14/08/2021" , type : "deposit" , title : 'compra 1' , category : "shop", amount: 687.00 },
    {uid : nanoid(6) , date: "12/08/2021" , type : "withdrawal" , title : 'compra 1' , category : "shop", amount: 158.58 },
    {uid : nanoid(6) , date: "14/08/2021" , type : "deposit" , title : 'compra 1' , category : "shop", amount: 119.00 },
    {uid : nanoid(6) , date: "12/08/2021" , type : "withdrawal" , title : 'compra 1' , category : "shop", amount: 18.57 },
  ]

