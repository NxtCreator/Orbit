import CurrentlyInOrbit from "./components/CurrentlyInOrbit";
import { projects } from "./data/projects";


const App = () => {
  return (
    <main className="mx-auto w-full max-w-6xl p-8">
      <CurrentlyInOrbit projects={projects} />
    </main>

  );
}
export default App