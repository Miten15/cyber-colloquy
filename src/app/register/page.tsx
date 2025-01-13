"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        event: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        department: "",
         event: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };


     const validateForm = () => {
      let errors: any = {};
        let isValid = true;

        if (!formData.name) {
            errors.name = "Name is required";
             isValid = false;
        }
          if (!formData.email) {
            errors.email = "Email is required";
              isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Please provide a valid email address";
             isValid = false;
        }
           if (!formData.department) {
            errors.department = "Department is required";
               isValid = false;
          }
             if (!formData.event) {
            errors.event = "Event is required";
                 isValid = false;
        }
       setFormErrors(errors);
          return isValid;
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!validateForm()) return;
          setLoading(true);
        try {
            // Simulate API Call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setMessage("Registration Successful!");
            setFormData({
                name: "",
                email: "",
                department: "",
                event: "",
            });
            setFormErrors({
                name: "",
                email: "",
                department: "",
                event: "",
           });
          } catch (error) {
             setMessage("Registration Failed!");
        } finally{
             setLoading(false);
        }

    };


    return (
        <Container>
            <SectionTitle preTitle="Register Now" title="Join Our Cyber Events">
                Register for upcoming cyber events at our college.
            </SectionTitle>
            <div className="max-w-2xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
               {message && <p className={`text-center mb-4 ${message === "Registration successful!" ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row flex-wrap md:items-start">
                     <div className="md:w-1/2 md:pr-4 w-full">
                        <div className="mb-4">
                            <label htmlFor="event" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                Event <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="event"
                                value={formData.event}
                                onChange={handleChange}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${formErrors.event ? 'border-red-500' : ''}`}
                            >
                                <option value="">Select an Event</option>
                                <option value="Cybersecurity Colloquy 2021">Cybersecurity Colloquy 2021</option>
                                <option value="Cybersecurity Colloquy 2022">Cybersecurity Colloquy 2022</option>
                                <option value="Cybersecurity Colloquy 2023">Cybersecurity Colloquy 2023</option>
                                <option value="Cybersecurity Colloquy 2024">Cybersecurity Colloquy 2024</option>
                                <option value="Cyber Colloquy 4.0">Cyber Colloquy 4.0</option>
                            </select>
                                {formErrors.event && <p className="text-red-500 text-sm mt-1">{formErrors.event}</p>}
                        </div>
                        {formData.event && <>
                         <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${formErrors.name ? 'border-red-500' : ''}`}
                                placeholder="Your Name"
                           />
                              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                Email <span className="text-red-500">*</span>
                           </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${formErrors.email ? 'border-red-500' : ''}`}
                                placeholder="Your Email"
                            />
                              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                        </div>
                        </>
                        }
                    </div>
                    {formData.event &&
                      <div className="md:w-1/2 md:pl-4 w-full">
                            <div className="mb-4">
                            <label htmlFor="department" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                Department/Affiliation <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="department"
                                value={formData.department}
                                onChange={handleChange}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${formErrors.department ? 'border-red-500' : ''}`}
                                placeholder="Your Department"
                            />
                             {formErrors.department && <p className="text-red-500 text-sm mt-1">{formErrors.department}</p>}
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                {loading ? "Registering..." : "Register"}
                            </button>
                        </div>
                   </div>
                   }
                </form>
            </div>
        </Container>
    );
};


export default RegisterPage;