import React from "react";
import Key from "./Key";


interface SilverKeysProps {
    onKeyPress: (keyValue: string) => void;
  }
  const SilverKeys: React.FC<SilverKeysProps> = ({ onKeyPress }) => { 
    const emptyKeys = ['1', '2', '3', '4'];

    return (

<div className=" flex flex-row md:flex-col gap-2 mb-1   mt-0 mr-0  pl-2 pr-0 pt-2">
       <div className=" flex flex-row gap-2">
        {emptyKeys.slice(0, 2).map((keyValue) => (
         <Key
            key={keyValue}
            label={" "}
            onPress={() => onKeyPress(keyValue)}
            type="silver"
            />
            ))}
      </div>
        <div className=" flex flex-row gap-2">
        {emptyKeys.slice(2, 4).map((keyValue) => (
         <Key
            key={keyValue}
            label={" "}
            onPress={() => onKeyPress(keyValue)}
            type="silver"
            />
            ))}
        </div>
        </div>

    )
}
export default SilverKeys
