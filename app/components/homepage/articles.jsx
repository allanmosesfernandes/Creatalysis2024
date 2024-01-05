import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Articles = () => {
    const articles = [
        {
            "title": "Harmonizing Horizons: The Agile Symphony of UX Design",
            "link": "https://medium.com/@creatalysis/harmonizing-horizons-the-agile-symphony-of-ux-design-b18ebae9b48e",
            "image": "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*6ha4Bxr8LaSYizSw",
            "readTime": "5 min read"
        },
        {
            "title": "Decoding the SBI Feedback Model: Transforming Communication One Conversation at a Time",
            "link": "https://medium.com/@creatalysis/decoding-the-sbi-feedback-model-transforming-communication-one-conversation-at-a-time-e242b093161",
            "image": "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*nBVS-YLSnhQbuHUx2ITw7A.jpeg",
            "readTime": "3 min read"
        },
        {
            "title": "Decoding the Human Puzzle: Unraveling Intent with the SBI Model",
            "link": "https://medium.com/@creatalysis/decoding-the-human-puzzle-unraveling-intent-with-the-sbi-model-8c2614068031",
            "image": "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*K23kKZ4_B-Nplk1QbWY5Xw.jpeg",
            "readTime": "4 min read"
        },
    ]
return (
    <section className='container mx-auto articles-grid py-32 md:py-22 py-12'>
        {articles.map((article, index) => (
            <Link key={index} href={article.link}>
                <div className='flex flex-col relative' key={index} >
                    <div className='flex flex-col w-full'>
                        <a href={article.link} target='_blank' rel='noreferrer' className='bg-createYellow p-4'>
                            <h2 className='text-black  md:text-xl text-lg  font-bold mx-4 lg:mx-0 h-[90px]'>
                                {article.title}
                            </h2>
                            <p className='text-black text-sm lg:text-lg font-normal mx-4 lg:mx-0 italic'>
                                {article.readTime}
                            </p>
                        </a>
                    </div>
                    <div className='flex flex-col w-11/12 mx-auto relative overflow-hidden -mt-[10px]'>
                        <Image src={article.image} alt='article' width={300} height={100} className='z-10 w-full bg-createYellow zoom-image' />
                    </div>
                    <div className='w-full h-[40px] bg-createYellow -mt-[10px]'></div>
                </div>
            </Link>
        ))}
    </section>
);
}

export default Articles