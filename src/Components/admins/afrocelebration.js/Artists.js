import React, { useState } from "react";
import DynamicForm from "../DynamicForm";
import { formsConfig } from "../formsConfig";

const AdminsForms = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const subcategories = selectedCategory
    ? Object.keys(formsConfig[selectedCategory])
    : [];
  const fields =
    selectedCategory && selectedSubcategory
      ? formsConfig[selectedCategory][selectedSubcategory]
      : [];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admins Form</h1>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select Category:
        </label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Category --</option>
          {Object.keys(formsConfig).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select Subcategory:
        </label>
        <select
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Subcategory --</option>
          {subcategories.map((subcategory) => (
            <option key={subcategory} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      </div>

      {fields.length > 0 && (
        <DynamicForm formTitle={selectedSubcategory} fields={fields} />
      )}
    </div>
  );
};

export default AdminsForms;
