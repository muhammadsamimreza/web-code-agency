import React from "react";
import Container from "../../components/Container/Container";
import { Settings, Code, ShieldCheck, Users } from "lucide-react";
import Card from "../../components/Cards/Card";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const tools = [
  {
    icon: <Settings className="w-6 h-6 text-blue-500" />,
    title: "Customizable Settings",
    description:
      "Easily adjust features and preferences to suit your workflow.",
  },
  {
    icon: <Code className="w-6 h-6 text-green-500" />,
    title: "Developer Friendly",
    description: "Built with clean, extendable code that’s easy to work with.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
    title: "Secure by Design",
    description: "We prioritize security in every layer of the platform.",
  },
  {
    icon: <Users className="w-6 h-6 text-pink-500" />,
    title: "Team Collaboration",
    description:
      "Tools that make it simple to collaborate with your team in real-time.",
  },
];

const ToolsSection = () => {
  return (
    <Container>
      <div className="py-10 text-center space-y-10">
        {/* <div className="space-y-2">
          <p className="uppercase font-semibold">The tools you need</p>
          <h1 className="text-3xl font-bold">
            All-in-One Solution for Your Projects
          </h1>
        </div> */}
        <HeadingSection
        heading="All-in-One Solution for Your Projects"
        subHeading="The tools you need"
        ></HeadingSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {tools.map((tool, index) => (
            <Card key={index} tool={tool}></Card>
          ))}
        </div>
          <button className="btn btn-primary text-white font-medium">
            Explore More
          </button>
      </div>
    </Container>
  );
};

export default ToolsSection;
