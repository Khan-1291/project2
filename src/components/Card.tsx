import React from "react";

// Card wrapper
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border bg-white shadow-md hover:shadow-lg transition ${className}`}
    >
      {children}
    </div>
  );
};

// Card content (padding wrapper)
export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};