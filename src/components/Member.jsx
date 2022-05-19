import { useState } from 'react';

const Member = ({ name, id, balance, currency, setMembers }) => {

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
        
    console.log('show delete message', showDeleteMessage);
   

    return ( 
        <div className="flex flex-start w-80 h-20 rounded-md bg-white px-2 py-1 shadow-lg relative">
            <button className="absolute top-6 -left-11 text-red-900 text-3xl" onClick={showWarning}>
                <i className="fa-solid fa-circle-minus"></i>
            </button>

            {/* Warning message */}            
            <div className={showDeleteMessage ? `absolute -top-4 -left-11 pt-6 px-5 bg-white w-[30rem] h-48 text-3xl rounded-2xl z-10` : `hidden`}>
                <div><i className="fa-solid fa-circle-exclamation mr-1 text-yellow-500"></i>Do you really want to delete?</div>
                <div className="text-right mt-12">
                    <button id={id} className="w-20 p-1 bg-green-600 border border-green-700 rounded-full text-white hover:bg-white hover:text-green-600 mr-3" onClick={handleDelete}>YES</button>
                    <button className="w-20 p-1 bg-red-600 border border-red-600 rounded-full text-white hover:bg-white hover:text-red-600" onClick={cancelDelete}>NO</button>
                </div>
            </div>

            <input className='text-2xl font-bold h-12 w-28 text-left' placeholder="name" name="name" id={id} value={name} onChange={changeHandler} />
            <div className="self-end ml-auto"> 
            <span>
                <input className="text-4xl font-bold pr-2 h-12 w-28 text-right placeholder:text-xl" placeholder="balance" name="balance" id={id} value={balance} onChange={changeHandler} />
            </span>
            <select className="bg-white" name="currency" id={id} value={currency} onChange={changeHandler}>
                <option value="EUR">€</option>
                <option value="YEN">円</option>
                <option value="DOLLAR">$</option>
            </select>
            </div>
        </div>
     );
}
 
export default Member;