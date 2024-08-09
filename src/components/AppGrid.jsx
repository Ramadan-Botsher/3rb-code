import React from 'react';
import AppCard from './AppCard';
import appsData from '../assets/apps.json'; // Import app data

const AppGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {appsData.map(app => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
};

export default AppGrid;