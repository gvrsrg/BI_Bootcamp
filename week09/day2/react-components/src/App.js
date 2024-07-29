import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react'
import { User } from './components/User';

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       users:[],
//       searchValue: "",
//     };
//   }

//   fetchData = async() =>{

//     try{
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();

//       console.log(data);

//       this.setState({users:data})


//     }catch(err){

//     }
//   }
//   componentDidMount = () => {
//     console.log('componentDidMount');
//     this.fetchData();
//   }

//   componentDidUpdate = (prevProps,prevState) => {
//     console.log(prevProps,prevState);
//     console.log('componentDidUpdate');
//   }

//   handleSearch = (e) => {
//     this.setState({ searchValue: e.target.value });
//   };
//   render() {
//     console.log('render');
//     const filter = this.state.users.filter((item) => {
//       return item.name
//         .toLowerCase()
//         .includes(this.state.searchValue.toLowerCase());
//     });

//     return (
//       <div>
//         <h1>Users</h1>
//         <div>
//           <button onClick={this.fetchData}>Get Users</button>
//           <input onChange={this.handleSearch} placeholder='Search...' />
//           {this.state.searchValue}
//         </div>

//         {filter.map((item) => {
//           return <User key={item.id} user={item} />;
//         })}
//       </div>
//     );
//   }
// }
function App() {
  const [count, setCount] = useState(0);
  return (

    <div>
      <h1>count</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
        count is {count}
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>

  );
}


export default App;
