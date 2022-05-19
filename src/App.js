import Header from "./components/Header";
import Members from "./components/Members";
import { useState } from 'react';


function App() {
  const date = new Date()

  // State
  const [members, setMembers] = useState([]);

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
