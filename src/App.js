import './App.css';
import Countries from './components/Country/Countries.js';
import Persons from './components/Person/Persons.js';
import Friend from './components/Friend/Friend.js';
import Counter from './components/Counter/Counter.js';
import ExternalUser from './components/ExternalUser/ExternalUser.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Watch from './components/Watch/Watch';
import Display from './components/Display/Display';
import Cosmetics from './components/Cosmetics/Cosmetics';
import CardGroup from './components/CardGroup/CardGroup';
import {Spinner} from 'react-bootstrap';
import Head from './components/Head/Head';
import Pricing from './components/Pricing/Pricing';
import Rechart from './components/Rechart/Rechart';
import SpecialChart from './components/SpecialChart/SpecialChart';


const districtStyle={
  backgroundColor: "gray",
  // padding: "20px"
  padding: "20px 0",
  margin: "20px 0"
}


function App() {
  // const nayoks=[
  //   {name: 'Sakib Khan',age: 40, propession: 'Acting'},
  //   {name: 'BappaRaz',age: 50, propession: 'Acting'},
  //   {name: 'Jasim',age: 'died', propession: 'Acting'},
  //   {name: 'Rubel',age: 60, propession: 'Acting'},
  // ];
  
  // return (

  //   <div className="App">
  //     <Header></Header>
  //     {
  //       nayoks.map(nayok => <Persons name = {nayok.name} age={nayok.age} job={nayok.propession}></Persons>)
  //     }
  //     <Friend name="Sami" job="student"></Friend>
  //     <Counter></Counter>
  //     <ExternalUser></ExternalUser>
  //     <Countries></Countries>
  //     <Footer></Footer>
  //   </div>
  // );
    return(
        <div className="App">
            {/* <District name="Noakhali" special="Bivag"></District>
            <District></District>
            <District></District>
            <LoadPost></LoadPost>
            <Watch></Watch>
            <Cosmetics></Cosmetics> */}
            {/* <CardGroup></CardGroup>
            <Spinner animation="border" variant="success" /> */}
         <Head></Head>
        <Pricing></Pricing>
       <Rechart></Rechart>
            <SpecialChart></SpecialChart>
        </div>
    )
}

export default App;

function District(props){
  const [power,setPower]= useState(1);
  const increaseBoast=()=>{
    setPower(power*2);
  }
  const {name,special}=props;
  return (
    <div style={districtStyle}>
      <h2>Name: {name}</h2>
      <p>Speciality: {special}</p>
      <p>Power: {power}</p>
      <button onClick={increaseBoast}>Boast the power</button>
    </div>
  )
}
function LoadPost(){
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=>setPosts(data))
  },[])
 return(
       <div>
         {
           posts.map( post => <Post title={post.title} body={post.body}></Post>)
         }
       </div>
      
    )
}
function Post(props){
  return(
    <div style={{background: "burlywood",padding:"20px",margin: "20px",borderRadius: "20px"}}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
  </div>
  )
}