'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const tabs = [
  {
    id: 'work',
    label: 'Work',
  },
  {
    id: 'business',
    label: 'Business',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
  {
    id: 'products',
    label: 'Products',
  },
];

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div>
      <div className="mt-10 flex items-center justify-center gap-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full relative`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="pill"
                style={{
                  borderRadius: 9999,
                }}
                className="absolute inset-0 bg-blue-500"
              />
            )}
            <span className="relative text-white z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTabs;
