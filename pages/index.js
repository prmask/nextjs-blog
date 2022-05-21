import React from 'react';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
	return (
		<>
			<Head>
				<title>My Blog</title>
				<meta name='description' content='Blog about programming' />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
};

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default HomePage;
