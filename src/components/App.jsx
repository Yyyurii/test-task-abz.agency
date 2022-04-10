import './App.scss';
import logo from '../assets/images/icons/Logo.svg';
import userPhoto from '../assets/images/photo-cover.svg';

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

      <section className='get-method _container'>

        <span className='heading'>Working with GET request</span>

        <div className='get-method__content'>

          <div className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user photo" />
            </div>
            <div className='user-card__name'>
              <span>Salvador StewartSalvador StewartSalvador StewartSalvador </span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </div>
          <div className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user photo" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </div>
          <div className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user photo" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </div>
          <div className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user photo" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </div>
          <div className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user photo" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </div>
          <div className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user photo" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </div>

        </div>
        <button className='button button_show-more'>Show more</button>
      </section>

    </div>
  );
}

export default App;