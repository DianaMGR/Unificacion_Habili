import Sidebar from "../components/Sidebar";
import SidebarResponsive from '../components/SidebarResponsive';




const PrivateLayouts = ({children}) => {
   return(  <PrivateRoute> <div className="flex w-screen h-screen" >
      
     <div className='flex flex-col lg:flex-row flex-nowrap h-full w-full'> 
       <Sidebar/>
       <SidebarResponsive/>
              
      <main className='flex w-full overflow-y-scroll items-center justify-center'>
           {children}
        </main>     
    </div>
   </div>
  </PrivateRoute>   
   );
};

export default PrivateLayouts;
