import Image from "next/image";
import React from "react";

const Research = () => {
	return (
		<section className="bg-white">
			<div className="container mx-auto flex flex-col lg:flex-row justify-center lg:py-16 md:py-22 py-12">
				<div className="lg:w-10/12 w-full flex flex-col lg:mt-16 mt-0 mx-auto">
					<p className="text-black text-2xl lg:text-4xl font-bold mx-4 lg:mx-0 text-center">
						We have done research with
					</p>
					<div className="griddy5">
						<Image
							src="/images/image-1.png"
							alt="users"
							width={100}
							height={60}
							className="mx-auto object-contain lg:w-auto md:w-[100px] md:h-[80px] w-[80px] h-[50px]"
						/>
						<Image
							src="/images/image-2.png"
							alt="users"
							width={80}
							height={60}
							className="mx-auto object-contain lg:w-auto md:w-[100px] md:h-[80px] w-[80px] h-[50px]"
						/>
						<Image
							src="/images/image-3.png"
							alt="users"
							width={80}
							height={60}
							className="mx-auto object-contain lg:w-auto md:w-[100px] md:h-[80px] w-[80px] h-[50px]"
						/>
						<Image
							src="/images/image-5.png"
							alt="users"
							width={80}
							height={60}
							className="mx-auto object-contain lg:w-auto md:w-[100px] md:h-[80px] w-[80px] h-[50px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Research;
