import './App.css';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';




const HatsPage = () => {
  return (
    <div>
      <h1>
        Hats page
      </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
          <Route exact path = '/' element={<HomePage />} />
          <Route path = '/shop/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
