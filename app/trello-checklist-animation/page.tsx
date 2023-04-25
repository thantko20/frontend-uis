'use client';

import { stagger, useAnimate } from 'framer-motion';
import React, { useState } from 'react';

const list = [
  {
    title: 'One',
    checked: true,
  },
  {
    title: 'Two',
    checked: false,
  },
  {
    title: 'Three',
    checked: true,
  },
  {
    title: 'Four',
    checked: true,
  },
  {
    title: 'Five',
    checked: false,
  },
];

const TrelloCheckList = () => {
  let [items, setItems] = useState([
    { id: '1', text: 'One', checked: true },
    { id: '2', text: 'Two', checked: true },
    { id: '3', text: 'Three', checked: true },
    { id: '4', text: 'Four', checked: false },
    { id: '5', text: 'Five', checked: true },
    { id: '6', text: 'Six', checked: true },
    { id: '7', text: 'Seven', checked: true },
  ]);

  const [ref, animate] = useAnimate();

  const handleChange = (id: string) => {
    const newItems = items.map((item) => ({
      ...item,
      checked: item.id === id ? !item.checked : item.checked,
    }));

    setItems(newItems);

    const random = Math.random();

    if (newItems.every((item) => item.checked)) {
      const lastCompletedItem = items.findIndex((item) => !item.checked);

      if (random < 1 / 4) {
        animate(
          'input',
          { rotate: [0, 10, -10, 0] },
          { delay: stagger(0.1, { from: lastCompletedItem }), duration: 0.3 }
        );
      } else if (random < 1 / 2) {
        animate(
          'input',
          { scale: [1, 1.2, 1] },
          { delay: stagger(0.1, { from: lastCompletedItem }), duration: 0.3 }
        );
      } else if (random < 3 / 4) {
        animate(
          'input',
          { x: [0, 2, -2, 0] },
          { delay: stagger(0.1, { from: lastCompletedItem }), duration: 0.4 }
        );
      }
    }
  };

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="mt-20 bg-white text-slate-950 min-w-[400px] rounded p-4 shadow-sm">
        <div className="text-lg font-semibold">Check List</div>
        <div ref={ref} className="flex flex-col gap-2">
          {items.map((item) => (
            <label
              key={item.id}
              className={`group flex w-full cursor-pointer select-none items-center rounded p-2 text-sm font-medium transition-colors duration-300 checked:text-gray-300 hover:bg-gray-200  ${
                item.checked ? 'text-gray-400 line-through' : 'text-gray-800'
              }`}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
                className="mr-4 h-4 w-4 rounded-sm border-2 border-gray-300 text-sky-600 transition-colors duration-300 focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-sky-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 group-active:border-sky-600 group-active:checked:text-sky-600/25"
              />
              {item.text}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrelloCheckList;
