import {  useSelector } from "react-redux";
import counterStore from "../store";

const DisplayCounter=()=>{
  const counter=useSelector((store)=>store.counter);


    return <>
      <p className="lead mb-4 fw-bold">Counter Current Value: {counter}</p>
        
    </>
}
export default DisplayCounter;