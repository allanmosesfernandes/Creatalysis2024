import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <main>
    <section className='h-[80vh] mx-auto'>
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
                Hey <span className='font-bold'>glad to have you </span> here at Creatalysis!
            </p>
            <p className='text-bodyCopy lg:text-2xl md:text-lg text-md px-4'>
                We're all about <span className='font-bold'>combining</span>
            <Image src='/images/c.png' 
                alt='users'          
                width={30}
                height={20} 
                className='inline-flex items-center mb-2 mx-2'/>
              <span className='font-bold'>creativity</span> and <span className='font-bold'>user             
              <Image src='/images/chart.png' 
                alt='users'          
                width={30}
                height={20} 
                className='inline-flex items-center mb-2 mx-2'/>insights</span> to unleash some < br /> serious potential! <span className='font-bold'>
             </span>
            </p>
          </div>
        </div>
    </section>
    <section className='container mx-auto'>
        <div className='bg-createYellow lg:p-32 md:p-22 p-12  w-11/12 mx-auto'>
        <p className=' text-createGray lg:mb-4 mb-2 lg:text-xl text-md border-l-4 pl-2 border-createGray mx-4 lg:mx-0'>Our Philosphy </p>
            <p className='text-5xl font-bold leading-[66px]'>
            we understand users, you understand business. That's why become an integral part of your team and help you to uncover user insights. All this while keeping the business reins in your hand.
            </p>
        </div>
    </section>
    <section className='bg-createYellow'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-center lg:py-24 md:py-18 py-10'>
        <div className='lg:w-6/12 w-full flex flex-col lg:mt-16 mt-0'>
            <p className=' text-createGray lg:mb-4 mb-2 lg:text-xl text-md border-l-4 pl-2 border-createGray mx-4 lg:mx-0'>Your Vision, Our Drive</p>
            <p className='text-black lg:text-4xl md:text-2xl text-xl font-bold mx-4 lg:mx-0 lg:w-8/12 w-full'>
            Empowerment is the name of our game. We're here to fuel your vision and drive your success.
            </p>
        </div>
        <div className='mt-[2rem] md:mt-auto lg:w-6/12 w-full flex flex-col bg-black text-white lg:p-12 p-4 lg:gap-12 gap-8'>
            <p className='lg:text-xl text-lg leading-45 lg:w-10/12 w-full mx-auto'>
            Creatalysis isn't just a service provider – we're your partners in crime, your collaborators in innovation. Your vision becomes our driving force. We understand that nobody knows your business like you do, and that's why we're here to empower, not overpower.
            </p>
            <p className='lg:text-xl text-lg leading-36 lg:w-10/12 w-full mx-auto'>
            We're all about seamless integration. You stay in the driver's seat, steering the project according to your business's unique identity. We're the co-pilots, navigating the twists and turns of insights and data, making sure your journey is smooth and successful.
            </p>
        </div>
        </div>
    </section>
    <section className='bg-createYellow'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-center lg:py-24 md:py-18 py-10'>
        <div className='lg:w-6/12 w-full flex flex-col lg:mt-16 mt-0'>
            <p className=' text-createGray lg:mb-4 mb-2 lg:text-xl text-md border-l-4 pl-2 border-createGray mx-4 lg:mx-0'>Heading: Growing Together, Succeeding Together</p>
            <p className='text-black lg:text-4xl md:text-2xl text-xl font-bold mx-4 lg:mx-0 lg:w-8/12 w-full'>
            At Creatalysis, your growth isn't just a goal – it's our ultimate victory.
            </p>
        </div>
        <div className='mt-[2rem] md:mt-auto lg:w-6/12 w-full flex flex-col bg-black text-white lg:p-12 p-4 lg:gap-12 gap-8'>
            <p className='lg:text-xl text-lg leading-45 lg:w-10/12 w-full mx-auto'>
            When we say "Your success is our success," we mean it. We're invested in your growth like it's our own. Your milestones are our moments of celebration, and your achievements fuel our passion.
            </p>
            <p className='lg:text-xl text-lg leading-36 lg:w-10/12 w-full mx-auto'>
            Every insight we provide, every strategy we develop, it's all geared towards one thing – propelling your business forward. We're not just in the business of insights; we're in the business of nurturing dreams, sparking innovation, and creating success stories.
            </p>
            <p className='lg:text-xl text-lg leading-36 lg:w-10/12 w-full mx-auto'>
            At Creatalysis, your growth isn't just a mission, but our most cherished accomplishment. Let's grow, succeed, and celebrate together! 🚀🌟
            </p>
        </div>
        </div>
    </section>
    <section className='bg-createYellow'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-center lg:py-24 md:py-18 py-10'>
        <div className='lg:w-6/12 w-full flex flex-col lg:mt-16 mt-0'>
            <p className=' text-createGray lg:mb-4 mb-2 lg:text-xl text-md border-l-4 pl-2 border-createGray mx-4 lg:mx-0'>A Fresh Perspective on Insights</p>
            <p className='text-black lg:text-4xl md:text-2xl text-xl font-bold mx-4 lg:mx-0 lg:w-8/12 w-full'>
                We're not your average team – we're the ones who see insights from a whole new angle.
            </p>
        </div>
        <div className='mt-[2rem] md:mt-auto lg:w-6/12 w-full flex flex-col bg-black text-white lg:p-12 p-4 lg:gap-12 gap-8'>
            <p className='lg:text-xl text-lg leading-45 lg:w-10/12 w-full mx-auto'>
                Here at Creatalysis, we're not just another cookie-cutter agency. We're the ones who love shaking things up, and that includes the way we look at insights. We bring a fresh perspective to the table, one that blends creativity and strategic thinking to unveil insights like never before.
            </p>
            <p className='lg:text-xl text-lg leading-36 lg:w-10/12 w-full mx-auto'>
                While others might see data as numbers on a screen, we see stories waiting to be told. We dive deep into understanding your users, their desires, and their dreams. It's not just about what they say; it's about decoding what they really mean. And with this innovative approach, we help you make smarter, more impactful decisions for your business.
            </p>
        </div>
        </div>
    </section>
    </main>
  )
}

export default About