import React from 'react';
import Key from './Key';


const Header = () => {
    const titlesAndKeys = [
        { title: 'ACCEPT', keyLabel: '' },
        { title: 'NUM', keyLabel: '' },
        { title: 'CAPB', keyLabel: '' },
        { title: 'BCROLL', keyLabel: '' },
      ];
   
  return (
    <div className="flex justify-around w-full bg-gray-700 text-white p-4 border-b-4 border-gray-200">
      <div className="text-xl font-bold pr-6">PrehKeyTec  </div>
        {titlesAndKeys.map(({ title, keyLabel }) => (
        <div key={title} className="flex flex-col items-center mx-2 ">
          <div className="mb-1 p-1">{title}</div>
          <Key 
            label={keyLabel}
            type="small"
            onPress={() => {}} />
        </div>
      ))}
    </div>
  )
}
export default Header;