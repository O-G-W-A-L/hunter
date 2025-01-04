import React from 'react';

export default function Resume() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">My Resume</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Here's a summary of my professional journey, skills, and achievements. Download the full resume below.
      </p>
      <div className="flex justify-center mt-6">
        <a
          href="/path-to-resume.pdf"
          download
          className="bg-twitter-blue text-white px-6 py-3 rounded-md shadow hover:bg-twitter-blue-dark"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

