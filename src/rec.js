import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

// function App() {
// const [productdata, setProductData]=useState([])
// const getData = async ()=>{
//   const fetch = await axios.get('https://fakestoreapi.com/products')
  
//   try{
//     setProductData(fetch.data)
//   }catch(err){
// console.log(err)
//   }
  
// }

//   useEffect(()=>{
//    getData()
//   },[])
  
  
//   console.log(data)
//   return (
    
//     <div className='card-container' >
//       {
//         data.map((e,i)=>{
//           const discrip = e.description.slice(0,50)
//           const titlee = e.title.slice(0,50)
         
//           return <div className='card' key={i}>
//             <div className='images'>
//           <img src={e.image} width={100}  />
//           </div>
//           <hr/>
//             <h5>
//               {
//                 titlee
//               }
//             </h5>
//             <p>
//               {
//                 discrip

//               }
//             </p>
//             <div>
//             <Button label={
//               e.price}/>
//           <Button label={e.rating.count}/>
//           </div>
//           </div>

//         })
//       }
//     </div>
//   );
// }

// export default App;