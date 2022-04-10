import './App.scss';
import logo from '../assets/images/icons/logo.svg';

function App() {
  return (
    <div className='App'>

      <header className='header _container'>
        <div className='header__container'>

          <div className='logo'>
            <div className='logo__img'>
              <img src={logo} alt='logo' />
            </div>
            <div className='logo__label'>
              <span>TESTTASK</span>
            </div>
          </div>

          <div className='header__btns-container'>
            <button className='button'>Users</button>
            <button className='button'>Sing up</button>
          </div>

        </div>
      </header>

    </div>
  );
}

export default App;