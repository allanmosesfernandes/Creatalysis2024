import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const links = {
        linkedin: 'https://www.linkedin.com/company/creatalysis-studio/',
        twitter: 'https://twitter.com/creatalysis',
        instagram: 'https://www.instagram.com/creatalysis/',
        medium: 'https://medium.com/@creatalysis',
        whatsapp: 'https://wa.link/m7bnct',
        knowBrand: 'https://www.figma.com/community/file/1290112742882943529/creatalysis'
    }

    return (
    <footer className='footer-griddy container mx-auto my-12'>
        {/* Footer Left */}
        <div className="flex flex-col md:justify-between justify-center gap-[1rem]">
            <Image src='/images/footer-logo.svg'
                alt='users'
                width={100}
                height={100}
                className='w-[150px] md:m-0 m-auto'/>
            {/* Comic download btn */}
            <Link href='/'>
            <div className='bg-createYellow p-2 shadow-create flex items-center justify-between gap-2 px-6 py-3 md:w-auto w-[75%] m-auto relative clicktodownload'>
                <div className='mt-6'>
                    <p className='text-base font-bold'>Check out our short comic</p>
                    <p className='text-sm text-createGray italic'>It's quite the read!</p>
                </div>
            </div>
            </Link>
        </div>
        <div className='flex justify-around'>
            {/* left links */}
            <div className='flex flex-col gap-[1rem] text-base'>
                <Link href='/'>
                    <p className='text-createGray cursor-pointer'>Home</p>
                </Link>
                <Link href='/about'>
                    <p className='text-createGray cursor-pointer'>About Us</p>
                </Link>
                <Link href='/contact'>
                    <p className='text-createGray cursor-pointer'>Earn with us</p>
                </Link>
                <Link href='/contact'>
                    <p className='text-createGray cursor-pointer'>Contact Us</p>
                </Link>
                <Link href={links.medium}>
                    <p className='text-createGray cursor-pointer'>Blogs</p>
                </Link>
                <Link href={links.knowBrand}>
                    <p className='text-createGray cursor-pointer'>Know our brand</p>
                </Link>
            </div>
            {/* right links */}
            <div className='flex flex-col gap-[1rem] text-base justify-between'>
                <div className='flex flex-col'>
                <p className='mb-2'><strong>Reach us</strong></p>
                    <Link href='mailto:hello@creatalysis.com'>hello@creatalysis.com</Link>
                    <Link href='tel:+91 79001 76277'>+91 79001 76277</Link>
                </div>
                <div className='flex flex-col'>
                    <p className='mb-2'><strong>Careers</strong><span className='bg-createYellow rounded-full text-sm px-2 py-1 ml-2'>We are hiring!!!</span></p>
                    <p>Send your CVs to</p>
                    <Link href='mailto:hello@creatalysis.com'>hello@creatalysis.com</Link>
                </div>
            </div>
        </div>
        {/* Social Links */}
        <div className="flex flex-col gap-[1rem] lg:mr-auto mx-auto">
            <p className='text-base font-bold'>Our Social presence</p>
            <div className='flex items-center footer-social-grid'>
                <Link href={links.linkedin}>
                    <Image src='/images/linkedin-f.svg'
                        alt='users'
                        width={27}
                        height={27}
                        className='w-[30px]'/>
                </Link>
                <Link href={links.twitter}>
                    <Image src='/images/twitter-f.svg'
                        alt='users'
                        width={27}
                        height={27}
                        className='w-[30px]'/>
                </Link>
                <Link href={links.instagram}>
                    <Image src='/images/insta-fg.svg'
                        alt='users'
                        width={27}
                        height={27}
                        className='w-[30px]'/>
                </Link>
                <Link href={links.medium}>
                    <Image src='/images/medium-f.svg'
                        alt='users'
                        width={27}
                        height={27}
                        className='w-[30px]'/>
                </Link>
                <Link href={links.whatsapp}>
                    <Image src='/images/whatsapp-f.svg'
                        alt='users'
                        width={27}
                        height={27}
                        className='w-[30px]'/>
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer