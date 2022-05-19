import { useState } from 'react';
import Setting from './Setting';

const Member = ({ name, id, balance, currency, setMembers }) => {

    const [showSetting, setShowSetting] = useState(false);
   

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

    // const showWarning = () => {
    //     setShowDeleteMessage(true);
    // }
    
    // const cancelDelete = () => {
    //     setShowDeleteMessage(false);
    // }

    // const handleDelete = (e) => {
    //     setMembers((prevMembers) => {
    //         return prevMembers.map((prevMember) => {
    //             return (
    //                 prevMember.id === e.target.id ?
    //                 {
    //                     ...prevMember,
    //                     deleted: true,
    //                 } : prevMember
    //             );
    //         });
    //     });
    //     setShowDeleteMessage(false);
    // }; 

    return ( 
        <>
            <div className="flex flex-start w-80 h-28 rounded-lg bg-white px-2 py-1 shadow-lg relative">              
              
                {/* Name */}
                <div className='text-2xl font-bold h-12 w-28 text-left'>{name}</div>

                {/* Setting button */}
                <button className='absolute right-3 text-xl' onClick={()=>setShowSetting(true)} ><i className="fa-solid fa-gear"></i></button>

                {/* Balance */}
                <div className="self-end ml-auto"> 
                    <span className="text-4xl font-bold pr-2 h-12 w-28 text-right placeholder:text-xl">
                        {balance}                      
                    </span>
                    {currency}                
                </div>

            </div>
            <Setting 
                name={name}
                id={id}
                balance={balance}
                currency={currency} 
                setMembers={setMembers}
                showSetting={showSetting}
                setShowSetting={setShowSetting}
            />
        </>
        
     );
}
 
export default Member;