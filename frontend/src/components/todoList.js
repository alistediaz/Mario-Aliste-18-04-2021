import React, { Component } from "react";
import TodoItems from "./todos";
import loadAll from "./api/loadAll"
import PostTodo from "./api/postTodo"
 
class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
     
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }

    componentDidMount = async ()=>{
        this.setState({items: await loadAll()});
    }

    async addItem (e) {
        if (this._title.value !== "" && this._details !== "" && this._category !== "") {
            var newItem = {
                    titulo: this._title.value,
                    detalle: this._details.value,
                    categ: this._category.value
            };
        
            let result = await PostTodo(newItem);

            if (result){
                this.setState((prevState) => {
                    return { 
                        items: prevState.items.concat(newItem) 
                    };
                });
                
                this._title.value = "";
                this._details.value = "";
                this._category.value = "";
            }else {
                alert('Error writing the task.')
            }
        }
            
        console.log(this.state.items);
            
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
    }

  render() {
    return (
      <div >
        <div >
            <form >
                <input ref={(t) => this._title = t} 
                        placeholder="new task title">
                </input>
                <br/>
                <input ref={(d) => this._details = d} 
                        placeholder="new task details">
                </input>
                <br/>
                <input ref={(c) => this._category = c} 
                        placeholder="new task category">
                </input>
                <br/>
                <button onClick={this.addItem}>add</button>
            </form>
        </div>
        
        <TodoItems entries={this.state.items}
            delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList;