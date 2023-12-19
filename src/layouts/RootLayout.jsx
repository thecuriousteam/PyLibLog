import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (

    <div className="flex relative">
      <div className="fixed z-[400] lg:w-[19rem] max-h-screen overflow-hidden scrollbar-none">
        <Sidebar />
      </div>
      
      <main className="lg:ml-[19rem] flex-1 ">{children}</main>

    </div>
  );
}

export default RootLayout;
