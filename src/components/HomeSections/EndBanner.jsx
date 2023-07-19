import React from 'react' 
import '../CSS/EndBanner.css' 
var version = '1'   
/* To deploy run npm run deploy on 
\TOBIAS-Project.github.io> in terminal, updating 
the version number helps verify successful deployment*/ 

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
