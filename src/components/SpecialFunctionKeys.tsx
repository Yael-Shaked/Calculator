import React from 'react';
import Key from './Key';

interface SpecialFunctionKeysProps {
  onKeyPress: (keyValue: string) => void;
}

const SpecialFunctionKeys: React.FC<SpecialFunctionKeysProps> = ({ onKeyPress }) => {
  return (
    <>
<div className=" flex flex-row md:flex-col gap-2 mb-1 mt-0 mr-0  pl-2 pr-0 pt-2">
      <div className=" flex flex-col gap-2">
        <Key
          label="Abb&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x"
          onPress={() => onKeyPress("Abb")}
          additionalClasses="bg-pink-500 text-left p-3 w-25 h-16" 
          type={''}       
           />
      </div>

      <div className=" flex flex-col  gap-2">
        <Key
          label="Korrektur&nbsp;&nbsp;&nbsp;&nbsp; <"
          onPress={() => onKeyPress("Korrektur")}
          additionalClasses="bg-yellow-300 text-left p-3 w-25 h-16" 
          type={''}   
               />
      </div>
      <div className="flex flex-col gap-2">
        <Key
          label="OK"
          onPress={() => onKeyPress("OK")}
          additionalClasses="bg-green-500 w-25 h-30" 
          type={''}    
              />
      </div>
      </div>

    </>
      

  );
};

export default SpecialFunctionKeys;
