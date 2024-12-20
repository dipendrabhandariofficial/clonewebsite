import React, { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    
    <div className="h-full w-screen flex flex-col items-center justify-center  text-center">
    {/* Header Section */}
    <div className="w-[50%] mb-8">
      <h1 className="text-[62px] font-serif tracking-wide lowercase text-[#2c2c2c]">
        lets's connect
      </h1>
      <p className="text-sm mt-2">
        Feel free to reach out if you're interested in working together, being
        friends, or discussing the best matka chai spots! You can also email me
        at{" "}
        <a
          href="mailto:dipendrabhandari0000@gmail.com"
          className="text-blue-500 hover:underline"
        >
          dipendrabhandari0000@gmail.com
        </a>
        . All fields are required!
      </p>
    </div>

    {/* Contact Form */}
    <form
      className="contact w-[50%] space-y-8"
      onSubmit={handleSubmit}
    >
      {/* First Name and Last Name */}
      <div className="flex space-x-4">
         <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className=" border border-black  w-1/2 p-2 "
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          className="border border-black w-1/2 p-2 "
          required
        />
      </div>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border border-black w-full p-2 "
        required
      />

      {/* Subject */}
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="border border-black w-full p-2 "
        required
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="border border-black w-full p-2  h-32 resize-none"
        required
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-slate-200 text-white py-2 px-4 rounded-md hover:bg-[#8A3D03] transition uppercase text-[12px] font-[100] font-sans"
      >
        send
      </button>
    </form>
  </div>
  )
}

export default Contacts