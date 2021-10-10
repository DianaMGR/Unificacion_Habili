import Sidebar from "../components/Sidebar";
const PrivateLayouts = ({children}) => {
    return (
        <div className="flex w-screen h-screen" >
       <Sidebar/>
      <main className='flex w-full bg-blue-400 overflow-y-scroll'> {children}</main>     
    </div>
    );
};

export default PrivateLayouts
