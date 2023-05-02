import React from "react";
import { useState } from "react";
const Inputs = () => {
  // const [name, setName] = useState("Hohn doe");
  // const [age, setAge] = useState("28");
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    company: "",
    phoneNumber: "",
  });

  const [myOption, setMyOption] = useState("");

  const [check, setChecked] = useState(false);
  const handleForm = (e) => {
    let value = e.target.value;

    setFormValue({
      ...formValue,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Sbmitted", formValue);
  };

  return (
    <form>
      <div>
        Name :
        <input
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleForm}
        />
      </div>
      <div>
        Age:
        <input
          type="text"
          name="age"
          value={formValue.age}
          onChange={handleForm}
        />
      </div>
      <div>
        company:
        <input
          type="text"
          name="company"
          value={formValue.company}
          onChange={handleForm}
        />
      </div>
      <div>
        Phone Number
        <input
          type="text"
          name="phoneNumber"
          value={formValue.phoneNumber}
          onChange={handleForm}
        />
      </div>
      <div>
        <select
          name=""
          id=""
          value={myOption}
          onChange={(e) => setMyOption(e.target.value)}
        >
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
      </div>
      <div>
        <input
          type="checkbox"
          value={check}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
      <button type="submit" onSubmit={handleSubmit}>
        Submit form
      </button>
    </form>
  );
};

export default Inputs;
