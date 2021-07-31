import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: ""
  });

  let errors = "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    if (value) {
      setFormData({
        ...formData,
        [e.target.name]: value
      });
    } else {
      errors = "Username cannot be empty ";
    }
  };

  return (
    <form>
      <input
        onBlur={handleBlur}
        type="text"
        placeholder="User Name"
        name="username"
        onChange={handleChange}
      />
      <span>{errors}</span>
      {/* <input ref="email" type="email" placeholder="Email" />
      <input ref="phone" type="text" placeholder="Phone Number" />
      <input ref="password" type="password" placeholder="Password" />
      <input ref="conf-password" type="password" placeholder="Confirm Password" /> */}
      <button type="submit">Submit</button>
      <button type="button">Reset</button>
    </form>
  );
}
