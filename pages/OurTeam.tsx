import React from 'react';

// OrgChartNode component for consistent styling
interface OrgChartNodeProps {
  name: string;
  position: string;
  imageUrl?: string; // Optional image URL for the profile picture
}

const OrgChartNode: React.FC<OrgChartNodeProps> = ({ name, position, imageUrl }) => {
  const defaultImageUrl = 'https://via.placeholder.com/64x64?text=👤'; // Generic placeholder for team members
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200 min-w-[200px] sm:min-w-[250px] md:min-w-[300px]">
      <img
        src={imageUrl || defaultImageUrl}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary-light shadow-sm"
      />
      <h3 className="text-lg font-bold text-darkblue mb-1">{name}</h3>
      <p className="text-primary text-sm">{position}</p>
    </div>
  );
};

const OurTeam: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl font-extrabold text-darkblue mb-8 text-center font-serif">
        Our Team
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The SDO QC Learning Resource Management Section is composed of dedicated professionals committed to advancing education through effective resource management. Our team works tirelessly to curate, develop, and deliver high-quality learning materials to our community.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We bring together diverse expertise in education, library science, technology, and content development to ensure that our resources are relevant, accessible, and impactful. Get to know the faces behind the LRMS.
        </p>

        {/* Organizational Chart */}
        <div className="flex flex-col items-center mt-10">
          {/* Level 1: Superintendent */}
          <OrgChartNode
            name="Dr. Carleen S. Sedilla, CESO V"
            position="Schools Division Superintendent"
            imageUrl="https://via.placeholder.com/150/500099/FFFFFF?text=CS"
          />

          {/* Vertical line connector */}
          <div className="w-px h-10 bg-gray-400 my-2"></div>

          {/* Level 2: Chief Education Supervisor */}
          <OrgChartNode
            name="Dr. Heidee F. Ferrer"
            position="Chief Education Supervisor"
            imageUrl="https://via.placeholder.com/150/4285f4/FFFFFF?text=HF"
          />

          {/* Vertical line connector */}
          <div className="w-px h-10 bg-gray-400 my-2"></div>

          {/* Level 3: Education Program Supervisor */}
          <OrgChartNode
            name="Dr. Precy M. Paurillo"
            position="Education Program Supervisor"
            imageUrl="https://via.placeholder.com/150/ea4335/FFFFFF?text=PM"
          />

          {/* Branching from Precy to Lisa and Gracelyn */}
          <div className="relative flex justify-center w-full max-w-lg mx-auto mt-4">
            {/* Vertical line extending down from Precy's node to the horizontal branch */}
            <div className="absolute w-px h-16 bg-gray-400 -top-4"></div>

            {/* Horizontal line for branches */}
            <div className="absolute w-2/3 sm:w-1/2 h-px bg-gray-400 top-12"></div> 

            {/* Vertical lines leading to Lisa and Gracelyn's nodes */}
            <div className="absolute w-px h-16 bg-gray-400 left-1/4 -translate-x-1/2 top-12"></div>
            <div className="absolute w-px h-16 bg-gray-400 right-1/4 translate-x-1/2 top-12"></div>
          </div>

          {/* Level 4: Lisa and Gracelyn */}
          <div className="flex flex-wrap justify-center gap-12 mt-28"> {/* mt-28 to ensure nodes are below all lines */}
            <OrgChartNode 
              name="Lisa J. De Guzman" 
              position="Librarian II" 
              imageUrl="https://via.placeholder.com/150/fbbc05/FFFFFF?text=LD" 
            />
            <OrgChartNode 
              name="Gracelyn Gumasing" 
              position="Office Aide" 
              imageUrl="https://via.placeholder.com/150/34a853/FFFFFF?text=GG" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;