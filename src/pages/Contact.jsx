import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-twitter-blue text-white py-3 rounded hover:bg-twitter-blue-dark"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

