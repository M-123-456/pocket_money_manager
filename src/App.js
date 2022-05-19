import Header from "./components/Header";
import Members from "./components/Members";
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';


function App() {
  const date = new Date()
  const [members, setMembers] = useState([]);

  console.log(members)
    
  return (
    <div className="min-h-screen bg-slate-500">
      <Header date={date}/>
      <Members members={members} setMembers={setMembers} />     
    </div>
  );
}

export default App;
