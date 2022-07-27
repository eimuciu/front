import css from './App.module.scss';

function App() {
  // useEffect(() => {
  //   addStyle(colorsString);
  // }, []);
  return (
    <div className={css.hello}>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
