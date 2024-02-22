import React from 'react';
import Key from './Key';

interface FunctionKeysProps {
}

const FunctionKeys: React.FC<FunctionKeysProps> = ({  }) => {
  const keys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6'];

  return (
    <div className=" flex flex-row md:flex-col gap-2 mb-1  mt-0 mr-0  pl-2 pr-0 pt-2">
      <div className=" flex flex-row gap-2">
        {keys.slice(0, 3).map((keyValue) => (
          <Key
            key={keyValue}
            label={keyValue}
            onPress={() => {}}
            type="function"
          />
        ))}
      </div>
      <div className=" flex flex-row gap-2">
        {keys.slice(3, 6).map((keyValue) => (
          <Key
            key={keyValue}
            label={keyValue}
            onPress={() => {}}
            type="function"
          />
        ))}
      </div>
    </div>
  );
};

export default FunctionKeys;
