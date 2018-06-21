import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';  **After installing bootstrap**
import List from './list';
import AddItem from './add_item';
import listData from '../data/list';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: []
        };
    }

    getListData(){
        //Make call to server to get data

        this.setState({
            list: listData
        });
    }

    componentDidMount(){
        this.getListData();
    }

    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        });
    }

    render(){
        console.log('APP STATE:', this.state);
        return (
            <div className="container">
                <h1 className="center">To-Do List</h1>
                <AddItem add={this.addItem.bind(this)}/>
                <List data={this.state.list}/>
            </div>
        );
    }
}

export default App;
