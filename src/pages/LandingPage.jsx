import React from 'react';
import LandingSection from '../components/LandingSection';

const LandingPage = () => {
  return (
    <div>
      <LandingSection title="Welcome to My React App" content="Explore various small React applications." />
      <LandingSection title="Features" content="Discover the features of each app showcased here." />
      <LandingSection title="Access Projects" content="Navigate to the app gallery to see all projects." />
    </div>
  );
};

export default LandingPage;