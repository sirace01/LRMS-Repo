import React from 'react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <section className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-darkblue leading-tight mb-4 font-serif">
              Empowering Learning with Quality Resources
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-md">
              Welcome to the SDO QC Learning Resource Management Section. We are dedicated to providing accessible and high-quality learning materials for our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/resource-portal"
                className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Explore Resources
              </NavLink>
              <NavLink
                to="/services"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Our Services
              </NavLink>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTBBA3xwpW7m88AzcJIWN3FZhwjh3xKKLyQ&s"
              alt="DepEd Learning Management Resources"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-6 font-serif">
          About LRMS
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          The Learning Resource Management Section (LRMS) plays a crucial role in supporting the educational goals of SDO Quezon City. Our mission is to curate, develop, and disseminate diverse learning resources that cater to the evolving needs of students, teachers, and other stakeholders.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          We believe that access to quality learning materials is fundamental to fostering a thriving educational environment. Through our portal, archives, and eLibrary, we strive to make knowledge readily available and empower lifelong learning.
        </p>
      </section>

      {/* Key Features/Highlights Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="text-primary text-5xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-darkblue mb-2">Vast eLibrary</h3>
          <p className="text-gray-600">Access a wide collection of digital books, journals, and educational materials.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="text-accent text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-darkblue mb-2">Easy Search & Discovery</h3>
          <p className="text-gray-600">Find the resources you need quickly with our intuitive search functionality.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="text-lightblue text-5xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-darkblue mb-2">Dedicated Support</h3>
          <p className="text-gray-600">Our team is ready to assist you with your learning resource needs.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;