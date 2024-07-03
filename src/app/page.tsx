import Card from "@/components/Card";
import WorkCard from "@/components/WorkCard";
import { allProjects } from "@/data";

export default function Home() {

  const recentWorks = allProjects.slice(0, 4);

  

  return (
    <main >
      <div className="bio-section">
        <Card
          cardTitle="👨‍💻 Mern Stack  Developer"
          cardDesc="I specialize in building dynamic web applications using the MERN stack.I'm based in Ahmedabad, India 📌, and am passionate about creating responsive, user-friendly and fully functional web applications."
        >
          Find me on{" "}
          <a
            className="text-blue-500 font-medium "
            href="https://linkedin.com/in/apuchandradas5568"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/apuchandradas5568"
            className="text-blue-500 font-medium "
            target="_blank"
          >
            GitHub
          </a>
          .
        </Card>
      </div>

      <div className="recent-work-section my-20">
        <h1 className="text-3xl font-medium text-center pb-8">Recent Works</h1>


        {recentWorks.map((project, idx) => (
          <WorkCard
            key={idx}
            title={project.name}
            description={project.description}
            tech={project.technologies || ''}
            link={project.previewLink}
          />
        ))}


      </div>

    </main>
  );
}
