import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
// import { getUser } from './api/user';
import store from './app/store';
import { listener } from './app/listener';

function App() {
  React.useEffect(() => {
    listener();
  }, []);

  return (
    <div>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
