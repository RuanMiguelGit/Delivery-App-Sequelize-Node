import React from 'react';
import PageRoutes from './routes/index';
import Provider from './context/appProvider';

function App() {
  return (
    <div className="App">
      <Provider>
        <PageRoutes />
      </Provider>
    </div>
  );
}

export default App;
