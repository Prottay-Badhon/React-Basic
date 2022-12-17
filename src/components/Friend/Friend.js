function Friend(props){
    return (
      <div className='container'>
        <h2>Name: {props.name}</h2>
        <p>Profession: {props.job}</p>
      </div>
    )
  }
  export default Friend