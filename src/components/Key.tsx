import React, { useState } from 'react';

interface KeyProps {
  label: string;
  type: string;
  onPress: (label: string) => void; 
  additionalClasses?: string;
}
  const Key: React.FC<KeyProps> = ({ label, type, onPress, additionalClasses}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const baseStyle = 'rounded-lg text-lg font-semibold transition-colors duration-200 h-11 ';
  const shadowStyle = 'shadow-[-4px_4px_rgba(0,0,0,0.25)]';
  const pressedClasses = isPressed ? 'translate-y-1 scale-90' : ''; 

  const typeStyles: { [key: string]: string } = {
    function:'w-custom h-key bg-orange-500 text-md p-2',
    numbers: 'w-custom h-key text-white bg-gray-800 text-md p-2',
    silver:' w-custom h-key bg-gray-400 text-md p-2 ',
    small:'w-10 h-3 bg-gray-300 text p-2'
  };
  const buttonStyle = `${baseStyle} ${shadowStyle} ${typeStyles[type] || ''} ${additionalClasses || ''} ${pressedClasses}`;

  return (
    <button 
      className={buttonStyle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={() => onPress(label)}
    >
      {label}
    </button>
  );
};
export default Key;



