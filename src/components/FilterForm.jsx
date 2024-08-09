import React from 'react';

const FilterForm = () => {
  return (
    <form className="mb-4">
      <input
        type="text"
        placeholder="Search apps..."
        className="border border-gray-300 dark:border-gray-700 rounded p-2 w-full"
      />
    </form>
  );
};

export default FilterForm;