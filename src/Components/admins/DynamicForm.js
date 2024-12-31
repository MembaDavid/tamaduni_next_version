import React, { useState } from "react";

const DynamicForm = ({ formTitle, fields }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.label] = "";
      return acc;
    }, {})
  );

  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{formTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              required={field.required}
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData[field.label]}
              onChange={(e) => handleChange(field.label, e.target.value)}
            />
          </div>
        ))}
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;

// Example Usage:
// const artistsFields = [
//   { label: 'Name', type: 'text', required: true },
//   { label: 'Age', type: 'number', required: false },
//   { label: 'Genre', type: 'text', required: true },
// ];
// <DynamicForm formTitle="Artists" fields={artistsFields} />
