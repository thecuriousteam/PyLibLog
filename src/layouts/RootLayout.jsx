import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 mx-auto overflow-y-auto">{children}</main>
    </div>
  );
}

export default RootLayout;
