import './App.scss';
import logo from '../assets/images/icons/Logo.svg';

function App() {
  return (
    <div className='App'>

      <header className='header _container'>
        <div className='header__container'>

          <div className='logo'>
            <div className='logo__img'>
              <img src={logo} alt='logo' />
            </div>
          </div>

          <div className='header__btns-container'>
            <button className='button'>Users</button>
            <button className='button'>Sing up</button>
          </div>

        </div>
      </header>

      <section className='main-img _container'>

        <div className='main-img__content'>
          <span className='main-img__title heading'>Test assignment for front-end developer</span>
          <span className='main-img__text'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</span>

          <button className='button'>Sing up</button>
        </div>

      </section>

    </div>
  );
}

export default App;