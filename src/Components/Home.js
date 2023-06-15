import {useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '../App';
function Home(){
  const myContext=useContext(dataContext);
  console.log(myContext);
let [arr,setarr]=useState([]);
  useEffect(()=>{
  setarr([...arr,myContext])
},[])
console.log(arr)

return(
        <div>
          <h1>Welcome to The Siren</h1>
          <div style={{margin:"80px"}}>
             <img src={myContext[0].urlToImage} width={"100%"} height={"500px"}/>
                    <img src={myContext[1].urlToImage} width={"50%"} height={"300px"}/>
             <img src={myContext[3].urlToImage} width={"50%"} height={"300px"} />
             </div>
      <hr height={"13px"}/>
   
{
myContext.map((item,index)=>{
  if(index>2)
{
  return(<div className='homecontainer'>
  <div className='homearticles'>
  <img src={item.urlToImage} width={"355px"} height={"300px"} />
 <h3> <Link to={`/individualdatapage/${index}`} state={item}>{item.title}</Link></h3>


  </div>
  
 
  {/* //home articles */}
  </div>
  // homecontainer 
  )
} 
  })
}
{myContext.map(x=>{
  <p>x.title</p>
})}
{/* <div className='Navbar' style={{height:"600px",border:"red"}}>
  <div className='leftimage'><img src={props.data.home[1].urlToImage}/></div>
  <div className='leftimage' ><img src={props.data.home[2].urlToImage} />
  <img src={props.data.home[0].urlToImage} /></div>
</div> */}

        </div>
    )
}
export default Home;