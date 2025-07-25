import React from "react";

export function Loader() {
  return (
    <div className="flex items-center justify-center py-12">
      <span className="animate-spin rounded-full h-12 w-12 border-t-2 border-gold"></span>
    </div>
  );
}