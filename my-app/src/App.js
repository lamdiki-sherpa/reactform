import React, {useState} from 'react';


function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [people,setPeople]=useState([])

  const handleSubmit=(event)=>{az
    event.preventDefault();
    if(name && email){
    const person={id:new Date().getTime().toString(),name,email}
    setPeople((prev)=>{
    return [...prev,person];
    
    })
    setName('');
    setEmail('');
    // setPeople([...people,person])
  }
  }
  return (
    <div>
    <div className="mainsection">
      <form onSubmit={handleSubmit}>
        Enter your name:
       <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} /> 
       Enter email:
       <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
       <button type="submit" className="btn btn-primary button" >submit</button>
      </form>
      </div>
      {
        people.map((person)=>{
          const {id,name,email}=person;
          return(
          <div key={id} className="mainsection1">
            <h3 style={{color:'black',textTransform:'capitalize',float:'left', fontSize: '18px'}}>{name}</h3>
            <h4 style={{color:'black',float:'right',fontSize: '18px'}}>{email}</h4>
          </div>
          );

        })
      }
      </div>
    
  );

}

export default App;
