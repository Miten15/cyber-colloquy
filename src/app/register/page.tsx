// src/app/register/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useState } from "react";

interface InputProps {
    label: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
    error?: string;
}
const Input: React.FC<InputProps> = ({label, type, value, onChange, placeholder, required, error }) => {
  return(
    <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          {label} {required ? <span className="text-red-500">*</span> : null}
            </label>
            <input
              type={type}
              value={value}
              onChange={onChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
              placeholder={placeholder}
                required={required}
            />
             {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
interface SelectProps {
  label: string;
  value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  error?: string;
}
const Select: React.FC<SelectProps> = ({label, value, onChange, options, required, error }) => {
    return(
        <div className="mb-4">
            <label htmlFor="event" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              {label} {required ? <span className="text-red-500">*</span> : null}
             </label>
            <select
             value={value}
              onChange={onChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
            >
              <option value="">Select an Event</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                     {option}
                 </option>
                 ))}
            </select>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
    )
}

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
    const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");
 const [loading, setLoading] = useState(false);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
     const [departmentError, setDepartmentError] = useState("");
    const [eventError, setEventError] = useState("");


    const validateForm = () => {
      let isValid = true;
     if (!name) {
            setNameError("Name is required");
            isValid = false;
       } else {
            setNameError("");
      }
      if (!email) {
            setEmailError("Email is required");
             isValid = false;
       } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Please provide a valid email address");
             isValid = false;
        }
      else {
            setEmailError("");
      }
       if (!department) {
            setDepartmentError("Department is required");
             isValid = false;
       } else {
            setDepartmentError("");
       }
        return isValid;
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!validateForm()) return;
          setLoading(true);
        try {
         // Simulate API call (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1000));
             setMessage("Registration successful!");
             setName("");
             setEmail("");
             setDepartment("");
            setEvent("");
        } catch (error) {
            console.error('Registration failed', error);
              setMessage("Registration failed!");
        } finally {
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
                 <Select 
                    label="Event"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                     options={[
                      "Cybersecurity Colloquy 2021",
                      "Cybersecurity Colloquy 2022",
                      "Cybersecurity Colloquy 2023",
                      "Cybersecurity Colloquy 2024",
                      "Cyber Colloquy 4.0",
                    ]}
                     required={true}
                   error={eventError}
                 />
                {event &&
                <>
                    <Input 
                        label="Name"
                        type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         placeholder="Your Name"
                          required={true}
                        error={nameError}
                      />
                    <Input 
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                       placeholder="Your Email"
                      required={true}
                   error={emailError}
                     />
               </>
              }
            </div>
            {event &&
            <div className="md:w-1/2 md:pl-4 w-full">
                <Input 
                    label="Department/Affiliation"
                    type="text"
                     value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                   placeholder="Your Department"
                      required={true}
                     error={departmentError}
               />
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
}