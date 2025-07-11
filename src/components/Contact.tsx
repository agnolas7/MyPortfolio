import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>📬 Contact Me</h1>
          <p>
            Thanks for checking out my work!
            <br />
            If you’d like to work together or just want to connect, feel free to
            reach out:
          </p>
          <div className="contact-details">
            <p>
              <EmailIcon
                style={{ verticalAlign: "middle", color: "#5000ca" }}
              />{" "}
              <strong>Email:</strong>{" "}
              <a href="mailto:nomi.salonga.au@phinmaed.com">
                nomi.salonga.au@phinmaed.com
              </a>
            </p>
            <p>
              <PhoneIcon
                style={{ verticalAlign: "middle", color: "#5000ca" }}
              />{" "}
              <strong>Phone:</strong>{" "}
              <a href="tel:+639758096788">+63 975 809 6788</a>
            </p>
            <p>
              <FacebookIcon
                style={{ verticalAlign: "middle", color: "#1877f3" }}
              />{" "}
              <a
                href="https://www.facebook.com/sev7v"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              {"  "}
              <InstagramIcon
                style={{
                  verticalAlign: "middle",
                  color: "#e1306c",
                  marginLeft: 16,
                }}
              />{" "}
              <a
                href="https://www.instagram.com/rottenac.c/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
          <p>I'm just a message away.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
