import React from 'react';
import Sections from "./Section";
import imageUrl from "../assets1/Form/congratulations-7600.gif";
import { useState ,useEffect} from 'react';
import {
  Gradient,
} from "./design/Services";
import Button from './Button';
 
function Contact() {
  const [result, setResult] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (showImage) {
      const timer = setTimeout(() => {
        setShowImage(false);
      }, 5000); // 5000ms = 5s

      // Clean up function
      return () => clearTimeout(timer);
    }
  }, [showImage]);
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsError(false);
    const formData = new FormData(event.target);

    formData.append("access_key", "1fb0284e-f5cf-4fb0-913e-b3546dd966a0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank You so Much, We Will Connect back You soon");
        setShowImage(true);
        event.target.reset();
      } else {
        setResult(`Something Went Wrong: ${data.message}`);
        setIsError(true);
      }
    } catch (error) {
      setResult(`An error occurred: ${error.message}`);
      setIsError(true);
    }
  };

  return (
    <Sections id="contact">
      
      <section className="body-font relative bg-gray-900/20 text-gray-400 w-[65%] rounded-[25px] mx-auto border border-gray-700 shadow-purple-900">

<div className="container mx-auto px-5 py-24">
  {showImage && <img src={imageUrl} alt="Congratulations" className='top-0 absolute left-1/2 transform -translate-x-1/2'/>} 
  <div className="mb-12 flex w-full flex-col text-center">
    <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl h1">Request a Demo</h1>
    <p className="mx-auto text-base leading-relaxed lg:w-2/3">Experience how our AI automation platform can transform your business with high-accuracy agents and user-friendly solutions.</p>
  </div>

  <form onSubmit={onSubmit}>
  <div className="mx-auto md:w-2/3 lg:w-1/">
    <div className="-m-2 flex flex-wrap">

      
      <div className="w-1/2 p-1">
        <div className="relative">
          <input type="text" id="name" name="name" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" required/>
          <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
        </div>
      </div>
      <div className="w-1/2 p-1">
        <div className="relative">
          <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" required/>
          <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
        </div>
      </div>
      <div className="mt-4 w-full p-2">
        <div className="relative">
          <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message" required></textarea>
          <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
        </div>
      </div>
      <div className="w-full p-2">
        <button type='submit' className="mx-auto flex rounded focus:outline-none"><Button white>Send</Button></button>
      </div>

    </div>
  </div>
  </form>

  
</div>
<div className={`text-center ${isError ? 'text-red-500' : 'text-green-500'}`}>
  <h3>{result}</h3>
</div>

</section>

<Gradient />
    </Sections>
  );
}
export default Contact;