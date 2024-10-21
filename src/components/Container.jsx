
const Container=({children})=>{
    return <center>
    <div className="card p-3 mb-2 bg-primary-subtle text-primary-emphasis" style={{width:"70%"}}>
  <div className="card-body">
   {children}
  </div>
</div>
    </center>
}
export default Container;