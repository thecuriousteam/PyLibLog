import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-auto py-14">{children}</main>
    </div>
  );
}

export default RootLayout;
