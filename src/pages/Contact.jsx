import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [test, setTest] = useState('');
  const [test2, setTest2] = useState('');

  useEffect(() => emailjs.init("DlqET7uJ1nDYGkLqd"), []);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const serviceId = "service_kq1bne6";
    const templateId = "template_vhzuidk";
    try {
      await emailjs.send(serviceId, templateId, {
        to_name: 'Ryan Evans',
        from_name: {test},
        message: {test2}
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="contact">
      <div className="contact-div"> 
      <div className="title-div">
      <section className="contact-title">
        Contact Me
      </section>
      </div>
      <form onSubmit={((e) => handleSubmit(e))} className="contact-form">
        <input type="text"
          value={test}
          onChange={(e) => setTest(e.target.value)}
          placeholder="Name"
        />
        <textarea type="text"
          value={test2}
          onChange={(e) => setTest2(e.target.value)}
          rows="12" 
          placeholder="Subject Message (Include contact information here)"
        
        />
        <div className="test5">
          <button type="submit" className="contact-button">Send</button>
        </div>
      </form>
      <section className="contact-alter">
        Alternatively you can email <b><u>ryanevansdev02@gmail.com</u></b>
      </section>
      </div>

    </div>
  )
}

export default Contact