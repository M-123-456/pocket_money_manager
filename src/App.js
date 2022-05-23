import Header from "./components/Header";
import Members from "./components/Members";
import Setting from "./components/Setting";
import { useState, useEffect } from 'react';


function App() {
  const date = new Date()

  // State
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [showSetting, setShowSetting] = useState(false);

  console.log('showSetting', showSetting);

  // Effect
  // get members from local storage when starting the app
  useEffect(() => {
    getLocalMembers();
  }, [])

  // update filteredMembers when changes occur with members
  useEffect(() => {
    setFilteredMembers((members.filter(member => member.deleted !== true)))
  }, [members]);

  // ! Cannot be saved in the local storage
  // save members in local storage everytime when members are updated
  useEffect(() => {
    saveLocalMembers();
  }, [filteredMembers])



  // Local Storage
  const saveLocalMembers = () => {
    localStorage.setItem('members', JSON.stringify(members))
  }

  const getLocalMembers = () => {
    if (localStorage.getItem('members') === null) {
      localStorage.setItem('members', JSON.stringify([]));
    } else {
      const membersLocal = JSON.parse(localStorage.getItem('members'));
      setMembers(membersLocal);
    }
  }



  console.log('members', members);
  console.log('filteredmembers', filteredMembers);


  return (
    <div className="min-h-screen bg-slate-500 relative">
      <Header
        date={date}
      />
      <Members
        members={members}
        setMembers={setMembers}
        filteredMembers={filteredMembers}
        setShowSetting={setShowSetting}
      />
      {filteredMembers.map((filteredMember) => {
        <Setting
          name={filteredMember.name}
          id={filteredMember.id}
          startingBalance={filteredMember.startingBalance}
          currency={filteredMember.currency}
          setMembers={filteredMember.setMembers}
          regularIncomeOrExpense={filteredMember.regularIncomeOrExpense}
          balance={filteredMember.balance}
          showSetting={showSetting}
          setShowSetting={setShowSetting}
        />
      })}
    </div>
  );
}

export default App;
