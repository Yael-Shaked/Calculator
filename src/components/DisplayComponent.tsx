// Display.tsx
import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="flex items-center justify-end text-right text-white text-2xl h-20 bg-black rounded-xl p-4 mt-4 mr-2 ml-2">
      {value}
    </div>
  );
};

export default Display;
