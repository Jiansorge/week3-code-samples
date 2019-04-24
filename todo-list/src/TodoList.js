import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    /**
     * This is optional, but if you need to do things in a 
     * constructor, you can define a React constructor like so
     */
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    addTodo = (event) => {
        if (this.state.newTodo === '') {
            alert('Please enter something');
            return;
        }

        this.setState(prevState => {
            const newTodo = {
                value: prevState.newTodo,
                isComplete: false
            };

            return {
                // todos: prevState.todos.concat(['new todo'])
                todos: [...prevState.todos, newTodo],
                newTodo: ''
            };
        });
    }

    onChange = (event) => {
        const newTodo = event.target.value;
        this.setState(prevState => {
            return {
                newTodo: newTodo
            };
        })
    }

    completeItem = (idx) => {
        return (event) => {
            console.log(idx);
            // Set the new state of todos
            // [{value: 'walk the dog', isComplete: false}]
            // completeItem(0) => [{value: 'walk the dog', isComplete: true}]

            const selectedTodo = this.state.todos[idx];
            selectedTodo.isComplete = true;

            this.setState(prevState => {
                return {
                    todos: this.state.todos
                }
            });

            // const updatedTodos = this.state.todos.map((todo, todoIdx) => {
            //     if (todoIdx === idx) {
            //         return {
            //             ...todo,
            //             isComplete: true
            //         }
            //     }

            //     return todo;
            // });

            // this.setState({todos: updatedTodos});
        }
    }

    render() {
        const todoItems = this.state.todos
            .map((t, idx) => {
                return (
                    <TodoItem
                        onClick={this.completeItem(idx)}
                        todo={t}
                        key={idx}
                    />
                );
            });

        return (
            <div>
                <label htmlFor="new-todo">Add Todo</label>
                <input
                    id="new-todo"
                    onChange={this.onChange}
                    value={this.state.newTodo}
                />
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }
}

export default TodoList;