import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';  **After installing bootstrap**
import List from './list';
import AddItem from './add_item';
import axios from 'axios';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: []
        };

        this.base_url = 'http://api.reactprototypes.com';
        this.api_key = '?key=c418cupcakes';
    }

    async getListData(){

        try {
            const resp = await axios.get(`${this.base_url}/todos${this.api_key}`);

            this.setState({
                list: resp.data.todos
            });
        } catch(err){
            console.log('Get Data Error:', err.response.data.error);
        }

        //Make call to server to get data

        // axios.get(`${this.base_url}/todos${this.api_key}`).then(resp => {
        //     console.log('Get Todos Response:', resp.data.todos);

        //     this.setState({
        //         list: resp.data.todos
        //     });
        // }).catch(err => {
        //     console.log('Get Todos Error:', err.message);
        // })
        
    }

    async componentDidMount(){
        this.getListData();
    }

    async deleteItem(id){
        
        const resp = await axios.delete(`${this.base_url}/todos/${id}${this.api_key}`);

        this.getListData();
    }

    async addItem(item){
        try {
            await  axios.post(`${this.base_url}/todos${this.api_key}`, item);

            this.getListData();
        } catch(err) {
            console.log('Error Adding Item:', err.message);
        }
    }

    render(){

        return (
            <div className="container">
                <h1 className="center">To-Do List</h1>
                <AddItem add={this.addItem.bind(this)}/>
                <List data={this.state.list} delete={this.deleteItem.bind(this)}/>
            </div>
        );
    }
}

export default App;
