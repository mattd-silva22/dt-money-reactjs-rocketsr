import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionTable } from './components/TransactionsTable';
import { createServer} from "miragejs";
import Modal from "react-modal"

import { GlobalStyle } from './styles/global';
import { apiData } from './services/api';



export function App() {


  const [isAddNewTransactionModalOpen , setIsAddNewTransactionModalOpen] = useState<boolean>(false);

  let  handleOpenTransactionModal = ()=> {
    setIsAddNewTransactionModalOpen(true)
  }

  let  handleCloseTransactionModal = ()=> {
    setIsAddNewTransactionModalOpen(false)
  }
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
      <Header OnOpenModal={handleOpenTransactionModal}></Header>
      <Dashboard></Dashboard>
      <TransactionTable></TransactionTable>

      <Modal
        isOpen={isAddNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
          <h1>Isso é um modal based</h1>
      </Modal>
      
    </>
  );
}






