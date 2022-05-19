import Member from './Member';
import { nanoid } from 'nanoid';

const Members = ( { setMembers, filteredMembers } ) => {

    // functions
    const addMember = () => {
        setMembers((prevMembers) => {
            return [
                ...prevMembers,

                // ! I don't like it that this part (adding new member with default value) is hard coded. Do we have any better way to do?
                {
                    name: "",
                    balance: 0,
                    currency: 'EUR',
                    id: nanoid(),
                    deleted: false,
                }
            ]
        });
    };

    
    return (
        <main className="flex flex-col items-center gap-4">
            {/* members card */}
            <div className="flex flex-col items-center gap-4 lg:flex-row px-4">                
                {filteredMembers.map((filteredMember) => (
                    <Member 
                        key={filteredMember.id}
                        name={filteredMember.name}
                        balance={filteredMember.balance}
                        id={filteredMember.id}
                        currency={filteredMember.currency}
                        setMembers={setMembers}
                    />
                ))}           
            </div>
            

            {/* add button */}
            <button className="flex items-center justify-center w-80 h-20 rounded-md bg-slate-400 px-2 py-1 shadow-lg hover:bg-slate-200 active:bg-slate-400" onClick={addMember} >
                <i className="fa-solid fa-circle-plus text-3xl text-slate-800"></i>
            </button>               
           
        </main>
        
     );
}
 
export default Members;
