import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionTable } from './components/TransactionsTable';
import { createServer, Model} from "miragejs";
import Modal from "react-modal"

import { GlobalStyle } from './styles/global';
import { apiData } from './services/api';
import { NewTransactionModal } from './components/NewTransactionModal';



export function App() {


  const [isAddNewTransactionModalOpen , setIsAddNewTransactionModalOpen] = useState<boolean>(false);

  let  handleOpenTransactionModal = ()=> {
    setIsAddNewTransactionModalOpen(true)
  }

  let  handleCloseTransactionModal = ()=> {
    setIsAddNewTransactionModalOpen(false)
  }
  createServer({

    models : {
      transaction : Model,
    },

    routes(){
      this.namespace = "api"
      this.get("/transactions", ()=>{
        return this.schema.all("transaction")
      })
      this.post("/transactions" , (schema , req)=>{
          const data = JSON.parse(req.requestBody)

          return schema.create('transaction' ,data)
          
          

      })
    }
  })






  return (
    <>
      <GlobalStyle/>
      <Header OnOpenModal={handleOpenTransactionModal}></Header>
      <Dashboard></Dashboard>
      <TransactionTable></TransactionTable>

      <NewTransactionModal
        isOpen={isAddNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
        
     
      
    </>
  );
}






