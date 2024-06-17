import Card from "@/components/Card";
import HomeBanner from "@/components/HomeBanner";
import Navbar from "@/components/Navbar";
import WorkCard from "@/components/WorkCard";

export default function Home() {
  return (
    <main>
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
        <h1 className="text-3xl font-medium p-8">Recent Works</h1>

        <WorkCard
          title="AltQuest: Product Review Application"
          description="This is a full stack application which allows users to post query about a product they are looking for and get recommendations from other users."
          tech= "React, Node, Express, MongoDB, Firebase, Tailwind CSS and JWT"
          image="/altquest.png"
        />
      </div>
    </main>
  );
}
