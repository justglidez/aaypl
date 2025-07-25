import React from "react";

export function Footer() {
  return (
    <footer className="bg-gold text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} All Africa Young Political Leaders. All rights reserved.
      </p>
    </footer>
  );
}