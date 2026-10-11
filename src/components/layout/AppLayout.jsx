import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const AppLayout = ({ active, onNavigate, children }) => (
  <div className="min-h-screen">
    <Sidebar active={active} onNavigate={onNavigate} />
    <div className="flex min-h-screen flex-col lg:pl-64">
      <TopBar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-6 pb-16 pt-24 lg:px-10">
        {children}
      </main>
    </div>
  </div>
);
export default AppLayout;