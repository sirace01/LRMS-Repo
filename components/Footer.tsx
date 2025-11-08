import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SDO QC Learning Resource Management Section. All rights reserved.</p>
        <p className="mt-2 text-gray-300">
          Powered by Ace Technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;