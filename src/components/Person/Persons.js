


function Person(props){
    return (
      <div className='person'>
        <h2>Name:{props.name}</h2>
        <p>Profession: {props.job}</p>
        <p>Age: {props.age}</p>
  
      </div>
    )
  }
  export default Person