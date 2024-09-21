import React from 'react';

const Todo =({tareas})=>{
    return (
        <>
        <h2 className='lista'>Lista de cosas por hacer:</h2>
        <ul className='todo-list'>
            {tareas.map((tarea,index)=>(
                <li key={index}>{tarea}</li>
            ))}
        </ul>
        </>
    );
}

export default Todo;