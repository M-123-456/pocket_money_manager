const Header = ({ date, }) => {
    const today = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`

    return (
        <header className="flex flex-end  h-20 items-center text-white px-2" >
            {/* <div className="date ml-auto">{today}</div>          */}
        </header> 
        
     );
}
 
export default Header;