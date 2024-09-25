import { Provider } from 'react-redux'
import {store} from './app/store'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import CityList from './components/cityList';
import CityForm from './components/cityForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-city" element={<CityForm />} /> 
            <Route path="/city-list" element={<CityList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App
