const apiendpoint="/api/todos/"

export async function gettodos(){
        return fetch(apiendpoint,{mode:"no-cors"}).
        then(resp=>{
              if(!resp.ok ){
                if(resp.status>= 400 && resp.status<500){
                    return resp.json().then(data=>{
                        let err={errmessage:data.message}
                        throw err;
                        
                    })
                }
              else { let err ={errmessage:"please try again later, server is not responding"}
             throw err; } 


              }
              return resp.json()})
    }
    
    export async function addtodoitem(value){
        
        return fetch(apiendpoint,{
                
                method:'post',
                headers:new Headers({'Content-Type':'Application/JSON'}),
                body: JSON.stringify({name:value})    
            })
            
        .then(resp=>{
            if(!resp.ok ){
                if(resp.status>= 400 && resp.status<500){
                    return resp.json().then(data=>{
                        let err={errmessage:data.message}
                        throw err;
                        
                    })
                }
              else { let err ={errmessage:"please try again later, server is not responding"}
             throw err; } 

                
            }             
            return resp.json() })
        
        
        
        
    }
    
    
    export async function ToggleItem(todo){
        
        const deleteurl= apiendpoint+todo._id;
        return fetch(deleteurl,{
     
                method:'put',
                body:JSON.stringify({ completed:!todo.completed})
            })
            
        .then(resp=>{
            if(!resp.ok ){
                if(resp.status>= 400 && resp.status<500){
                    return resp.json().then(data=>{
                        let err={errmessage:data.message}
                        throw err;
                        
                    })
                }
              else { let err ={errmessage:"please try again later, server is not responding"}
             throw err; }   
            } 
            return resp.json()})
        
        
        
        
    }
    
    export async function TodoDelete(id){
        
        
        const deleteurl= apiendpoint+id;
            return fetch(deleteurl,{
            
                method:'delete'
            
            })
            
        .then(resp=>{
            if(!resp.ok ){
                if(resp.status>= 400 && resp.status<500){
                    return resp.json().then(data=>{
                        let err={errmessage:data.message}
                        throw err;
                        
                    })
                }
              else { let err ={errmessage:"please try again later, server is not responding"}
             throw err; }   
            } 
            return resp.json()})
        
        
    }