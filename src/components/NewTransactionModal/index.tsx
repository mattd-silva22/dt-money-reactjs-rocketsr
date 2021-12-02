import Modal from "react-modal";
import { Content, RadialButton, TransacitonTypeContianer} from "./styles";
import closeIMg from "../../assets/close.svg"

import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import { FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import { api } from "../../services/api";

type ModalProps = {
    isOpen : boolean;
    onRequestClose : ()=>void;
    
}


export function NewTransactionModal(props:ModalProps ){

    const [title , setTitle] = useState("");
    const [value , setValue] = useState(0);
    const [category, setCategory] = useState("");

    const [ type , setType] = useState("deposit")

    function clearFormInput() {

        setTitle("");
        setCategory("")
        setValue(0)
    }
    function handleSubmitTransaction(event:FormEvent) {
        event.preventDefault();

        if(!title.trim() || !category.trim() || value == 0 ) {
            alert("favor não deixar nada em branco");
            return;
        };

        let newTransaciton = {
            uid: nanoid(6),
            type :  type,
            date : new Date() ,
            amount : value.toFixed(2),
            category : category,
            title: title


        }
        clearFormInput()

        console.log(newTransaciton)

        api.post("/transactions" , newTransaciton)

        
    }

    return (
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >   
            <button 
                className="close-modal-btn"
                onClick={props.onRequestClose}
            >
                <img src={closeIMg} alt="Fechar modal" />
            </button>

            <Content onSubmit={handleSubmitTransaction}>

                <h2>Nova Transação</h2>

                <input 
                    type="text" 
                    placeholder="Titulo"
                    value = {title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input 
                    type="number" 
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(+e.target.value)}
                />

                <TransacitonTypeContianer> 

                    <RadialButton
                        type="button"
                        onClick={ ()=> setType("deposit")}
                        isActive={type === "deposit"}
                        activeColor={"#33CC95"}

                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>

                    </RadialButton>


                    <RadialButton
                        type="button"
                        onClick={ ()=> setType("withdrawal")}
                        isActive={type === "withdrawal"}
                        activeColor={"#E52E4D"}

                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>

                    </RadialButton>

                    

                </TransacitonTypeContianer> 

                <input 
                    type="text" 
                    placeholder="Categoria"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />

                <button type="submit" className="submit-btn">
                    Cadastrar
                </button>
                
            </Content>

        </Modal>
    )
}