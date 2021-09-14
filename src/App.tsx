import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionTable } from './components/TransactionsTable';
import { createServer} from "miragejs";


import { GlobalStyle } from './styles/global';
import { apiData } from './services/api';



export function App() {

  createServer({
    routes(){
      this.namespace = "api"
      this.get("/transactions", ()=>{
        return apiData
      })
    }
  })






  return (
    <>
      <GlobalStyle/>
      <Header></Header>
      <Dashboard></Dashboard>
      <TransactionTable></TransactionTable>
      
    </>
  );
}






