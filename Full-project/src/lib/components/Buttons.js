import React from 'react';

const Buttons = ({ handleClick }) => {
  return (
    <div>
      <form action="button" onClick={handleClick}></form>
      <button type="submit">Catch</button>
      <button type="submit">Escape</button>
    </div>
  );
};

export default Buttons;
