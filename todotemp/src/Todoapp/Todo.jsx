import React from 'react'
import { useState } from 'react'

import './Todo.css'
function Todo() {
    const [name, setName] = useState('')
    const [todo, setTodo] = useState([])
    function nameAdd(e) {
        setName(e.target.value);
    }
    function todoAdd() {
        setName('')
        setTodo([...todo, { id: Date.now(), name: name, status: false }])
    }
    function delet(index) {
        let item = [...todo]
        item.splice(index, 1)
        setTodo(item)
    }

    return (
        <div>
            <div id="todo-wrap">
                <form id="todo-add" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" value={name} onChange={nameAdd} id="todo-item" placeholder="New Item" />
                    <input type="submit" onClick={todoAdd} id="todo-save" value=" Add  " />
                </form>
                {todo.map((adds, index) => (
                    <>
                        <div className="todo-template">
                            <div className="todo-row" key={adds.id}>
                                <input type="checkbox" 
                                className="todo-done" 
                                onChange={(e) => {
                                    setTodo(todo.filter(obj2 => {
                                        if (obj2.id === adds.id) {
                                            obj2.status = e.target.checked
                                        }
                                        return obj2
                                    }))
                                }} value="  " />
                                <input type="button"  className="todo-edit" value="edit" />
                                {adds.status ? <input 
                                type="text" 
                                style={{ backgroundColor: 'rgb(119, 118, 118)', color: 'rgb(87, 85, 80)' }} 
                                value={adds.name} 
                                className="todo-item" /> : <input 
                                type="text" 
                                value={adds.name} 
                                className="todo-item" />}
                                <input type="button" onClick={() => { delet(index) }} className="todo-del" value="Delete" />
                            </div>
                        </div>
                    </>
                ))}
            </div>
           
        </div>
    )
}

export default Todo







