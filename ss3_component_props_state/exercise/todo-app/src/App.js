import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            list: []
        }

    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        })
    }
    handleAddItem = () => {
        if (this.state.item !== "") {
            this.setState((previous) => {
                return {
                    list: [...previous.list, previous.item],
                    item: ""
                }
            })
        }
    }

    render() {
        return (
            <div align="center">
                <h1>TO-DO List</h1>
                <input type="text" value={this.state.item}
                       onChange={this.handleChange}/>
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((e, index) => (
                        <li key={index}>{e}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App;
