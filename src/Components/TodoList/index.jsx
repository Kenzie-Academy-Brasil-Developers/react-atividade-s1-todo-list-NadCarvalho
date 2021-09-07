const TodoList = ({ todos, handleTodo }) => {

    return (
        <ul className="listTodo">
            {todos.map((item, i) => 
            <li key={i} className="itemTodo">
                {item}
                <button className="btnCompleteTodo" onClick={() => handleTodo(item)}>
                    Concluir tarefa
                </button>
            </li>)}

        </ul>
    )
}

export default TodoList;