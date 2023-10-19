import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 mx-auto">{children}</main>
    </div>
  );
}

export default RootLayout;
