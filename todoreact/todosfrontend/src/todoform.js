import React, {Component} from 'react'


class Todoform extends Component{
    constructor(props){
        super(props)
        
        
        this.state={inputValue:""}
        this.handleChange=this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(e){
        
        this.setState({inputValue:e.target.value})
        
        
    }
    
    handleSubmit(e){
            e.preventDefault();        
             this.props.addtodo(this.state.inputValue);
        
    }
    
    
    render(){
        
        return(
            <form>
            <input value={this.state.inputValue} onChange={this.handleChange} type="text" name="addform" />   
            <button  onClick={this.handleSubmit}>addtodo</button>     
            </form>
            
            )
        
    }
    
    
}


export default Todoform;