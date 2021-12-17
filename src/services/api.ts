import axios from 'axios';
import { nanoid } from 'nanoid';


export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})



interface transactionTypes {
    uid: string;
    type :  'deposit' | 'withdrawal';
    date :  Date;
    amount : number;
    category : string;
    title: string;
  
  }
  
  export const apiDataTeste:transactionTypes[] = [
    {uid: nanoid(6) , date: new Date("2014-02-01") , type : "deposit" , title : 'compra 1' , category : "shop" , amount: 1258.58},
    {uid : nanoid(6) , date: new Date("2015-02-01"), type : "withdrawal" , title : 'compra 2' , category : "shop 3" , amount: 1058.85 },

  ]

