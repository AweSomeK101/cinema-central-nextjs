"use client";

import React, { useState } from "react";

function Tabs({ tabs }) {
  const [value, setValue] = useState(0);

  function handleClick(e, index) {
    if (value !== index) setValue(index);
  }

  if (!tabs || tabs.length < 1) return null;
  return (
    <>
      <div className="flex gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={(e) => handleClick(e, index)}
            type="button"
            className={`uppercase text-sm ${
              value === index
                ? "underline decoration-accent decoration-2 font-semibold"
                : "text-gray-400"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-2">{tabs[value].component}</div>
    </>
  );
}

export default Tabs;
