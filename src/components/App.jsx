import './App.scss';

import Header from './header';

import userPhoto from '../assets/images/photo-cover.svg';

function App() {
  return (
    <div className='App'>

      <Header />

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

          <article className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user photo" />
            </div>
            <div className='user-card__name'>
              <span title="Salvador StewartSalvador StewartSalvador StewartSalvador" >Salvador StewartSalvador StewartSalvador StewartSalvador </span>
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
          </article>
          <article className='user-card'>
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
          </article>
          <article className='user-card'>
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
          </article>
          <article className='user-card'>
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
          </article>
          <article className='user-card'>
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
          </article>
          <article className='user-card'>
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
          </article>

        </div>
        <button className='button button_show-more'>Show more</button>

      </section>

      <section className='post-method _container'>
        <span className='heading'>Working with POST request</span>

        <div className='post-method__form'>
          <form className='form'>

            <input className='form__input-info' name='name' placeholder='Your name' />
            <input className='form__input-info' name='email' placeholder='Email' />
            <input className='form__input-info' name='phone' placeholder='Phone' />

            <div className='form__checkbox-container'>
              <p>Select your position</p>

              <div>
                <input type="checkbox" id="frontend" name="frontend" defaultChecked />
                <label htmlFor="frontend">Frontend developer</label>
              </div>

              <div>
                <input type="checkbox" id="backend" name="backend" />
                <label htmlFor="backend">Backend developer</label>
              </div>

              <div>
                <input type="checkbox" id="designer" name="designer" />
                <label htmlFor="designer">Designer</label>
              </div>

              <div>
                <input type="checkbox" id="qa" name="qa" />
                <label htmlFor="designer">QA</label>
              </div>
            </div>

            <div className='form__upload'>
              <button className=''>Upload</button>
              <input className='' name='upload' placeholder='Upload ypur photo' />
            </div>

            <button className='form__btn-singUp button button_disabled'>Sing up</button>

          </form>
        </div>

      </section>

    </div>
  );
}

export default App; 