import Head from 'next/head';
import React from 'react';
import ContactForm from '../components/contact/contact-form';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta name='description' content='Send Information' />
			</Head>
			<ContactForm />;
		</>
	);
};

export default ContactPage;
