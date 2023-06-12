import {useState,useEffect} from 'react';

function Fitness(props){
let [arr,setarr]=useState([]);
let [count,setcount]=useState(7);
console.log(props.data);
; 
useEffect(()=>{
  setarr([...arr,props.data.fitness])
},[])
console.log(arr[0])
return(
        <div>
<div className='container'>
    <div>
    <h1 className='h1style'>Fitness
    
</h1>
<hr className='hrstyleofheading'/><br />
    {
props.data.fitness.map((item,index)=>{
    console.log(count)
    if(index<count){
        return(
                      <div  className='Navbar' id='leftcontainer'>
          
                 <div><img src={item.urlToImage} style={{width:"300px",height:"200px"}} alt={"Image not availabe"}/></div>
                  <div >
                  <h4 className='styleofheaindandcontent' >{item.title}</h4>
                  <p className='styleofheaindandcontent'>{item.content}</p>
                  <p className='publisheddatestyle'>Fitness/{item.publishedAt}</p>
                  
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
props.data.fitness.map((item,index)=>{
    console.log(count)
    if(index>4 && index<8){
        return(
                      <div  className='Navbar'  id='leftcontainer'>
          
                 <div><img src={item.urlToImage} style={{width:"300px",height:"200px"}} alt={"Image not availabe"} /></div>
                  <div >
                  <h4 className='styleofheaindandcontent' >{item.title}</h4>
                  <p className='styleofheaindandcontent'>{item.content}</p>
                  <p className='publisheddatestyle'>Fitness/{item.publishedAt}</p>
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
export default Fitness;