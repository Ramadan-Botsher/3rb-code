import React from 'react';
import AppGrid from '../components/AppGrid';
import FilterForm from '../components/FilterForm';

const Home = () => {
  return (
    <div className="p-4">
      <FilterForm />
      <AppGrid />
    </div>
  );
};

export default Home;