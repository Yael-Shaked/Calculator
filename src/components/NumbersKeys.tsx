import React from "react";
import Key from "./Key";


interface NumbersKeysProps {
    onKeyPress: (keyValue: string) => void;
  }
  const NumbersKeys: React.FC<NumbersKeysProps> = ({ onKeyPress }) => {   
    const regularKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
  
    return (

<div className=" flex flex-row md:flex-col gap-2 mb-1  mt-0 mr-0  pl-2 pr-0 pt-2">
          <div className=" flex flex-row gap-2">
            {regularKeys.slice(0, 3).map((keyValue) => (
              <Key
                key={keyValue}
                label={keyValue}
                onPress={() => onKeyPress(keyValue)}
                type="numbers"
            />
            ))}
          </div>
          <div className="  flex flex-row gap-2">
            {regularKeys.slice(3,6).map((keyValue) => (
              <Key
                key={keyValue}
                label={keyValue}
                onPress={() => onKeyPress(keyValue)}
                type="numbers"
            />
            ))}
          </div>
          <div className="  flex flex-row gap-2">
            {regularKeys.slice(6,9).map((keyValue) => (
              <Key
                key={keyValue}
                label={keyValue}
                onPress={() => onKeyPress(keyValue)}
                type="numbers"
              />
            ))}
          </div>
          <div className="flex flex-row gap-2 col-start-2">
          <Key
                label="0"
                type="numbers"
                onPress={() => onKeyPress('0')}
                additionalClasses="w-custom-wide" 
            />
           <div className="m-0  flex flex-row gap-2"></div>
           <Key
               key="dot"
               label="."
               onPress={() => onKeyPress('.')}
               type="numbers"
            />
              
            </div>
            </div>

      );
      
    };
  export default NumbersKeys;
