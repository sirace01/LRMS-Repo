import React, { useState } from 'react';

// OrgChartNode component for consistent styling
interface OrgChartNodeProps {
  name: string;
  position: string;
  imageUrl?: string; // Optional image URL for the profile picture
  onImageClick?: (url: string) => void; // New prop for click handler
}

const OrgChartNode: React.FC<OrgChartNodeProps> = ({ name, position, imageUrl, onImageClick }) => {
  const defaultImageUrl = 'https://i.ibb.co/99JP00ph/LRMS-Image-removebg-preview.png'; // Generic placeholder for team members
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200 min-w-[200px] sm:min-w-[250px] md:min-w-[300px]">
      <img
        src={imageUrl || defaultImageUrl}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary-light shadow-sm cursor-pointer transform hover:scale-105 transition-transform duration-200"
        onClick={() => imageUrl && onImageClick && onImageClick(imageUrl)}
        aria-label={`View larger image of ${name}`}
      />
      <h3 className="text-lg font-bold text-darkblue mb-1">{name}</h3>
      <p className="text-primary text-sm">{position}</p>
    </div>
  );
};

const OurTeam: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
            imageUrl="https://depedqc.com/storage/Image/Organizational%20Structure/341133940_3169025376729991_7249209455122080783_n.png"
            onImageClick={handleImageClick}
          />

          {/* Vertical line connector */}
          <div className="w-px h-10 bg-gray-400 my-2"></div>

          {/* Level 2: Chief Education Supervisor */}
          <OrgChartNode
            name="Dr. Heidee F. Ferrer"
            position="Chief Education Supervisor"
            imageUrl="https://depedqc.com/storage/Image/Organizational%20Structure/2a147f0f-6425-405e-8fbd-c102d3baa4d7.png"
            onImageClick={handleImageClick}
          />

          {/* Vertical line connector */}
          <div className="w-px h-10 bg-gray-400 my-2"></div>

          {/* Level 3: Education Program Supervisor */}
          <OrgChartNode
            name="Dr. Precy M. Paurillo"
            position="Education Program Supervisor"
            imageUrl="https://i.ibb.co/99JP00ph/LRMS-Image-removebg-preview.png"
            onImageClick={handleImageClick}
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
              imageUrl="https://i.ibb.co/99JP00ph/LRMS-Image-removebg-preview.png" 
              onImageClick={handleImageClick}
            />
            <OrgChartNode 
              name="Gracelyn Gumasing" 
              position="Office Aide" 
              imageUrl="https://i.ibb.co/99JP00ph/LRMS-Image-removebg-preview.png" 
              onImageClick={handleImageClick}
            />
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged profile picture"
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-gray-600 transition"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged profile"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;