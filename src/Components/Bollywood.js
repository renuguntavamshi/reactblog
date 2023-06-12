import {useState,useEffect} from 'react';

function Bollywood(props){
let [arr,setarr]=useState([]);
let [count,setcount]=useState(10);
console.log(props.data);
; 
useEffect(()=>{
  setarr([...arr,props.data.bollywood])
},[])
console.log(arr[0])
return(
        <div>
<div className='container'>
    <div>
    <h1 className='h1style'>Bollywood
    
</h1>
<hr className='hrstyleofheading'/><br />
    {
props.data.bollywood.map((item,index)=>{
    console.log(count)
    if(index>0 && index<count){
        return(
                      <div  className='Navbar' id='leftcontainer'>
          
                 <div><img src={item.urlToImage} style={{width:"300px",height:"200px"}} alt={"Image not available"} /></div>
                  <div >
                  <h4 className='styleofheaindandcontent' >{item.title}</h4>
                  <p className='styleofheaindandcontent'>{item.content}</p>
                  <p className='publisheddatestyle'>Bollywood/{item.publishedAt}</p>
                  
                  </div>
                        </div>
               
             
               
             )      
    }
  
  })
}
    </div>
    {/* //left container data */}
    <div >
    <h1 className='h1style'>Top Posts
    
    </h1>
    <hr className='hrstyleofheading'/><br />
    {
props.data.bollywood.map((item,index)=>{
    console.log(count)
    if(index>6 && index<10){
        return(
                      <div  className='Navbar'  id='leftcontainer'>
          
                 <div><img src={item.urlToImage} style={{width:"300px",height:"200px"}} alt={"Image not available"} /></div>
                  <div >
                  <h4 className='styleofheaindandcontent' >{item.title}</h4>
                  <p className='styleofheaindandcontent'>{item.content}</p>
                  <p className='publisheddatestyle'>Bollywood/{item.publishedAt}</p>
                  </div>
                        </div>
               
             
               
             )      
    }
  
  })
}
    </div> {/* //rightcontainer data */}
</div>{/* //container data */}
        </div>        // Parent div
    )
}
export default Bollywood;