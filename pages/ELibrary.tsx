import React, { useState } from 'react';

const ELibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'elementary' | 'jhs' | 'shs'>('elementary');

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl font-extrabold text-darkblue mb-8 text-center font-serif">
        eLibrary
      </h1>
      
      {/* Intro Text */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to the LRMS eLibrary, your comprehensive digital hub for academic resources. 
          To make browsing easier, we have organized our collection into three distinct learning levels. 
          Select a category below to access tailored materials for your specific needs.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('elementary')}
          className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            activeTab === 'elementary'
              ? 'bg-primary text-white shadow-lg ring-primary'
              : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md ring-transparent'
          }`}
        >
          Elementary
        </button>
        <button
          onClick={() => setActiveTab('jhs')}
          className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            activeTab === 'jhs'
              ? 'bg-secondary text-white shadow-lg ring-secondary'
              : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md ring-transparent'
          }`}
        >
          Junior High School
        </button>
        <button
          onClick={() => setActiveTab('shs')}
          className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            activeTab === 'shs'
              ? 'bg-accent text-white shadow-lg ring-accent'
              : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md ring-transparent'
          }`}
        >
          Senior High School
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 mb-16 border border-gray-100 min-h-[500px]">
        {activeTab === 'elementary' && (
           <div className="animate-fade-in space-y-8">
             <div className="text-center border-b border-gray-200 pb-6">
                <h2 className="text-3xl font-bold text-primary mb-2">Elementary Learning Resources</h2>
                <p className="text-gray-500 text-lg">Kindergarten to Grade 6</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CategoryCard title="Kindergarten" icon="🧸" color="text-yellow-500" description="Worksheets and visual aids for early learners." />
                <CategoryCard title="English" icon="📖" color="text-blue-500" description="Reading comprehension, grammar, and literature." />
                <CategoryCard title="Mathematics" icon="🧮" color="text-red-500" description="Numeracy, arithmetic, and basic geometry." />
                <CategoryCard title="Science" icon="🔬" color="text-green-500" description="General science, biology, and earth science basics." />
                <CategoryCard title="Filipino" icon="🇵🇭" color="text-indigo-500" description="Wika, pagbasa, at panitikan." />
                <CategoryCard title="Araling Panlipunan" icon="🌍" color="text-orange-500" description="History, culture, and civics." />
                <CategoryCard title="MAPEH" icon="🎨" color="text-purple-500" description="Music, Arts, PE, and Health resources." />
                <CategoryCard title="EPP" icon="🔨" color="text-teal-500" description="Edukasyong Pantahanan at Pangkabuhayan." />
                <CategoryCard title="Storybooks (Big Books)" icon="📚" color="text-pink-500" description="Digital storybooks for reading sessions." />
             </div>
           </div>
        )}

        {activeTab === 'jhs' && (
           <div className="animate-fade-in space-y-8">
             <div className="text-center border-b border-gray-200 pb-6">
                <h2 className="text-3xl font-bold text-secondary mb-2">Junior High School Resources</h2>
                <p className="text-gray-500 text-lg">Grade 7 to Grade 10</p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CategoryCard title="English" icon="📘" color="text-blue-600" description="Advanced grammar, literature, and composition." />
                <CategoryCard title="Mathematics" icon="📐" color="text-red-600" description="Algebra, Geometry, Trigonometry, and Statistics." />
                <CategoryCard title="Science" icon="🧬" color="text-green-600" description="Integrated science, Biology, Chemistry, and Physics." />
                <CategoryCard title="Filipino" icon="✒️" color="text-indigo-600" description="Florante at Laura, Noli Me Tangere, El Filibusterismo." />
                <CategoryCard title="Araling Panlipunan" icon="🏛️" color="text-orange-600" description="Asian History, World History, and Economics." />
                <CategoryCard title="MAPEH" icon="🎭" color="text-purple-600" description="Music, Arts, PE, and Health modules." />
                <CategoryCard title="TLE" icon="🍳" color="text-teal-600" description="Technology and Livelihood Education specialized courses." />
                <CategoryCard title="Edukasyon sa Pagpapakatao" icon="🤝" color="text-pink-600" description="Values education and character development." />
                <CategoryCard title="Research I-II" icon="🔎" color="text-gray-600" description="Guides for investigative projects and research papers." />
             </div>
           </div>
        )}

        {activeTab === 'shs' && (
           <div className="animate-fade-in space-y-8">
             <div className="text-center border-b border-gray-200 pb-6">
                <h2 className="text-3xl font-bold text-accent mb-2">Senior High School Resources</h2>
                <p className="text-gray-500 text-lg">Grade 11 & Grade 12</p>
             </div>
             
             <div>
                <h3 className="text-xl font-bold text-gray-700 mb-4 pl-2 border-l-4 border-accent">Subject Groups</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <CategoryCard title="Core Subjects" icon="🧠" color="text-blue-700" description="Oral Communication, General Math, Earth & Life Science, PE & Health, etc." />
                    <CategoryCard title="Applied Subjects" icon="💼" color="text-green-700" description="Empowerment Tech, Entrepreneurship, Practical Research, etc." />
                </div>
             </div>

             <div>
                <h3 className="text-xl font-bold text-gray-700 mb-4 pl-2 border-l-4 border-accent">Academic & Technical Tracks</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <CategoryCard title="STEM" icon="🧪" color="text-red-700" description="Science, Technology, Engineering, Math" compact />
                    <CategoryCard title="ABM" icon="📊" color="text-yellow-600" description="Accountancy, Business, and Management" compact />
                    <CategoryCard title="HUMSS" icon="🗣️" color="text-purple-700" description="Humanities and Social Sciences" compact />
                    <CategoryCard title="GAS" icon="⚖️" color="text-indigo-700" description="General Academic Strand" compact />
                    <CategoryCard title="TVL" icon="🛠️" color="text-orange-700" description="Technical-Vocational-Livelihood" compact />
                    <CategoryCard title="Arts & Design" icon="🎨" color="text-pink-700" description="Arts and Design Track" compact />
                    <CategoryCard title="Sports" icon="⚽" color="text-green-600" description="Sports Track" compact />
                </div>
             </div>
           </div>
        )}
      </div>

      {/* Footer / Help Section */}
       <div className="bg-gradient-to-r from-darkblue to-primary rounded-2xl shadow-xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white opacity-10"></div>
        
        <h2 className="text-3xl font-bold mb-4 font-serif relative z-10">
          Need Help Navigating?
        </h2>
        <p className="text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto relative z-10">
          Our intelligent system is designed to help you find resources quickly. If you're looking for something specific outside these categories, try our AI-powered search.
        </p>
        <button className="bg-white text-darkblue hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 relative z-10">
          Search with Gemini AI
        </button>
      </div>
    </div>
  );
};

interface CategoryCardProps {
  icon: string;
  title: string;
  color: string;
  description?: string;
  compact?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, color, description, compact }) => {
  return (
    <div className={`bg-lightgraybg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 cursor-pointer group flex flex-col h-full ${compact ? 'p-5' : 'p-6'}`}>
      <div className={`flex items-start ${compact ? 'flex-row gap-4 items-center' : 'flex-col text-center items-center'}`}>
        <div className={`${compact ? 'text-4xl' : 'text-5xl mb-4'} ${color} transform group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <div className={compact ? 'text-left' : 'w-full'}>
            <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-gray-800 group-hover:text-primary transition-colors`}>{title}</h3>
            {!compact && description && (
                <p className="text-gray-500 text-sm mt-2 leading-snug">{description}</p>
            )}
        </div>
      </div>
      {compact && description && (
        <p className="text-gray-500 text-xs mt-2 ml-1 leading-snug">{description}</p>
      )}
    </div>
  );
};

export default ELibrary;
