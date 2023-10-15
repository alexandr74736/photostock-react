import React from 'react';
import './App.css';
import Layout from './Layouts/Default/Default';
import MainPage from './pages/MainPage/MainPage';
import Profile from './pages/Profile/Profile';
import Album from './pages/Album/Album';
import NotFound from './pages/NotFound/NotFound';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { usersFetchData } from './actions/users';
import { useEffect } from 'react';

const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(usersFetchData())
  }, []);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage state={state} />} />
            <Route path="profile/:id" element={<Profile state={state} />}>
              <Route path=":albumId" element={<Album state={state} />} />
            </Route>
            <Route path="*" element={<NotFound state={state} />} />
          </Routes>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
