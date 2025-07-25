import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
}

export function HeroSection({ title, subtitle, image }: HeroSectionProps) {
  return (
    <section className="text-center mb-16">
      <h1 className="text-5xl font-bold text-gold mb-4">{title}</h1>
      <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">{subtitle}</p>
      <img src={image} alt={title} className="rounded-lg mx-auto shadow-lg w-full max-w-xl" />
    </section>
  );
}