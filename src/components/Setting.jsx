import { useState } from 'react';

const Setting = ({ name, id, balance, currency, setMembers, showSetting, setShowSetting }) => {
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

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

    const showWarning = () => {
        setShowDeleteMessage(true);
    }
    
    const cancelDelete = () => {
        setShowDeleteMessage(false);
    }

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
        <div className={showSetting ? `bg-white` : `hidden`}>
            {/* hide setting button */}
            <button><i className="fa-solid fa-xmark text-3xl p-2" onClick={() => setShowSetting(false)}></i></button>

            {/* Data */}
            <div className="grid grid-cols-2">

                {/* Name */}
                <label htmlFor="name">Name</label>
                <input className='text-2xl font-bold h-12 w-28 text-left' placeholder="name" name="name" id={id} value={name} onChange={changeHandler} />

                {/* Balance */}
                <label htmlFor="name">Starting balance</label>
                <span>
                    <input className="text-4xl font-bold pr-2 h-12 w-28 text-right placeholder:text-xl" placeholder="balance" name="balance" id={id} value={balance} type="number" onChange={changeHandler} />
                </span>
                <label htmlFor="currency">Currency</label>
                <select className="bg-white" name="currency" id={id} value={currency} onChange={changeHandler}>
                    <option value="EUR">€</option>
                    <option value="YEN">円</option>
                    <option value="DOLLAR">$</option>
                </select>
                <label htmlFor="depositsOrWithdrawals">Deposits or Withdrawals</label>
                <input type="number" />
                <div className="col-span-2">Set regular income</div>
                <button onClick={showWarning}>Delete Member</button>
                {/* Warning message */}            
                <div className={showDeleteMessage ? `absolute -top-4 -left-11 pt-6 px-5 bg-white w-[30rem] h-48 text-3xl rounded-2xl z-10` : `hidden`}>
                    <div><i className="fa-solid fa-circle-exclamation mr-1 text-yellow-500"></i>Do you really want to delete?</div>
                    <div className="text-right mt-12">
                        <button id={id} className="w-20 p-1 bg-green-600 border border-green-700 rounded-full text-white hover:bg-white hover:text-green-600 mr-3" onClick={handleDelete}>YES</button>
                        <button className="w-20 p-1 bg-red-600 border border-red-600 rounded-full text-white hover:bg-white hover:text-red-600" onClick={cancelDelete}>NO</button>
                    </div>
                </div>

            </div>     

        </div>
     );
}
 
export default Setting;
<div>Setting</div> 