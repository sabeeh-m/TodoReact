import React  from 'react'

const Todo= ({name,completed,onDelete,onToggle})=> ( 
    
    <li style= {{ textDecoration:completed? 'line-through' : 'none' }} >
        <span onClick={onToggle} >  {name} </span> <span onClick={onDelete}> X </span> </li> )
    
export default Todo;