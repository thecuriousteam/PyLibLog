import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 mx-auto overflow-y-scroll">{children}</main>
    </div>
  );
}

export default RootLayout;
