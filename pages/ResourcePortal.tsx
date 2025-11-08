import React from 'react';

const ResourcePortal: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl font-extrabold text-darkblue mb-8 text-center font-serif">
        Resource Portal
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to the Resource Portal, your gateway to a wealth of educational materials. Here you can find a diverse range of learning resources categorized for easy navigation.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're looking for curriculum guides, supplementary readings, multimedia content, or research papers, our portal is designed to help you discover and utilize the resources essential for effective teaching and learning.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-primary mb-3">Lesson Plans</h3>
            <p className="text-gray-600 text-sm">Download ready-to-use lesson plans for various subjects and grade levels.</p>
          </div>
          <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-primary mb-3">Activity Sheets</h3>
            <p className="text-gray-600 text-sm">Interactive activity sheets to engage students and reinforce learning.</p>
          </div>
          <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-primary mb-3">Video Lectures</h3>
            <p className="text-gray-600 text-sm">Access a library of video lectures and tutorials from expert educators.</p>
          </div>
          <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-primary mb-3">Reference Materials</h3>
            <p className="text-gray-600 text-sm">Extensive collection of reference books and academic articles.</p>
          </div>
          <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-primary mb-3">Assessments</h3>
            <p className="text-gray-600 text-sm">Tools and templates for effective student assessment.</p>
          </div>
          <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-primary mb-3">Multimedia Kits</h3>
            <p className="text-gray-600 text-sm">Bundled resources including audio, video, and interactive elements.</p>
          </div>
        </div>
      </div>

      {/* Placeholder for future Gemini integration */}
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-darkblue mb-4 font-serif">
          Need help finding a resource?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our AI assistant (powered by Gemini) can help you search, summarize, or even suggest resources based on your query.
        </p>
        <button className="bg-accent hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-300 ease-in-out">
          Ask our AI (Coming Soon!)
        </button>
      </div>
    </div>
  );
};

export default ResourcePortal;