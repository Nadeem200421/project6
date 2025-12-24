import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textarea?: boolean;
}

export default function Input({ textarea = false, className = "", ...props }: InputProps) {
  const baseClasses =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-blue-400";

  if (textarea) {
    return <textarea className={`${baseClasses} ${className}`} {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)} />;
  }

  return <input className={`${baseClasses} ${className}`} {...props} />;
}
