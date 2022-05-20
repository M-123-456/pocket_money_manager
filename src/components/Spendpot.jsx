import { isCompositeComponentWithType } from "react-dom/test-utils";

const Spendpot = ({ id, name, setMembers, balance, setShowSpendpot }) => {

    const addMovement = (e) => {
        setMembers((prevMembers) => {
            return prevMembers.map(prevMember => {
                return (
                    prevMember.id === e.target.id ?
                    { 
                        ...prevMember,
                        [e.target.name]: [ ...prevMember, e.target.value ]
                    } : prevMember
                );
            });
        });
        setShowSpendpot(false);
    };


    

    return ( 
        <div className="border-4 border-slate-800 absolute -top-16 w-48 h-16 bg-white rounded-lg">
            <button className="absolute top-0 right-2 " onClick={() => setShowSpendpot(false)}>
                <i className="fa-solid fa-xmark text-3xl p-2" ></i>
            </button>
            <input 
                className="w-full h-full pl-2 text-3xl placeholder:text-xl rounded-lg " 
                type="Number" 
                placeholder="Enter amount" 
                name="movements" 
                id={id}
                onChange={addMovement}
            />
        </div> 
    );
}
 
export default Spendpot;