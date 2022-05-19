import { useState } from 'react';

const Member = ({ name, id, balance, currency, setMembers }) => {

    const [deleteMessage, setDeleteMessage] = useState(false);

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

    const handleClick = () => {
        setDeleteMessage(true);
    }
   

    return ( 
        <div className="flex flex-start w-80 h-20 rounded-md bg-white px-2 py-1 shadow-lg relative">
            <button className="absolute top-6 -left-11 text-red-900 text-3xl" onClick={handleClick}>
                <i className="fa-solid fa-circle-minus"></i>
            </button>
            {/* <div className='absolute p-1 bg-white w-80 h-40 text-3xl'>
                <h2>Do you want to delete?</h2>
                <button>YES</button><button>NO</button>
            </div> */}
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