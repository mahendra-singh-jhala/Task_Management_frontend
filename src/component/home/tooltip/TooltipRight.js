import React, { useState } from 'react';

const TooltipRight = ({ tooltipText, icon }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="text-white font-medium rounded-lg px-5 py-2.5 text-center text-3xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon}
      </button>

      {showTooltip && (
        <div
          className="w-full absolute z-10 inline-block px-2 py-2 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-xs tooltip dark:bg-gray-700"
          role="tooltip"
          style={{ left: '100%' }}
        >
          {tooltipText}
          <div className="tooltip-arrow" data-popper-arrow />
        </div>
      )}
    </div>
  );
};

export default TooltipRight;
