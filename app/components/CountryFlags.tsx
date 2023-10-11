import React from 'react'

const CountryFlags = () => {
  return (
    <ul className='flex justify-center'>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='India'>🇮🇳<span hidden >India</span></li>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='Singapore'>🇸🇬<span hidden >Singapore</span></li>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='Germany'>🇩🇪<span hidden >Germany</span></li>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='Spain'>🇪🇸<span hidden >Spain</span></li>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='Portugal'>🇵🇹<span hidden >Portugal</span></li>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='Switzerland'>🇨🇭<span hidden >Switzerland</span></li>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='Malaysia'>🇲🇾<span hidden >Malaysia</span></li>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='Indonesia'>🇮🇩<span hidden >Indonesia</span></li>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='United Kingdom'>🇬🇧<span hidden >United Kingdom</span></li>
      <li className="tooltip tooltip-bottom p-3 text-xl" data-tip='Canada'>🇨🇦<span hidden >Canada</span></li>
    </ul>
  )
}

export default CountryFlags
