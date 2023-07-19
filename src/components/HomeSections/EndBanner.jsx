import React from 'react' 
import '../CSS/EndBanner.css' 
var version = '1' 

function EndBanner() {
  return (
    <div className='redBack'>
        <p className='whiteSpace'></p> 
        <p className='versionPlace'>Version: {version}</p>
        <p className='redSpace'></p>
    </div>
  )
}

export default EndBanner
