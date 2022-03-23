import React, { useRef, useState } from "react";
import { send } from "emailjs-com";

const ContactForm = () => {
  const success=useRef(null);
  const error=useRef(null);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // VAlidation Form
    const validate=()=>{
      if(!contact.name) 
        return false
      if(!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(contact.email)))
        return false
      if(!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(contact.number)))
        return false
      if(!contact.subject)
        return false
      if(!contact.message)
        return false
      return true
    }
    
    if (validate()){
      
    // // EmailJS:  Send Function()
    // send("h-coder-service", "h-coder-template", contact,"sdUERAEqUsKywHcoT")
    //   .then(() => {
    //     console.log("SUCCESS!");
    //   })
    //   .catch(() => {
    //     console.log("FAILED...");
    //   });

    success.current.classList.add("show")
    }
    else
    error.current.classList.add("show")
  };
  return (
    <>
    <div className="container">
      <div className="section-contact">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="header-section text-center">
              <h2 className="title">
                Get In Touch
                <span className="dot"></span>
                <span className="big-title">CONTACT</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="form-contact">
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fa fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="ENTER YOUR NAME"
                    value={contact.name}
                    onChange={(e) =>
                      setContact({
                        ...contact,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fa fa-envelope"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="ENTER YOUR EMAIL"
                    value={contact.email}
                    onChange={(e) =>
                      setContact({
                        ...contact,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fa fa-phone"></i>
                  <input
                    type="text"
                    name="number"
                    placeholder="ENTER YOUR PHONE NUMBER"
                    value={contact.number}
                    onChange={(e) =>
                      setContact({
                        ...contact,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fa fa-check"></i>
                  <input
                    type="text"
                    name="subject"
                    placeholder="ENTER YOUR SUBJECT"
                    value={contact.subject}
                    onChange={(e) =>
                      setContact({
                        ...contact,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="single-input">
                  <i className="fa fa-comment-dots"></i>
                  <textarea
                    name="message"
                    placeholder="ENTER YOUR MESSAGE"
                    value={contact.message}
                    onChange={(e) =>
                      setContact({
                        ...contact,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="submit-input text-center">
                  <input type="submit" name="submit" value="SUBMIT NOW" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
	
</div>
<div className="submit-modal" ref={success}>
		<div className="modalbox success col-sm-8 col-md-6 col-lg-5 center animate" >
			<div className="icon">
				<span className="glyphicon glyphicon-ok">✔️</span>
			</div>
			<h1>Success! H-Coder</h1>
			<p>We've sent a confirmation to your e-mail <br /> for verification.</p>
			<button type="button" className="redo btn" onClick={()=>success.current.classList.remove("show")}>Ok</button>
		</div>
	</div>
	<div className="submit-modal" ref={error}>
		<div className="modalbox error col-sm-8 col-md-6 col-lg-5 center animate" >
			<div className="icon">
				<span className="glyphicon glyphicon-thumbs-down">✖️</span>
			</div>
			<h1>Oh no! H-Coder</h1>
			<p>Oops! Something went wrong,
				<br /> you should try again.</p>
			<button type="button" className="redo btn" onClick={()=>error.current.classList.remove("show")}>Try again</button>
		</div>
	</div></>
  );
};

export default ContactForm;
