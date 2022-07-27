import css from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Login from './components/pages/Login/Login';
import Answers from './components/pages/Answers/Answers';

function App() {
  return (
    <>
      <NavBar />
      <div className={css.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/answers/:id" element={<Answers />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
