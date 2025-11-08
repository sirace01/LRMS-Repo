import React from 'react';

const Archives: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl font-extrabold text-darkblue mb-8 text-center font-serif">
        Archives
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The LRMS Archives serve as a repository for historical and significant learning resources, preserving the intellectual heritage of SDO Quezon City's educational journey.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Here, you can delve into past curriculum developments, historical research projects, vintage educational materials, and records of educational events and initiatives. These resources offer valuable insights into the evolution of teaching methodologies and learning content over time.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are committed to digitizing and making these valuable assets accessible to researchers, educators, and the curious public, ensuring that the legacy of our educational efforts continues to inform and inspire future generations.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-primary mb-3">Historical Documents</h3>
            <p className="text-gray-600 text-sm">Browse important documents outlining educational policies and milestones.</p>
          </div>
          <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-primary mb-3">Legacy Publications</h3>
            <p className="text-gray-600 text-sm">Access older textbooks, academic journals, and research publications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archives;