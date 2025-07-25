import React from "react";

interface StatsCounterProps {
  value: number;
  label: string;
}

export function StatsCounter({ value, label }: StatsCounterProps) {
  return (
    <div className="text-center p-4">
      <div className="text-4xl font-bold text-gold">{value}</div>
      <div className="text-lg text-gray-700 dark:text-gray-300">{label}</div>
    </div>
  );
}