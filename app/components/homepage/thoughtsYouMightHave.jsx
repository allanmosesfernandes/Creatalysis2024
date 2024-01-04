import React from 'react'
import Accordion from '../accordion'

const ThoughtsFAQ = () => {
  return (
    <section className='bg-black'>
    <div className='container flex lg:py-32 md:py-22 py-12 mx-auto'>
      <div className='w-full'>
        <p className='text-white text-2xl lg:text-4xl font-bold mx-4 lg:mx-0'>
          Thoughts you might have
        </p>
        <Accordion />
      </div>
    </div>
  </section>
  )
}

export default ThoughtsFAQ