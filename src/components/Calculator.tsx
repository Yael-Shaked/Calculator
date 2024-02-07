import React, { useState } from 'react';
import FunctionKeys from './FunctionKeys';
import NumbersKeys from './NumbersKeys';
import SilverKeys from './SilverKeys';
import SpecialFunctionKeys from './SpecialFunctionKeys';
import Header from './headerComponent';



const Calculator: React.FC = () => {
  const handleKeyPress = (keyValue: string) => { 
    console.log(keyValue);
  };
  
    const calculatorStyle = {
      boxShadow: `
      -1px 0 1px rgba(0, 0, 0, 0.9),
      -2px 0 2px rgba(0, 0, 0, 0.8),
      -3px 0 4px rgba(0, 0, 0, 0.7),
      -4px 0 6px rgba(0, 0, 0, 0.6),
      -5px 0 8px rgba(0, 0, 0, 0.5),
      -6px 0 10px rgba(0, 0, 0, 0.4),
      -7px 0 15px rgba(0, 0, 0, 0.3),
      -8px 0 20px rgba(0, 0, 0, 0.2),
      -9px 0 30px rgba(0, 0, 0, 0.1),
      -10px 0 40px rgba(0, 0, 0, 0.05)
    `,
    };
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 py-4">
      <div className="mx-auto bg-gray-700   " style={calculatorStyle }>
      <Header />
      
        <div className=" relative mx-auto p-9 border-b-4 border-gray-200 w-full mb-10">    
      <div className="flex  ">
      <div className="flex flex-col ">          
          <FunctionKeys onKeyPress={handleKeyPress} />
          <NumbersKeys onKeyPress={handleKeyPress} />
        </div>
        <div className="flex flex-col  ">        
          <SilverKeys onKeyPress={handleKeyPress} />
          <SpecialFunctionKeys onKeyPress={handleKeyPress} />
        </div>

      </div>
    </div>
    </div>
    </div>

  );
};
export default Calculator;
