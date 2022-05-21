import React from 'react';
import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = (props) => {
	return (
		<>
			<Head>
				<title>All my post</title>
				<meta name='description' content='All programming posts' />
			</Head>
			<AllPosts posts={props.posts} />;
		</>
	);
};

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
	};
}

export default AllPostsPage;
