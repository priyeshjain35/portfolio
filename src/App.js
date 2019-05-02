import React from 'react';
import './App.scss';
import SidePanel from './view/components/sidePanel/SidePanel';

function App() {
  return (
    <div className=''>
      <SidePanel isOpen={false} />
    </div>
  );
}

export default App;
