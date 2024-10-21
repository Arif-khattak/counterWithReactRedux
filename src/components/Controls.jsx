import { useDispatch } from "react-redux";

const Controls=()=>{
  const dispatch=useDispatch();

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
    return <>
     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
        onClick={handleIncrement}
        type="button" className="btn btn-primary btn-lg px-4 gap-3">+</button>
        <button
        onClick={handleDecrement}
        type="button" className="btn btn-success btn-lg px-4 gap-3">-</button>
      </div>
    </>
}

export default Controls;