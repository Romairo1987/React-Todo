import React from 'react';
import TodoList from "./TodoComponents/TodoList"
import Todo from "./TodoComponents/Todo"
import TodoForm from "./TodoComponents/TodoForm"
import '../src/TodoComponents/Todo.css'



class App extends React.Component {
 constructor(){
   super()
   this.state={
     whatodo:TodoList
   }
 }


 toggleItem = (event, itemId) => {
  event.preventDefault()
  this.setState({
    whatodo: this.state.whatodo.map(item => {
      if (item.id === itemId) {
        return {
          ...item, 
          completed: !item.completed
        }
      } else {
        return item
      }
    })
  })
}



clearCompleted = event => {
  event.preventDefault()
  console.log(event)
  this.setState({
    whatodo: this.state.whatodo.filter(item => {
      return !item.completed
    })
  })
}

addItem = (event, itemName) => {
  const newItem = {
    id: Date.now(),
    name: itemName,
    completed: false
  }

  this.setState({
    whatodo: [newItem, ...this.state.whatodo]
  })
}

  
  
  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        </div>

        <div>
        {this.state.whatodo.map(item => (
            <Todo
              key={item.id}
              item={item}
              onClick={(e) => this.toggleItem(e, item.id)}
            />
          ))}

          <button  onClick={this.clearCompleted}> Clear</button>
        </div>
       
      </div>
    );
  }
}

export default App;
