import React from 'react';

function Stripe({ data }) {
  return (
    <div className="bg-zinc-900 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-3 hover:bg-purple-600 duration-500 px-4 py-2 border-l border-b border-t border-zinc-800"
        >
          <img
            src={item.url}
            alt="Image Not Found"
            className="h-6 sm:h-8 object-contain"
          />
          <h3 className="text-sm sm:text-base font-medium text-white">{item.text}</h3>
        </div>
      ))}
    </div>
  );
}

export default Stripe;
