import { useState } from 'react'
import images from "./assets/images";
import Accordion from './components/accordian';
import Menu from "./components/menu";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='w-screen h-auto lg:h-[590px]  flex-col mt-[0px] relative pb-[450px]'>
        <div className='bg-[#1E5AFA] pb-[150px] lg:pt-[30px] lg:px-[80px] lg:pb-[250px]'>
          <nav className='hidden lg:flex flex-row justify-between'>
            <ul className=' lg:mt-[20px]'>
              <li className='float-left lg:mx-[20px] lg:text-[18px] lg:font-normal lg:text-[#FAFAFA]'>Home</li>
              <li className='float-left lg:mx-[20px] lg:text-[18px] lg:font-normal lg:text-[#FAFAFA]'>About</li>
              <li className='float-left lg:mx-[20px] lg:text-[18px] lg:font-normal lg:text-[#FAFAFA]'>Testimonials</li>
              <li className='float-left lg:mx-[20px] lg:text-[18px] lg:font-normal lg:text-[#FAFAFA]'>Contact</li>
            </ul>
            
            <div className=''>
                <button className=' lg:mx-[20px] lg:text-[18px] lg:font-normal lg:text-[#FAFAFA]'>Login</button>
                <button className=' lg:mx-[20px] lg:text-[18px] lg:font-normal lg:text-[#000] lg:w-auto lg:p-2 lg:bg-white rounded-lg '>Sign up</button>
            </div> 
          </nav>
          <div className='w-15/16 lg:screen lg:mx-[50px] flex flex-row justify-between  mx-auto items-center lg:absolute lg:top-[40px] lg:left-[0] lg:flex lg:justify-center'>
              <h1 className='text-[32px] text-white font-bold lg:text-[32px]'>smartHome</h1>
            </div>
            <Menu />
          <img src={images.ellipse1} className=' absolute top-0 right-0'/>
          
          <h1 className='text-[64px] font-extrabold text-white text-center px-[10px] leading-15 mt-[20px] lg:w-[400px]  lg:mx-auto lg:mt-[80px]'>smart Home Application</h1>
          <p className='text-[20px] font-normal text-center text-[#FAFAFA] mt-[50px] px-[45px] lg:w-[800px] lg:mx-auto lg:mt-[70px] '>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
        </div>
        <img src={images.hero2} className='h-[280px] relative top-[-120px] lg:w-[1084px] lg:h-[600px] lg:mx-auto lg:relative lg:top-[-250px]' />
        <img src={images.arrow} className='absolute top-[660px] right-[5px] ml-auto mr-[20px]'/>
      </header>
      <div className=' lg:w-[screen] lg:flex lg:flex-col lg:items-center'>
        <img src={images.curl} className='z-4  absolute top-[610px] right-[-10px] lg:w-[200px]' />
        <img src={images.playstore} className='absolute top-[715px] mx-auto  '/>
      </div>
        
      <main>
        <section className=' flex flex-col justify-center px-6'>
          <h2 className='text-[64px] font-bold text-[#313131] text-center'>About us</h2>
          <img src={images.mob1} className='h-min-[380px] lg:w-[800px] lg:h-[800px]'/>
          <h2 className='text-[48px] font-semibold text-[#000F37] mb-20px] leading-12 mb-[20px]'>lgart Home's lgart Services</h2>
          <p className='text-[20px] font-normal text-[#575757]'>Ye am depending propriety sweetness distrusts belonging collected. lgiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
          <button className='w-[179px] h-[56.15px] bg-[#000F37] text-[18px] font-medium center text-[#FAFAFA] rounded-lg mt-5'>Learn More</button>

          <img src={images.mob2} className='h-min-[377px]'/>
          <h2 className='text-[48px] font-semibold text-[#000F37] leading-[50px] mb-[20px]'>What app can do to your Appliences?</h2>
          
          <p className='text-[20px] font-normal text-[#575757]'>Ye am depending propriety sweetness distrusts belonging collected. lgiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
          <button className='w-[179px] h-[56.15px] bg-[#FAFAFA] text-[18px] font-medium center border-[1px] rounded-[5px] border-[#000F37]  mt-5 text-[#000F37]'>Learn More</button>
          <img src={images.mob3} className=''/>
          <h2 className='text-[48px] font-semibold text-[#000F37] leading-[60px] mb-[20px]'>Control Electric Appliences</h2>
          <p className='text-[20px] font-normal text-[#575757]'>Ye am depending propriety sweetness distrusts belonging collected. lgiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
          <button className='w-[179px] h-[56.15px] bg-[#FAFAFA] text-[18px] font-medium center border-[1px] rounded-[5px] border-[#000F37]  mt-5 text-[#000F37]'>Learn More</button>
        </section>

        <section className='px-[13px] mb-[50px]'>
          <h2 className='text-[64px] font-bold text-[#313131] text-center tracking-[-3px]'>Our Clients</h2>

          <p className='text-[18px] font-normal text-[#575757] text-center mb-[20px] lg:w-[800px] lg:mx-auto'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
          
          <div className=' h-auto flex flex-wrap justify-center '>
            <div className='w-[185px] h-[90px] flex justify-center items-center  '>
              <img src={images.octane} className='w-[81px] h-[54px]'/>
            </div>
            <div className='w-[185px] h-[90px] flex justify-center items-center '>
              <img src={images.travel} className='w-[81px] h-[74px]'/>
            </div>
          </div>

          <div className=' h-auto flex flex-wrap justify-center '>
            <div className='w-[185px] h-[90px] flex justify-center items-center '>
              <img src={images.life} className='w-[161px] h-[35px]'/>
            </div>
            <div className='w-[185px] h-[90px] flex justify-center items-center '>
              <img src={images.lgile} className='w-[73px] h-[33px]'/>
            </div>
          </div>

          <div className=' h-auto flex flex-wrap justify-center '>             
            <div className='w-[185px] h-[90px] flex justify-center items-center '>
              <img src={images.tt} className='w-[131px] h-[21px]'/>
            </div>
            <div className='w-[185px] h-[90px] flex justify-center items-center '>
              <img src={images.cybex} className='w-[125px] h-[23px]'/>
            </div>
          </div>
            
          <div className=' h-auto flex flex-wrap justify-center '>  
            <div className='w-[185px] h-[90px] flex justify-center items-center '>
              <img src={images.mockup} className='w-[91px] h-[41px]'/>
            </div>
            <div className='w-[185px] h-[90px] flex justify-center items-center '>
              <img src={images.precor} className='w-[116px] h-[22px]'/>
            </div>
          </div>
        </section>

        <section className='px-[20px] flex flex-col align-middle mb-[20px] lg:px-[100px] lg:w-[4/5] lg:flex lg:flex-wrap lg:flex-col items-center'>
          <h2 className='text-[64px] font-bold text-[#313131] text-center'>Testimonials</h2>
          <p className='text-[18px] font-normal mb-[20px] p-[20px] lg:w-[800px] lg:text-center'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
          <div className='lg:w-[400px] lg:flex lg:flex-wrap lg:gap-5'>
            
            <p className='text-[14px] font-medium text-[#5F7285]  py-[20px] bg-[#3131310D] mb-[20px] p-[20px] lg:w-[180px]'> our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions</p>
            <p className='text-[14px] font-medium text-[#5F7285] py-[20px] bg-[#3131310D] mb-[20px] p-[20px] lg:w-[180px]'>
            We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured
            </p>
            <p className='text-[14px] font-medium text-[#5F7285] py-[20px] bg-[#3131310D] mb-[20px] p-[20px] lg:w-[180px]'>
            It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.
            </p>
            <p className='text-[14px] font-medium text-[#5F7285] py-[20px] bg-[#3131310D] mb-[20px] p-[20px] lg:w-[180px]'>
            At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.
            </p>
          </div>
          
        </section>

        <section className='flex flex-col items-center mb-[150px]'>
          <img src={images.design} className='h-[18px] w-[115px] mb-[50px]'/>
          <h2 className='text-[64px] font-bold  text-[#313131] lg:text-[85px]'>FAQ's</h2>
          <Accordion />
        </section>

        <section className='flex flex-col items-center mb-[70px] px-[20px] lg:flex lg:flex-row lg:px-[100px] lg:ml-[100px] '>
          
          <div className='lg:w-[400px] lg:pl-[30px]'>
            <h2 className='text-[48px] font-bold text-[#313131] lg:font-bold lg:text-[75px] lg:leading-20'>Download App</h2>
            <p className='text-[18px] font-normal text-[#575757] my-[20px]'>
            Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
            </p>
            <img src={images.playstore} className='h-[60px] w-[450px] lg:w-[500px] lg:relative lg:left-[-65px] '/>
          </div>
          <img src={images.mob4} className='relative left-[-30px] lg:float-left lg:w-[600px]'/>
        </section>

        <section className='rounded lg bg-[#1E5AFA] flex flex-col justify-center p-[50px] mt-[40px] lg:m-[80px] lg:rounded-md lg:p-[80px] lg:flex lg:flex-row'>
          <div className='lg:mr-[50px]'>
            <h2 className='text-[48px] font-semibold text-[#FAFAFA] mb-[20px]'>Subscribe to get updated</h2>
            <p className='text-[18px] font-normal text-[#FAFAFA]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque .</p>
          </div>
          <div>
            <button className='w-[200px] h-[70.15px] text-[18px] font-medium center border-[1px] rounded-[5px] border-[#FAFAFA]  mt-5 text-[#FAFAFA] bg-[#1E5AFA]'>Get Started</button>
            <img src={images.Union} className='h-[110px] w-[210px] absolute top-[6657px] right-0 z-4'/>
          </div>
        </section>
        </main>

        <footer>
        <div className='px-[20px] lg:flex lg:justify-evenly lg:pb-[100px]'>
          <div className='mt-[60px] pl-[30px] lg:flex lg:flex-col lg:w-[350px] lg:mt-[20px]'>
            <div>
              <h1 className='text-[32px] font-bold text-[#313131] mb-[20px]'>smartHome</h1>
              <p className='text-[16px] font-normal text-[#575757] mb-[20px]'>Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.</p>
            </div>
            <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded lg px-4 py-2 text-gray-600 my-[30px]"
                />
                <button className="border border-gray-500 text-gray-600 rounded lg px-4 py-2 my-[30px]">
                  Register
                </button>
            </div>
          </div>

          <div>
            <h3 className='text-[24px] font-medium my-[30px] '>CATEGORIES</h3>
            <ul className='text-[18px] font-normal text-[#575757]
            '>
              <li className='my-[10px]'>Design/ Creatives</li>
              <li className='my-[10px]'>Education & Training</li>
              <li className='my-[10px]'>UI/UX Designers</li>
              <li className='my-[10px]'>Development</li>
              <li className='my-[10px]'>customer Support</li>
            </ul>
          </div>
        
          <div>
            <h3 className='text-[24px] font-medium my-[30px] '>ABOUT</h3>
            <ul className='text-[18px] font-normal text-[#575757]'>
              <li className='my-[10px]'>About Us</li>
              <li className='my-[10px]'>Partnerships</li>
              <li className='my-[10px]'>Finance Experts</li>
              <li className='my-[10px]'>Project Management</li>
              <li className='my-[10px]'>Product Manager</li>
              <li className='my-[10px]'>The Team</li>
            </ul>
          </div>
          
          <div>
            <h3 className='text-[24px] font-medium  my-[30px]'>Follow Us</h3>
            <ul className='text-[18px] font-normal text-[#575757]'>
              <li className='my-[10px]'>Facebook</li>
              <li className='my-[10px]'>Twitter</li>
              <li className='my-[10px]'>Instagram</li>
              <li className='my-[10px]'>Linkedin</li>
            </ul>
          </div>
          
        </div>
          <p className='text-[16px] font-normal py-[20px] bg-[#000F37] text-[#FAFAFA] text-center'>Copyright © 2022 all rights reserved lgartHome</p>
      </footer>
    </>
  )
}

export default App
