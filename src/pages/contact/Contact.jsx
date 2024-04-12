import './contact.css';

const Contact = () => {
  return (
    <div className='contact container'>
      <div className="contact-left">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3521362674483!2d31.499302325344523!3d30.595829392237835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sar!2seg!4v1712884720063!5m2!1sar!2seg"></iframe>
      </div>
      <div className="contact-right">
        <input type="text" placeholder='Your Name' />
        <input type="text" placeholder='Your Email' />
        <input type="text" placeholder='Your Phone' />
        <textarea placeholder='Your Message'></textarea>
      </div>
    </div>
  )
}

export default Contact
