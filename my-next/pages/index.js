import { useState } from "react";

export default function Home() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>NextJS + Sendgrid</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3>Contact Form</h3>

          <div className="container">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="container">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="container">
            <textarea name="message" value={message} onChange={handleChange} />
          </div>
          <div className="container">
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
