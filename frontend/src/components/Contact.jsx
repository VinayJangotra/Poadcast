import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessages = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://poadcast-1.onrender.com/api/v1/message/send",
          {
            name,
            email,
            subject,
            message,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
        });
      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message");
      console.log(error);
    }
  };
  return (
    <div className="container contact">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>King Event and Wedding</p>
        </div>
        <div className="item">
          <h4>Phone</h4>
          <p>1234567890</p>
        </div>
        <div className="item">
          <h4>Email</h4>
          <p>none@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8398701823!2d77.0688975!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dff4e0b7b7b%3A0x2b0b1b1b1b1b1b1b!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2s!4v1709099958323!5m2!1sen!2s"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="item">
          <form onSubmit={handleSendMessages}>
            <div>
              <input
                type="text"
                placeholder="Your Name "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows={10}
              placeholder="Messages "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
