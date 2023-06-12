
import './App.css';
import Home from './Components/Home';  
import Bollywood from './Components/Bollywood';
import Hollywood from './Components/Hollywood';
import Food from './Components/Food';
import Technology from './Components/Technology';
import Fitness from './Components/Fitness';
import Reusablecomp2 from './Components/Reusablecomp2';

import {Routes,Route} from 'react-router-dom'
import Datafromjson from './Data.json'
import { createContext } from 'react';
export let dataContext=createContext();
function App() {
  console.log(Datafromjson)
  let data=Object.keys(Datafromjson);
console.log(data);
console.log(data);
  return (
    <div className="App">

      <div style={{textAlign:"center"}}>
      <div style={{color:"blue"}}> 
    <h2>The Siren</h2>
  </div>
        <Reusablecomp2 />
        </div>        {/* //DIsplaycontainer */}
        

             <Routes>
             <Route  path ='/' element={
        <dataContext.Provider value={Datafromjson.home}>
          <Home  />
          </dataContext.Provider>
        }/>      
        <Route  path ='Home' element={
        <dataContext.Provider value={Datafromjson.home}>
          <Home  />
          </dataContext.Provider>
        }/>
        <Route  path ='bollywood' element={<Bollywood data ={Datafromjson} />}/>
        <Route  path ='hollywood' element={<Hollywood data ={Datafromjson} />}/>
        <Route  path ='technology' element={<Technology data ={Datafromjson} />}/>
        <Route  path ='food' element={<Food data ={Datafromjson} />}/>
        <Route  path ='fitness' element={<Fitness data ={Datafromjson} />}/>
       
        <Route  path =":Category" element={<Reusablecomp2  state ={Datafromjson}/>}/>
      </Routes>
       
    </div>    // App
  );
}

export default App;
