import React, { useState } from 'react'
import { CiBookmarkRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import '../css/Todo.css'
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}
function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;

    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    const handleUpdateTodo = () => {
        const payload = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false);

    }
    return (
        < div className='todo-div' >
            {editable ? <input type='text' className='todo-in'
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} />
                : <div>{content}</div>}

            <div >
                < CiBookmarkRemove onClick={handleRemoveTodo} className='icons' />
                {editable ? <CiCircleCheck onClick={handleUpdateTodo} className='icons' /> : <CiEdit onClick={() => setEditable(!editable)} className='icons' />}

            </div>
        </div>
    )
}
export default Todo