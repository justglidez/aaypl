import React from "react";

interface FormInputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function FormInput({ type, placeholder, value, onChange, required }: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="p-4 rounded border border-gray-300 dark:border-gray-700"
    />
  );
}