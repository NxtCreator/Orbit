import { useState } from "react";
import AppLayout from "./components/layout/AppLayout";
import Workbench from "./pages/Workbench";
import ComingSoon from "./components/ComingSoon";

const TITLES = { projects: "All Projects", ideas: "Idea Drawer", archive: "Archive / Trophy Shelf" };

const App = () => {
  const [view, setView] = useState("workbench");
  return (
    <AppLayout active={view} onNavigate={setView}>
      { view === "workbench" ? <Workbench /> : <ComingSoon title={TITLES[view]} /> }
    </AppLayout>
  );
}
export default App;