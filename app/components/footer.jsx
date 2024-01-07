import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const links = {
        linkedin: 'https://www.linkedin.com/company/creatalysis-studio/',
        twitter: 'https://twitter.com/creatalysis',
        instagram: 'https://www.instagram.com/creatalysis/',
        medium: 'https://medium.com/@creatalysis',
        whatsapp: 'https://wa.link/m7bnct'
    }

    return (
    <footer className='footer-griddy container mx-auto'>
        <div className="flex flex-col justify-between gap-[1rem]">
            <Image src='/images/footer-logo.svg'
                alt='users'
                width={100}
                height={100}
                className='w-[150px]'/>
            {/* Comic download btn */}
            <Link href='/'>
               <div className='bg-createYellow p-2 shadow-create flex items-center justify-between gap-2'>
                <div>
                    <p className='text-base font-bold'>Download our short comic</p>
                    <p className='text-sm text-createGray italic'>Check out our short comic – it's quite the read!</p>
                </div>
                <div>
                    <Image src='/images/download.png'
                        alt='users'
                        width={100}
                        height={80}
                        className='w-[50px]'/>
                </div>
               </div>
            </Link>
        </div>
        <div>

        </div>
        <div className="flex flex-col gap-[1rem] ml-auto">
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
/* Links
https://medium.com/@creatalysis
https://www.figma.com/community/file/1290112742882943529
https://www.linkedin.com/company/creatalysis-studio/
https://twitter.com/creatalysis
https://www.instagram.com/creatalysis/

+91 7900176277 

*/