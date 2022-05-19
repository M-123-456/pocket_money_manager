import Header from "./components/Header";
import Members from "./components/Members";
import { useState, useEffect } from 'react';


function App() {
  const date = new Date()

  // State
  const [members, setMembers] = useState([]);


  // Effect
  // get members from local storage when starting the app
  useEffect(() =>{
    getLocalMembers();
  },[]);

  // ! Cannot be saved in the local storage
  // save members in local storage everytime when members are updated
  useEffect(() => {
    saveLocalMembers();
  }, [members])


  

  // Local Storage
  const saveLocalMembers = () => {
    localStorage.setItem('members', JSON.stringify(members))
  }
  
  const getLocalMembers = () => {
    if(localStorage.getItem('members') === null){
      localStorage.setItem('members', JSON.stringify([]));
    } else {
      const membersLocal = JSON.parse(localStorage.getItem('members'));
      setMembers(membersLocal);
    }
  }



  // console.log(members)
  

  return (
    <div className="min-h-screen bg-slate-500">
      <Header date={date}/>
      <Members 
        members={members} 
        setMembers={setMembers} 
      />     
    </div>
  );
}

export default App;
