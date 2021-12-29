import React,{useEffect,useState} from "react";
import axios from 'axios';
// import the axios to get the data from an api 

function App() {
  const[data,setData] = useState([]);
  // data varaible to empty array
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => setData(response.data)
      // set the data to the api response data 
      )
  },[])
  // useeffect arrow function and dependecies 
  return (
    <div className="App">
            {data.map(item => <li key={item.id}>{item.title}</li>)}
            {/* map each data item and in the list  */}
            {/* {data.map(item1 => <h1 key={item1.id}>{item1.username}</h1>)} */}
    </div>
  );
}

export default App;
