import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // var person = {
  //   name:"Dr. Mahfus",
  //   job: "Singer"
  // }
  // var person2 = {
  //   name:"Eva Rahman",
  //   job: "Kokil Kondi"
  // }
  // var style ={
  //   color: 'red',
  //   backgroundColor:'yellow'
  // }

  const nayoks = ['Shuvo','Alomgir', 'Shakib', 'Jashim', 'Razzak', 'Razzak', 'Bappi'];
  const products =[
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrato', price:'$60.99'},
    {name:'PDF Reader', price:'$9.99'},
    {name:'PDF Reader', price:'$9.99'}
  ];
  
  return (
     <div className="App">
       <header className="App-header">
      <h2>I am a React Person</h2>
      <Posts></Posts>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(pd => <li>{pd.name}</li>)
        }
       
        <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li>
        <li>{nayoks[3]}</li>
      </ul>
      {
          products.map(product => <Product product={product}></Product>)
        }
       
         {/* <img src={logo} className="App-logo" alt="logo" />
       <h1 className='' style={style}>Singer: {person.name +" " + person.job}</h1>
        <h2 style={{color:'goldenrod', backgroundColor: 'white '}}>Singer: {person2.name + " " + person2.job}</h2> */}

        {/* <Person></Person>
        <Person></Person> */}
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        
        <Person name='Munna' job='football'></Person>
        <Person name='Masum' job='dorshok'></Person>
       </header>
     </div>
         
  );
}
function Counter(){
  const [count, setCount]= useState(10);
  // const handleIncrease = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)} >Decrease</button>
    </div>
  )
}

function Users (){
  const [users, setUsers]=useState([]);
  useEffect(()=>{
 fetch("https://jsonplaceholder.typicode.com/users")
 .then(res => res.json())
 .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h1>Dynamic Users:{users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
       
      </ul>
    </div>
  )
}

function Posts (){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>setPosts(data));
  },[])
  return(
    <div>
      <h1>Posts {posts.length}</h1>
      {
        posts.map(post=> <li>{post.title}</li>)
      }
     
      

    </div>
  )
}


function Product (props){
  const ProductStyle ={
    border: '1px solid gray',
    backgroundColor:'lightgray',
    borderRadius:'5px',
    height:'220px',
    width:'220px',
    float:"left",
    margin:'10px'

  }
  const {name, price}=props.product;
  return (
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
return(
    <div style={{border:'2px solid yellow', margin:'10px', padding:'5px'}}>
      <h3>My name: {props.name}</h3>
      <p>My profession: {props.job}</p>
    </div>
  )
}

// function Person(){
//   const personStyle={
//     border:'2px solid red',
//     margin:'10px'
//   }
//   return <div style={personStyle}>
//     <h1>Name: Shakib all Hasan</h1>
//     <h3>Hero of the year</h3>
//     </div>
// }

export default App;
