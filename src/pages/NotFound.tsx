import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/atoms/button";

const NotFound = () => {
	return (
		<div className=' h-[92.5vh] flex'>
			<div className='flex flex-col items-center justify-center mx-auto'>
				<img src='/public/not_found.jpg' />
				<div className='flex flex-col items-center mt-10'>
					<h1 className='text-2xl font-bold '>No Result Found</h1>
					<p className='text-lg mt-4 font-medium'>The page you’re looking for doesn’t exist</p>
					<Button variant={"default"} size={"default"} className='mt-8 px-8'>
						<Link to='..'>Back </Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
