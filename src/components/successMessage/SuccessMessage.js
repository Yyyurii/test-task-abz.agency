import img from '../../assets/images/success-image.svg';

import './successMessage.scss';

const SuccessMessage = () => {
  return (
    <section className='successMessage _container' >
      <span className='heading'>User successfully registered</span>
      <img style={{ display: 'block', width: "328px", height: "290px", objectFit: 'contain', margin: "0 auto" }} src={img} alt="success" />
    </section>

  )
}

export default SuccessMessage;