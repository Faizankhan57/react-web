import './App.css';
import axios from "axios";
import { useEffect , useState } from "react";

const App = ()=>{
    const {productData,setProductData}=useState([])

    const getData=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=> console.log(res)).catch(err=>console.log(err))
    }

    // const getData=async(()=>{
    //   const data=await axios.get('https://fakestoreapi.com/products/1')

    // })

    useEffect=(()=>{
        getData()

    },[])
    console.log(getData);
    return(
        <div>{
         productData.map((e,i)=>{
          return <div key={i}> 
          <h1>
            {e.title}
          </h1>
          <h5>
            {e.de}
          </h5>

          </div>

         })
        }
          </div>
    )

}



export default App;
