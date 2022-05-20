import { useState } from 'react';
import Setting from './Setting';
import Spendpot from './Spendpot';

const Member = ({ name, id, startingBalance, currency, balance, regularIncomeOrExpense, movements, setMembers }) => {

    const [showSetting, setShowSetting] = useState(false);
    const [showSpendpot, setShowSpendpot] = useState(false);
   
    return ( 
        <>
            {/* Card of member */}
            <div className="flex flex-start w-80 h-28 rounded-lg bg-white px-2 py-1 shadow-lg relative">              
              
                {/* Name */}
                <div className='text-2xl font-bold h-12 w-28 text-left'>{name}</div>

                {/* Buttons -- Spendpot / Setting */}
                <div className='absolute right-3 text-xl'>
                    <button className="pr-2 bg-blue-700 text-white rounded-full px-2 mr-2" onClick={()=>setShowSpendpot(true)}>
                        Spendpot
                    </button>
                    {showSpendpot && 
                    <Spendpot 
                        key={id}
                        name={name}
                        id={id} 
                        setMembers={setMembers}
                        setShowSpendpot={setShowSpendpot}
                    />}
                    <button onClick={()=>setShowSetting(true)} >
                        <i className="fa-solid fa-gear"></i>
                    </button>
                </div>                
                

                {/* Balance */}
                <div className="self-end ml-auto"> 
                    <span className="text-4xl font-bold pr-2 h-12 w-28 text-right placeholder:text-xl">
                        {balance}                      
                    </span>
                    {currency}                
                </div>

            </div>

            {/* Settin (shown when clicking on setting button) */}
            <Setting 
                name={name}
                id={id}
                startingBalance={startingBalance}
                currency={currency} 
                setMembers={setMembers}
                regularIncomeOrExpense={regularIncomeOrExpense}
                balance={balance}
                showSetting={showSetting}
                setShowSetting={setShowSetting}

            />
        </>
        
     );
}
 
export default Member;