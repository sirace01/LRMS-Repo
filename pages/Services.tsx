import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl font-extrabold text-darkblue mb-8 text-center font-serif">
        Our Services
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The SDO QC Learning Resource Management Section offers a comprehensive suite of services designed to support educators, learners, and administrators in accessing, utilizing, and developing high-quality learning resources.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our commitment extends to fostering an environment where educational materials are not only abundant but also effectively integrated into the learning process. Below are some of the key services we provide:
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon="📖"
            title="Resource Curation"
            description="Careful selection and organization of diverse learning materials to meet curriculum needs."
          />
          <ServiceCard
            icon="🛠️"
            title="Material Development"
            description="Assistance in creating custom educational content, from modules to interactive presentations."
          />
          <ServiceCard
            icon="💡"
            title="Training & Workshops"
            description="Conducting sessions on effective use of LRMS resources and digital literacy for educators."
          />
          <ServiceCard
            icon="📊"
            title="Research Support"
            description="Providing access to academic databases and assisting in educational research endeavors."
          />
          <ServiceCard
            icon="🤝"
            title="Consultation"
            description="Expert advice on learning resource management, integration, and development strategies."
          />
          <ServiceCard
            icon="🌐"
            title="Digital Archiving"
            description="Preserving valuable educational content through secure and accessible digital archiving solutions."
          />
        </div>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-lightgraybg p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="text-5xl mb-4 text-center">{icon}</div>
      <h3 className="text-xl font-semibold text-darkblue mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

export default Services;