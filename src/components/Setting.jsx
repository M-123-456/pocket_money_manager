import { useState } from 'react';

const Setting = ({ name, id, startingBalance, balance, currency, regularIncomeOrExpense, setMembers, showSetting, setShowSetting }) => {
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    // Function to register the setting in state member
    // ! if[e.target.name] === cycle, startingDate, amount...
    const changeHandler = (e) => {
        setMembers((prevMembers)=> {
            return prevMembers.map((prevMember) => {
                return (
                    prevMember.id === e.target.id ?
                    {
                        ...prevMember,
                        [e.target.name]: e.target.value
                    } : prevMember
                );
            });
        });
    };

 
    const handleDelete = (e) => {
        setMembers((prevMembers) => {
            return prevMembers.map((prevMember) => {
                return (
                    prevMember.id === e.target.id ?
                    {
                        ...prevMember,
                        deleted: true,
                    } : prevMember
                );
            });
        });
        setShowDeleteMessage(false);
    }; 


    return ( 
        <div className={showSetting ? `px-10 py-10 w-screen min-h-screen bg-slate-400 relative` : `hidden`}>
            {/* hide setting button */}
            <button className="absolute top-0 right-2 " onClick={() => setShowSetting(false)}>
                <i className="fa-solid fa-xmark text-3xl p-2" onClick={() => setShowSetting(false)}></i>
            </button>

            {/* Data */}
            <div className="grid grid-cols-2 grid-rows-8 mt-8 gap-4 text-2xl">

                {/* Name */}
                <label htmlFor="name" className="">Name</label>
                <input 
                    className='text-4xl font-bold w-full h-12 rounded-lg pl-3' 
                    name="name" 
                    id={id} 
                    value={name} 
                    onChange={changeHandler}
                 />

                {/* Balance */}
                <label htmlFor="startingBalance">
                    Starting balance
                </label>
                <span>
                    <input 
                        className="text-4xl font-bold pr-4 h-12 w-full rounded-lg text-right" 
                        name="startingBalance" 
                        id={id} 
                        value={startingBalance} 
                        type="number" 
                        onChange={changeHandler} 
                        />
                </span>

                {/* Currency */}
                <label htmlFor="currency">Currency</label>
                <select 
                    className="bg-white w-full h-12 text-right rounded-lg pr-4" 
                    name="currency" 
                    id={id} 
                    value={currency} 
                    onChange={changeHandler}
                >
                    <option value="EUR">€</option>
                    <option value="YEN">円</option>
                    <option value="DOLLAR">$</option>
                </select>

                {/* regular income or expense */}
                <div className="">Set regular income or expense</div>

                {/* Regular income or expense  - Cycle */}
                <label htmlFor="cycle" className="col-start-1 text-right h-12">
                    Cycle
                </label>
                <select 
                    className="bg-white w-full text-right rounded-lg pr-4" 
                    name="cycle" 
                    id={id} 
                    value={regularIncomeOrExpense.cycle} 
                    onChange={changeHandler}
                >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                </select>

                {/* Regular income or expense  - starting date */}
                <label htmlFor="startingDate" className="text-right">
                    Starting date
                </label>
                <input 
                    type="date" 
                    className="rounded-lg text-right h-12 pr-4" 
                    name="startingDate" 
                    id={id} 
                    value={regularIncomeOrExpense.date}
                />

                {/* Regular income or expense  - amount */}
                <label htmlFor="regularInOutAmount" className="text-right" >
                    Amount
                </label>
                <input 
                    type="number" 
                    className="rounded-lg text-right h-12 pr-4" 
                    name="amount" 
                    id={id} 
                    value={regularIncomeOrExpense.amount} 
                />

                {/* delete button */}
                <div className='text-right col-start-2' >
                    <button 
                        className='py-2 px-4 rounded-full text-white mr-2 col-start-2 bg-red-600 border border-red-600 hover:text-red-600 hover:bg-white' 
                        onClick={()=>setShowDeleteMessage(true)}
                    >
                        Delete Member
                    </button>    
                </div>
                

                {/* Warning message */}            
                <div className={showDeleteMessage ? `absolute top-11 left-32 pt-6 px-5 bg-white w-[30rem] h-48 text-3xl rounded-2xl z-10 border border-slate-600` : `hidden`}>
                    <div>
                        <i className="fa-solid fa-circle-exclamation mr-1 text-yellow-500"></i>
                        Do you really want to delete?
                    </div>
                    <div className="text-right mt-12">
                        <button 
                            className="w-20 p-1 bg-green-600 border border-green-700 rounded-full text-white hover:bg-white hover:text-green-600 mr-3" 
                            id={id} 
                            onClick={handleDelete}
                        >
                            YES
                        </button>
                        <button 
                            className="w-20 p-1 bg-red-600 border border-red-600 rounded-full text-white hover:bg-white hover:text-red-600" 
                            onClick={()=>setShowDeleteMessage(false)}
                        >
                            NO
                        </button>
                    </div>
                </div>

            </div>     

        </div>
     );
}
 
export default Setting;