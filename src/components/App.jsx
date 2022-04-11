import './App.scss';

import Header from './header';
import MainImg from './mainImg';
import GetMethod from './getMethod/GetMethod';

function App() {
  return (
    <div className='App'>

      <Header />

      <MainImg />

      <GetMethod />

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