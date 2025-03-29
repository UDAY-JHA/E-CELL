import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="relative">
      
      <button
        className="md:hidden fixed top-5 right-5 z-50 text-white text-3xl"
        onClick={() => {
            setIsOpen(true)

            
        }}
      >
        <i className="fas fa-bars {}"></i>
      </button>

    
      <div
        className={`fixed top-0 right-0 w-full h-full bg-blue-600 text-white transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
       
        <button
          className="absolute top-15 left-5 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>


        <h2 className="text-[24px] font-bold p-5">smartHome</h2>

        <nav className="flex flex-col space-y-4 p-5">
          <a href="#" className="bg-white font-medium text-[24px] text-black px-4 py-2 rounded-md">
            Home
          </a>
          <a href="#" className="font-medium text-[24px]">About</a>
          <a href="#" className="font-medium text-[24px]">Testimonials</a>
          <a href="#" className="font-medium text-[24px]">Contact</a>
          <a href="#" className="font-medium text-[24px]">Login</a>
          <a href="#" className="font-medium text-[24px]">Sign up</a>
        </nav>

     
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-6 text-xl">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
