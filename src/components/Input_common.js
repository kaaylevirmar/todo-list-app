import React from "react";

export const InputComponent = ({ form, name, placeholder, label }) => {
  return (
    <div className="mb-3">
      <label className="text-sm">{label}</label>
      <input
        onChange={form?.handleChange}
        value={form?.values?.title}
        name={name}
        className="border border-gray-500 px-3 py-2 w-full focus:border-gray-900 outline-0 rounded"
        placeholder={placeholder}
      />
      {form?.touched?.title && form?.errors?.title ? (
        <p className="text-red-900">{form?.errors?.title}</p>
      ) : null}
    </div>
  );
};

export const TextAreaComponent = ({ form, name, placeholder, label }) => {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <textarea
        onChange={form?.handleChange}
        value={form?.values?.description}
        name={name}
        className="border border-gray-500 px-3 py-2 w-full focus:border-gray-900 outline-0 rounded"
        placeholder={placeholder}
      />
      {form?.touched?.description && form?.errors?.description ? (
        <p className="text-red-900">{form?.errors?.description}</p>
      ) : null}
    </div>
  );
};
