import { useState, useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiArrowBack } from "react-icons/bi";
import Toast from "./Toast";

const Mail = ({ setVisible }) => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, message: "", type: "success" });

    useEffect(() => {
        emailjs.init('9Vk0P0ifs9-GHU4j2');
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setToast({ show: true, message: "Please fill in all fields!", type: "error" });
            setTimeout(() => {
                setToast({ show: false, message: "", type: "error" });
            }, 3000);
            return;
        }

        setLoading(true);
        emailjs.send(
            'service_lfwdadq',
            'template_cqaz2nh',
            {
                from_name: form.name,
                to_name: 'Subhalaxmi',
                from_email: form.email,
                to_email: "pradhan.subhalaxmi9178@gmail.com",
                message: form.message
            },
            '9Vk0P0ifs9-GHU4j2'
        ).then(() => {
            setLoading(false);
            setToast({ show: true, message: "Send successfully!", type: "success" });
            setForm({
                name: "",
                email: "",
                message: ""
            });
            setTimeout(() => {
                setToast({ show: false, message: "", type: "success" });
            }, 3000);
        }, (error) => {
            setLoading(false);
            console.error('EmailJS Error:', error);
            let errorMessage = "Something went wrong!";
            
            const errorText = error?.text || error?.message || '';
            
            if (error.status === 412) {
                if (errorText.includes('Gmail_API') || errorText.includes('Invalid grant')) {
                    errorMessage = "Gmail connection expired. Go to EmailJS dashboard → Email Services → Reconnect Gmail account.";
                } else {
                    errorMessage = "EmailJS configuration error. Please check your service settings.";
                }
            } else if (error.status === 400) {
                errorMessage = "Invalid email format or missing required fields.";
            } else if (error.status === 403) {
                errorMessage = "EmailJS service access denied. Please check your API key.";
            } else if (errorText) {
                errorMessage = errorText;
            }
            
            setToast({ show: true, message: errorMessage, type: "error" });
            setTimeout(() => {
                setToast({ show: false, message: "", type: "error" });
            }, 6000);
        })

    }
    return (
        <>
            <Toast
                show={toast.show}
                message={toast.message}
                type={toast.type}
                onClose={() => setToast({ show: false, message: "", type: toast.type })}
            />
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='relative mt-12 flex flex-col gap-8'
            >
            <div className='absolute -top-10 right-0 flex justify-end pointer-events-none'>
                <div
                    className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto z-10' title="Back"
                    onClick={() => setVisible(prev => !prev)}>
                    <BiArrowBack className='w-2/3 h-2/3 object-contain text-white' />
                </div>
            </div>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                    type='text'
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlned-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Email</span>
                <input
                    type='email'
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlned-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea
                    rows={3}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlned-none border-none font-medium'
                />
            </label>
            <button type='submit' className='bg-[#151030] py-3 px-4 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading ? 'Sending...' : "Send"}</button>
        </form>
        </>
    )
}

export default Mail
