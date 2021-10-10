import Sidebar from "../components/Sidebar";
const PrivateLayouts = ({children}) => {
    return (
        <div >
       <Sidebar/>
       {children}     
    </div>
    );
};

export default PrivateLayouts
