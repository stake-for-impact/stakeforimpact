import { Hero } from "../components/Hero";
import { ProjectList } from "../components/ProjectList";

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <ProjectList />
    </div>
  );
}
