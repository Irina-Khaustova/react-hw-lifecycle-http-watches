import Watch from "./Watch";

function Watches({watches, onHandleDelete}) {

  return (
    <div className="watches-container">
      {watches.map((el) => <Watch handleDelete={onHandleDelete} key={el.id} offset={el.offset} id={el.id} name={el.name}></Watch>)}
    </div>
  );
}
  
  export default Watches;