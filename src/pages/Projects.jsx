import React from 'react';

export default function Projects() {
  const projects = [
    { name: "Project One", description: "An amazing project about X.", link: "#" },
    { name: "Project Two", description: "A creative solution for Y.", link: "#" },
  ];

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link} className="text-twitter-blue underline mt-4 block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

