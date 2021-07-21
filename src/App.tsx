import React from 'react';
import ConfirmationDialog from './ConfirmationDialog';


function App() {
  return (

    <div >
        
      <ConfirmationDialog okText="Delete" cancelText="Cancel" description="Do you really want to delete these records? This process cannot be undone." title="Are you sure?"/>
    </div>
  );
}

export default App;
