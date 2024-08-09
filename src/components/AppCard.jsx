import React from 'react';

const AppCard = ({ app }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
      <img src={app.image} alt={app.name} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{app.name}</h3>
      <p className="mt-1">{app.description}</p>
      <div className="mt-2">
        <span className="text-sm font-medium">{app.technologies.join(', ')}</span>
      </div>
      <div className="mt-4">
        <a href={app.liveDemo} className="text-primary hover:underline">View App</a>
        <span className="mx-2">|</span>
        <a href={app.github} className="text-primary hover:underline">View Code</a>
      </div>
    </div>
  );
};

export default AppCard;