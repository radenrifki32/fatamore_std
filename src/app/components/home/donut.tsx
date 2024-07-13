import React from 'react';

const DonutSVG = () => {
  return (
    <div>
      <div id='outer-parent-circle-mini'>
        <div id='outer-circle-mini' className='layer-2 absolute'></div>

        {/* Layer 4: Inner Circle */}
        <div id='inner-circle-mini' className='layer-4 absolute'></div>
      </div>
    </div>
  );
};

export default DonutSVG;
