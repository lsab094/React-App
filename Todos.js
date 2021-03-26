import React from 'react'
import axios from 'axios';

class Todos extends React.Component{
    state = {
        l1: []
    }

    componentDidMount(){
        axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(resp => {
            const l1 = resp.data;
            this.setState({l1});
        })
    }

    render() {
        const style2 = {
            background: "#f4f4f4",
            color: "#000000",
            padding: "10px",
            borderBottom: "1px dotted #000000",
            fontSize: 16
        };

        return (
          <div>
            <p style={style2}>
            {this.state.l1.slice(0,30).map(titles => 
                <p>
                    {titles.title}
                </p>)}
            </p>
          </div>
        );
      }
}

export default Todos;