import Member from './Member';
import { nanoid } from 'nanoid';

const MEMBER = {
    NAME: 'name',
    STARTING_BALANCE: 'startingBalance',
    CURRENCY: 'currency',
    ID: 'id',
    REGULAR_INCOME_OR_EXPENSE: 'regularIncomeOrExpense',
    CYCLE: 'cycle',
    STARTING_DATE: 'startingDate',
    AMOUNT: 'Amount',
    MOVEMENTS: 'movements',
    BALANCE: 'balance',
    DELETED: 'deleted'
};

const Members = ( { setMembers, filteredMembers, showSetting, setShowSetting } ) => {

    // functions
    const addMember = () => {
        setMembers((prevMembers) => {
            return [
                ...prevMembers,

                // ! I don't like it that this part (adding new member with default value) is hard coded. Do we have any better way to do?
                {
                    name: "",
                    startingBalance: 0,
                    currency: 'EUR',
                    id: nanoid(),
                    regularIncomeOrExpense: { cycle: false, startingDate: "", amount: 0 },
                    movements: [],
                    // ? how can the balance be set?
                    balance(){
                        let balance = this.STARTING_BALANCE;
                        for(const movement in this.MOVEMENTS){
                            balance += movement
                        }
                        return balance;
                    },
                    deleted: false,
                }
            ]
        });
    };


    
    return (
        <main className="flex flex-col items-center gap-4`">
            {/* members card */}
            <div className="flex flex-col items-center gap-4 px-4">                
                {filteredMembers.map((filteredMember) => (
                    <Member 
                        key={filteredMember.id}
                        name={filteredMember.name}
                        startingBalance={filteredMember.startingBalance}
                        id={filteredMember.id}
                        currency={filteredMember.currency}
                        regularIncomeOrExpense={filteredMember.regularIncomeOrExpense}
                        movements={filteredMember.movements}
                        balance={filteredMember.balance}
                        setMembers={setMembers}
                        showSetting={showSetting}
                        setShowSetting={setShowSetting}
                    />
                ))}           
            </div>
            

            {/* add button */}
            <button 
                className="flex items-center justify-center w-80 h-20 rounded-md bg-slate-400 px-2 py-1 shadow-lg hover:bg-slate-200 active:bg-slate-400 mt-4" 
                onClick={addMember} 
            >
                <i className="fa-solid fa-circle-plus text-3xl text-slate-800"></i>
            </button>               
           
        </main>
        
     );
}
 
export default Members;
