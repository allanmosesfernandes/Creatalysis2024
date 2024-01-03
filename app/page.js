import Image from 'next/image'
import services from "./utils/services";
import Accordion from './components/accordion';
import YellowBtn from './components/buttons/yellowBtn';
import TransparentButton from './components/buttons/transparentButton';

export default function Home() {
  return (
    <main>
      {/* First Fold */}
      <section className='bg-createYellow h-[80vh] mx-auto'>
        <div className='flex flex-col items-center h-full pt-24'>
          <Image
            src='/images/logo-black-new.svg'
            alt='Creatalysis Logo'
            width={300}
            height={200}
            className='object-contain lg:w-auto w-[200px]'
          />
          <div className='lg:w-8/12 w-full text-center flex flex-col gap-6 mt-6'>
            <p className='text-bodyCopy lg:text-2xl md:text-lg text-md px-4 mt-12'>
              At Creatalysis, we're all about embracing the power of <span className='font-bold'>understanding </span>
                  <Image src='/images/people.png' 
                  alt='users'          
                  width={30}
                  height={20} 
                  className='inline-flex items-center mb-2 mx-2'/>
                  <span className='font-bold'>users </span>  
                    and their expectations. <span className='font-bold'>But,</span> we also know you <span className='font-bold'>understand the</span>  
                  <Image src='/images/briefcase.png' 
                  alt='users'          
                  width={30}
                  height={20} 
                  className='inline-flex items-center mb-2 mx-2'/>
                  <span className='font-bold'>business best.</span> 
            </p>
            <p className='text-bodyCopy lg:text-2xl md:text-lg text-md px-4'>
            By becoming an integral part of <span className='font-bold'>your</span>
              <Image src='/images/heart-hands_.png' 
                  alt='users'          
                  width={30}
                  height={20} 
                  className='inline-flex items-center mb-2 mx-2'/>
              <span className='font-bold'>team</span> we help you to uncover valuable user insights. All this while keeping the business reins in <span className='font-bold'>your hands             
              <Image src='/images/handshake.png' 
                  alt='users'          
                  width={30}
                  height={20} 
                  className='inline-flex items-center mb-2 mx-2'/></span>
            </p>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-center lg:py-24 md:py-18 py-10'>
          <div className='lg:w-6/12 w-full flex flex-col lg:mt-16 mt-0'>
            <p className=' text-createGray lg:mb-4 mb-2 lg:text-xl text-md border-l-4 pl-2 border-createGray mx-4 lg:mx-0'>Collaboration redefined with </p>
            <p className='text-black lg:text-4xl md:text-2xl text-xl font-bold mx-4 lg:mx-0'>
              Interview-as-a-service Model
            </p>
          </div>
          <div className='mt-[2rem] md:mt-auto lg:w-6/12 w-full flex flex-col bg-black text-white lg:p-12 p-4 lg:gap-12 gap-8'>
            <p className='lg:text-xl text-lg leading-45 lg:w-10/12 w-full mx-auto'>
            <span className='font-bold'>So, how does this 🔮 magic happen?</span> <br />
            It's simple yet powerful. We roll up our sleeves and take care of all the nitty-gritty, from collecting valuable user data to transforming it into actionable insights. 
            </p>
            <p className='lg:text-xl text-lg leading-36 lg:w-10/12 w-full mx-auto'>
              <span className='font-bold'>And guess ⏱ then what? <br /></span>
              We pass the baton to you, allowing you to take the reins and drive the project with your business vision as the guiding star.
            </p>
          </div>
        </div>
      </section>
      {/* Difference  */}
      <section className='container bg-createYellow mx-auto'>
        <div className='mx-auto flex flex-col justify-center lg:py-32 md:py-22 py-12 gap-4 md:w-10/12 w-full'>
          <div className='griddy'>
            <div></div>
            <div className='mx-auto'>
              <Image src='/images/logo.svg'
                  alt='users'
                  width={150}
                  height={100}
                  className='lg:w-auto w-[100px]'/>
            </div>
            <div className='mx-auto'>
              <Image src='/images/other-agencies.svg'
                  alt='users'
                  width={150}
                  height={100}
                  className='lg:w-auto w-[100px]'/>
            </div>
          </div>
          {
            services.map((service,index) => {
              return (
              <div className='md:w-full w-11/12 mx-auto griddy justify-between bg-black tracking-[0.98px] lg:p-10 p-0 lg:text-md text-sm' key={index}>
                <p className='text-white uppercase mx-auto lg:my-0 my-6'>{service[0]}</p>
                <p className='pb-[1rem] text-createYellow lg:text-md lg:mb-0 mb-6 text-sm lg:mx-auto lg:border-l-2 lg:border-r-2 lg:w-10/12 w-8/12 mx-auto text-center'>{service[1]}</p>
                <p className='pb-[1rem] text-white lg:mx-auto lg:w-10/12 w-8/12 mx-auto lg:text-md text-sm text-center lg:mb-0 mb-6'>{service[2]}</p>
              </div>)
            })
          }
        </div>
      </section>
      {/* Why Choose us */}
      <section className='bg-createYellow'>
        {/* Why choose us */}
          <div className='lg:py-32 md:py-22 py-12 container mx-auto'>
            <p className=' text-createGray lg:mb-4 mb-2 lg:text-xl text-md border-l-4 pl-2 border-createGray mx-4 lg:mx-0'>Why Choose us? </p>
            <div className='flex flex-col md:px-auto px-2'>
              <div className='flex flex-col gap-4 lg:w-7/12 lg:py-20 py-10 pl-2 lg:pl-0'>
                <h2 className='font-bold text-xl lg:text-4xl'>
                <span className='font-bold'>            
                  <Image src='/images/thought.png' 
                  alt='users'          
                  width={30}
                  height={20} 
                  className='inline-flex items-center mb-2 mx-2'/>
                  <span className='font-bold'>Insights in a Creative Way</span></span>
                </h2>
                <p className='text-bodyCopy lg:text-2xl md:text-lg text-md'>
                  At our core, we infuse user insights with a touch of creativity and strategic thinking, igniting innovation for your business like never before.
                </p>
              </div>
              <div className='flex flex-col gap-4 lg:w-7/12 lg:ml-auto lg:pb-20 pb-10  pl-2 lg:pl-0'>
                <h2 className='font-bold text-xl lg:text-4xl'>
                  <span className='font-bold'>            
                    <Image src='/images/handshake.png' 
                    alt='users'          
                    width={30}
                    height={20} 
                    className='inline-flex items-center mb-2 mx-2'/>
                    <span className='font-bold'>Seamless Integration</span></span>
                  </h2>
                  <p className='text-bodyCopy lg:text-2xl md:text-lg text-md'>
                    We respect your expertise in your business. We handle the research, leaving you in the driver's seat to lead your business forward.
                  </p>
              </div>
              <div className='flex flex-col gap-4 lg:w-7/12 lg:pb-20 pb-10  pl-2 lg:pl-0'>
                <h2 className='font-bold text-xl lg:text-4xl'>
                  <span className='font-bold'>            
                    <Image src='/images/shield.png' 
                    alt='users'          
                    width={30}
                    height={20} 
                    className='inline-flex items-center mb-2 mx-2'/>
                    <span className='font-bold'>Privacy and Confidentiality</span></span>
                </h2>
                <p className='text-bodyCopy lg:text-2xl md:text-lg text-md'>
                    Your user insights belong solely to you. We value your privacy, keeping all client information strictly confidential. Your trust is paramount to us.
                </p>
              </div>
            </div>
          </div>
      </section>
      <section className='bg-white'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-center lg:pt-32 md:pt-22 pt-0'>
          <div className='lg:w-10/12 w-full flex flex-col lg:mt-16 mt-0 mx-auto bg-image lg:p-32 md:p-22 p-12'>
            <h2 className='font-bold text-2xl lg:text-4xl text-white mb-4'>
              <span className='font-bold'>            
                <Image src='/images/moneyW.png' 
                alt='users'          
                width={30}
                height={20} 
                className='inline-flex items-center mb-2 mx-2'/>
                <span className='font-bold'>Earn with us</span></span>
            </h2>
            <p className='text-white lg:text-xl text-lg'>
              Your insights are priceless gems that can shape the future of digital products and services. Embrace the chance to make a difference and be part of something extraordinary. 
            </p>
            <p className='font-bold text-white my-12 lg:text-xl text-lg'>Join the Participant program.</p>
            <div className='flex gap-6 md:flex-row flex-col'>
              <YellowBtn text="Sign up" goTo="#"/>
              <TransparentButton text="Know more" goTo="#"/>
            </div>
          </div>
        </div>
      </section>
      {/* Convinced or Confused? */}
      <section className='bg-black'>
        <div className='container py-32 mx-auto items-center'>
          <div className='lg:w-10/12 w-full mx-auto md:px-22 md:flex md:flex-row flex-col'>
            <div>
              <p className='text-white text-2xl lg:text-4xl font-bold mx-4 lg:mx-0 md:text-left text-center'>
                Convinced or Confused?
              </p>
              <p className='text-white lg:text-xl text-md my-4 mx-4 lg:mx-0 md:text-left text-center'>
                Either way we have your back. Lets talk and get going!
              </p>
            </div>
          <div className='md:ml-auto md:w-full w-10/12'>
            <YellowBtn text="Let's connect" goTo="/"/>
          </div>
          </div>
          {/* <div className=''>
            <YellowBtn text="Let's connect" goTo="/"/>
          </div> */}
        </div>
      </section>
      <section className='bg-white'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-center py-32'>
          <div className='lg:w-10/12 w-full flex flex-col lg:mt-16 mt-0 mx-auto'>
            <p className='text-black text-2xl lg:text-4xl font-bold mx-4 lg:mx-0 text-center'>
              We have done research with
            </p>
            <div className='griddy5'>
              <Image src='/images/image-1.png'
                    alt='users'
                    width={100}
                    height={60}
                    className='mx-auto object-contain'/>
              <Image src='/images/image-2.png'
                    alt='users'
                    width={80}
                    height={60}
                    className='mx-auto object-contain'/>
              <Image src='/images/image-3.png'
                    alt='users'
                    width={80}
                    height={60}
                    className='mx-auto object-contain'/>
              <Image src='/images/image-4.png'
                    alt='users'
                    width={80}
                    height={60}
                    className='mx-auto object-contain'/>
              <Image src='/images/image-5.png'
                    alt='users'
                    width={80}
                    height={60}
                    className='mx-auto object-contain'/>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black'>
        <div className='container flex py-32 mx-auto'>
          <div className='w-full'>
            <p className='text-white text-2xl lg:text-4xl font-bold mx-4 lg:mx-0'>
              Thoughts you might have
            </p>
            <Accordion />
          </div>
        </div>
      </section>
    </main>
  )
}
