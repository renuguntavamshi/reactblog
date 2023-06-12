import {useState,useEffect,useContext} from 'react';
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
{
myContext.map((item)=>{
    return(<div>
      <p>{item.title}</p>
      <img src={item.urlToImage} width={"35%"} />
      <hr height={"13px"}/>
      </div>)
  })
}
{/* <div className='Navbar' style={{height:"600px",border:"red"}}>
  <div className='leftimage'><img src={props.data.home[1].urlToImage}/></div>
  <div className='leftimage' ><img src={props.data.home[2].urlToImage} />
  <img src={props.data.home[0].urlToImage} /></div>
</div> */}
        </div>
    )
}
export default Home;