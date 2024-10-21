import { useRef } from "react";
import { useDispatch,useSelector } from "react-redux";


const Controls=()=>{
  const dispatch=useDispatch();
  const inputElement=useRef();
  const counter=useSelector((store)=>store.counter);

  
 
  


  const handleIncrement=()=>{
dispatch({
  type:"INCREMENT"
})
  }
  const handleDecrement=()=>{
    dispatch({
      type:"DECREMENT"
    })
  }

  const handleAdd=()=>{
    dispatch({
      type:"ADD",
      payload:{
        num:inputElement.current.value
      }
    })
    inputElement.current.value=''
  }
  const handleSubtract=()=>{
    dispatch({
      type:"SUBTRACT",
      payload:{
        num:inputElement.current.value
      }
    })
    inputElement.current.value=''

  }

  const handleReset=()=>{
    dispatch({
      type:'RESET',
      payload:{
        reset:counter
      }
    })
    }

    return <>
     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center  ">
        <button
        onClick={handleIncrement}
        type="button" className="btn btn-primary btn-lg px-4 gap-3 button">+</button>
        <button
        onClick={handleDecrement}
        type="button" className="btn btn-success btn-lg px-4 gap-3 button">-</button>

      </div>

      <div  className="d-grid gap-2 d-sm-flex justify-content-sm-center  control">
      <input type="text" className="input" ref={inputElement} />
      <button
      onClick={handleAdd}
      type="button" className="btn btn-info ">Add</button>
    
      <button
        onClick={handleSubtract}
      type="button" className="btn btn-danger">Subtract</button>
      
<button
onClick={handleReset}
      type="button" className="btn btn-danger">Reset</button>
      </div>



    </>
}

export default Controls;