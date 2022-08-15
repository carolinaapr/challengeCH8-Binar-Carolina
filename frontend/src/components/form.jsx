import React from "react";

const Form = ({ formData, setFormData, data, setData, setFilteredData }) => {
    const { username, email, level, experience } = formData;
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (
        username.length === 0 ||
        email.length === 0 ||
        level.length === 0 ||
        experience.length === 0
      ) {
        window.alert('Please fill every input');
        return;
      } else {
        setData([...data, formData]);
        setFilteredData([...data, formData]);
        setFormData({
          username: '',
          email: '',
          level: '',
          experience: '',
        });
      }
    };
  
    const handleOnchange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
    };
  
    return (
      <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
        <input
          className="px-3 py-1 rounded-lg shadow"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleOnchange}
        />
        <input
          className="px-3 py-1 rounded-lg shadow"
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleOnchange}
        />
        <input
          className="px-3 py-1 rounded-lg shadow"
          id="experience"
          type="number"
          placeholder="Experience"
          value={experience}
          onChange={handleOnchange}
        />
        <input
          className="px-3 py-1 rounded-lg shadow"
          id="level"
          type="number"
          placeholder="Level"
          value={level}
          onChange={handleOnchange}
        />
  
        <button className="bg-green-600 hover:bg-green-800 rounded-xl py-2 px-4 w-[20%] self-center shadow-lg font-semibold text-white transition-all">
          Submit
        </button>
      </form>
    );
  };
  
  export default Form;