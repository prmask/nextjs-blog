import React from 'react';
import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/coding-event.jpg'
					alt='An image showing Coding'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Max</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
				reprehenderit, eius eligendi fuga Nemo totam.
			</p>
		</section>
	);
};

export default Hero;
