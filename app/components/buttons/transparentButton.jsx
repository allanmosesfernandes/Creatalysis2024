import Link from 'next/link'
import React from 'react'

const TransparentButton = ({text, goTo}) => {
    return goTo ? (
        <Link href={goTo} passHref>
            <button className="md:w-[160px] w-full font-bold bg-transparent text-white py-4 px-4 border-white border text-lg">{text}</button>
        </Link>
    ) : (
        <button className="w-[160px] font-bold text-lg bg-transparent text-white py-4 px-4 border-white border">{text}</button>
    );
}
export default TransparentButton