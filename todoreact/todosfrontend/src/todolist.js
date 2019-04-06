    import React, { Component } from "react";
    import Todo from "./todo"
    import Todoform from './todoform'
    import * as apicalls from './api'
    
    class Todolist extends Component{
        
        constructor(props){
            super(props);
            
            this.state={
                
                todos:[],
                
                
            }
        
            this.addtodo=this.addtodo.bind(this)
        }
        
        componentDidMount(){
            
            this.loadtodos();
            
            
            
        }
        
        
        async loadtodos(){
        
      let data=  await apicalls.gettodos() 
        this.setState({todos:data})
            
        
        }
            
      async  addtodo(value){
              let data=  await  apicalls.addtodoitem(value)
               this.setState({todos:[...this.state.todos,data ]  })
            
        }
        
        async onToggle(todo){
            let data= await apicalls.ToggleItem(todo)
            
                    const todos= this.state.todos.map(e=>(
                        e._id===data._id)?
                        {...e, completed: !e.completed }  
                        :e                ) 
                        
                        this.setState({todos:todos})
                    
                    
                    
                
            
            
            
            
            
        }
        
        async deletetodo(id){
            await apicalls.TodoDelete(id)
            
                    const todos=this.state.todos.filter(todo=>{return todo._id!=id})
                    this.setState({todos:todos})
                    
                    
            
            
        }
        
        render(){
            
            
            
            
            
                var Views= this.state.todos.map(e=>{
                return <Todo onToggle={this.onToggle.bind(this, e)} onDelete={this.deletetodo.bind(this,e._id)} key={e._id} {...e} />
                
            })
           
            return(
                <div>
            <h1>Todolist</h1>
            <Todoform  addtodo={this.addtodo} />
            {Views}
            </div>
            )
            
        }
        
        
    }
    
    export default Todolist;