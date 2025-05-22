import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { MdAddCall, MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div id='contacts' className="py-8 md:px-24">
            <div className=" flex items-center justify-center">
                <h1 className=" text-center border-b-2 border-blue-600 p-2 text-4xl font-bold">Contact Us</h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:mt-8">
                <div className=" p-4 mt-6 space-y-6 lg:w-1/2 text-center lg:text-start">
                    <div>
                        <h3 className="text-black font-semibold text-2xl">Contact Us for Translation Support</h3>
                        <p >Have a question about our translation services, supported languages, or API integration? We’re here to help — reach out anytime.</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start justify-center space-y-4 lg:justify-start">
                        <p className="flex items-center gap-2 md:text-xl"><FaLocationDot /> <span>Senbag, Noakhali, Bangladesh</span></p>
                        <a href="mailto:mohammadabunaim93@gmail.com" className="flex items-center gap-2 md:text-xl"><MdEmail /> <span className="underline">mohammadabunaim93@gmail.com</span> </a>
                        <a href="https://wa.me/+8801882585833" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:text-xl font-sans"><MdAddCall /> <span className="underline">+8801882585833</span> </a>
                    </div>

                    <h3 className="text-xl font-medium">Follow Me</h3>
                    <div className="flex gap-4 items-center lg:justify-start justify-center">
                        <a href="https://www.linkedin.com/in/md-abu-naim" target="_blank" className="font-bold bg-blue-500 hover:bg-blue-900 transition duration-300 text-white p-3 rounded-lg"><FaLinkedin className="text-2xl" /></a >
                        <a href="https://github.com/md-abu-naim" target="_blank" className="font-bold bg-blue-500 hover:bg-blue-900 transition duration-300 text-white p-3 rounded-lg"><FaGithub className="text-2xl" /></a >
                        <a href="https://www.facebook.com/farhanadnan.farabi.5" target="_blank" className="font-bold bg-blue-500 hover:bg-blue-900 transition duration-300 text-white p-3 rounded-lg"><FaFacebook className="text-2xl" /></a >
                    </div>
                </div>
                <div className="p-5 lg:border-l-2 border-blue-600 text-center lg:text-start">
                    <h3 className="text-black font-medium text-2xl">Let’s work together!</h3>
                    <p>Fill out the form below and our team will get back to you shortly. We’re here to help with anything related to NeoTranslator — 24/7.</p>
                    <form className="mt-4">
                        <div className=" ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Your Name*</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="to_name" placeholder="Type your name" className=" text-black input input-bordered focus:border-none outline-none focus:outline-none bg-gray-300 w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Email*</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="from_name" placeholder="Your email" className="input text-black focus:border-none outline-none focus:outline-none input-bordered font-sans bg-gray-300 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Description*</span>
                                </label>
                                <label className="input-group">
                                    <textarea name="message" placeholder="Description" rows="5" className="p-2 rounded-md bg-gray-300 focus:border-none outline-none focus:outline-none text-black w-full"></textarea>
                                </label>
                            </div>
                        </div>

                        <button className="font-bold w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-900 transition duration-300 text-white p-3 mt-3 rounded-lg">Sent <IoMdSend /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;