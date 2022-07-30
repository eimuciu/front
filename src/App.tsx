import css from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Answers from './components/pages/Answers/Answers';
import MessageModal from './components/molecules/MessageModal/MessageModal';
import { useMsgCtx } from './store/MessagingProvider';

function App() {
  const { message, showMessage, messageType } = useMsgCtx();

  const handleDeleteQuestion = () => {
    console.log('Question will be deleted');
  };

  return (
    <>
      <MessageModal message={message} type={messageType} show={showMessage} />
      <NavBar />
      <div className={css.main}>
        <Routes>
          <Route
            path="/"
            element={<Home handleDeleteQuestion={handleDeleteQuestion} />}
          />
          <Route
            path="/answers/:id"
            element={<Answers handleDeleteQuestion={handleDeleteQuestion} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
