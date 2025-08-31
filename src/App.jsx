import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import Portfolio from './components/Portfolio';

function App() {
  //fetch('http://localhost:4040/').then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))
  return (
    <div className="max-w-4xl mx-auto p-4">
     <Portfolio/>
     
    </div>
  );
}

export default App;
