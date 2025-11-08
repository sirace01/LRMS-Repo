import React from 'react';

const ELibrary: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl font-extrabold text-darkblue mb-8 text-center font-serif">
        eLibrary
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to the LRMS eLibrary, your comprehensive digital hub for academic and educational resources. Our eLibrary provides 24/7 access to an extensive collection of digital books, journals, research papers, and multimedia content.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Designed to support flexible learning and research, the eLibrary offers powerful search tools and intuitive categorization to help you quickly find the information you need, anytime, anywhere.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Explore our virtual shelves and leverage the power of digital resources to enhance your teaching, learning, and research endeavors.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ELibraryCategory
            icon="📚"
            title="E-Books"
            description="Thousands of digital books across all subjects."
          />
          <ELibraryCategory
            icon="📰"
            title="E-Journals"
            description="Access to scholarly articles and research publications."
          />
          <ELibraryCategory
            icon="🎥"
            title="Multimedia"
            description="Educational videos, audio lectures, and interactive simulations."
          />
          <ELibraryCategory
            icon="📄"
            title="Theses & Dissertations"
            description="A collection of academic research papers."
          />
          <ELibraryCategory
            icon="📝"
            title="Online Modules"
            description="Self-paced learning modules for various topics."
          />
          <ELibraryCategory
            icon="💡"
            title="Educational Software"
            description="Tools and applications to aid in learning and teaching."
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-darkblue mb-4 font-serif">
          Can't find what you're looking for?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our intelligent search (powered by Gemini Flash-Lite for low-latency!) is continuously improving. Try a different keyword or contact our support team for assistance.
        </p>
        <button className="bg-secondary hover:bg-primary text-white font-semibold py-2 px-5 rounded-lg transition duration-300 ease-in-out">
          Search the eLibrary
        </button>
      </div>
    </div>
  );
};

interface ELibraryCategoryProps {
  icon: string;
  title: string;
  description: string;
}

const ELibraryCategory: React.FC<ELibraryCategoryProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
      <div className="text-5xl mb-4 text-center">{icon}</div>
      <h3 className="text-xl font-semibold text-darkblue mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

export default ELibrary;