import { useState } from 'react'
const Form = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('')
    return (
        <div className="formTodo">
            <input 
                type="text" 
                placeholder="Nova tarefa" 
                className="inputTodo" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)} 
            />
            <button className="btnAddTodo" onClick={() => addTodo(newTodo)}>
                Enviar
            </button>
        </div>
    )
}

export default Form;