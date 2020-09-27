import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  const [count, setCount] = useState([])
  console.log(count, setCount)

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(respons => respons.json())
      .then(data => setCount(data))
  },[])

  const name = ['habibor Rahaman', 'Jhanker Mahabob Bhai']
  const age = [3, 13];
  
  const heroName = [
    {name: 'Thomas', age: 34},
    {name:'allen', age: 56},
    {name:'jecsion', age: 43},
    {name:'jeck', age: 54}
  ]
 
  return (
    <div className="App">
      <Count></Count>
      {heroName.map(item => <Heros name = {item.name} age = {item.age}></Heros>)}

      {count.map(item => <DataLoad 
      id = {item.id}
      name = {item.name} 
      username = {item.username}
      email = {item.email}
      street = {item.address.street}
      city = {item.address.city}
      zipcode = {item.address.zipcode}
      
      ></DataLoad>)}


      <Hello name = {name[0]} age ={age[0]} ></Hello>
      <Hello name = {name[1]} age = {age[1]}></Hello>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

const Hello = (props) => {
console.log(props.name)
  return (
    <React.Fragment>
      <div className ='thomas'>
      <h1>hello world! how are you.</h1>
      <h3>This is a web application developper : {props.name}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iste.</p>
      <h3>My exprience {props.age || 50} years in javaScript 👍</h3>
    </div>
  </React.Fragment>
  );
};

const Count = () =>{
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1);
  const handleClick2 = () => setCount(count - 1);
  return(
    <React.Fragment>
      <div>
          <h1>Total Count : {count}</h1>
          <button onClick = {handleClick}>Add Counter</button>
          <button onClick = {handleClick2}>Delete Counter</button>
          <Display movice={count + 3}></Display>
          <Display movice={count + 10}></Display>
          <Display movice={count + 5}></Display>
      </div>
    </React.Fragment>
  )
}

const Display = (props) => {
  return(
    <React.Fragment>
          <div>
              <h1>This Count : {props.movice} </h1>
          </div>
    </React.Fragment>
  )
}

const Heros = (props) => {

  return(
    <React.Fragment>
          <div className = 'thomas1'>
                <h1>This is may hero list</h1>
                <h3>My name  is {props.name}</h3>
                <h3>My exprience {props.age} years in movies in the world </h3>
          </div>
    </React.Fragment>
  )
}

const DataLoad = (props) => {
    
  return(
    <React.Fragment>
          <div className = 'thomas2'>
                <h2>Dynamicly Loaded Data in API {'🚀'}</h2>
                <h3>ID : {props.id}</h3>
                <h3>Name : {props.name}</h3>
                <h3>Use Name : {props.username}</h3>
                <h3>Email : {props.email} </h3>
                <h3>Street : {props.street} </h3>
                <h3> City : {props.city}</h3>
                <h3>Zipcode : {props.zipcode}</h3>
          </div>
    </React.Fragment>
  )
}
export default App;
