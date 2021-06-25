import "./styles.css";
import ProjectList from "./ProjectList";
import { projects } from "./data";

export default function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>React Templates</h2>
          <div className="underline"></div>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
