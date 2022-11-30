import axios from "axios";
import React, { useState } from "react";
import Navigation from "../components/Navigation";

const CreateUser = () => {
  // hooks
  const [inputs, setInputs] = useState({});

  // functions
  const handleChange = (e) => {
    const title = e.target.name;
    const content = e.target.value;
    setInputs((values) => ({ ...values, [title]: content }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:/api/", inputs);
    // handle cors errors and check Network response
  };
  return (
    <div>
      <Navigation />
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label htmlFor="name">Name</label>
              </th>
              <td>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label htmlFor="email">E-mail</label>
              </th>
              <td>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="mobile">Mobile</label>
              </th>
              <td>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button>Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CreateUser;
