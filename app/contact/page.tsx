import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

const Contact = () => {
	return (
		<section className='full-bleed'>
			<div className='grid lg:grid-cols-2'>
				<div className='w-full'>
					<Image
						className='object-cover aspect-square sm:aspect-video md:aspect-square'
						src='/images/HP8.jpeg'
						width={1000}
						height={1000}
						alt='Address Map'
						priority
					/>
				</div>
				<div className='w-full aspect-square sm:aspect-video md:aspect-square mx-auto grid lg:place-content-center bg-primary py-8 lg:py-4'>
					<div className='w-full px-6 max-w-[400px] lg:w-[400px] mx-auto'>
						<h2 className='text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-primary-foreground '>
							Contact Us
						</h2>
						<form
							className='w-full'
							data-netlify='true'
							method='post'
							name='Contact Form'
							data-netlify-honeypot='bot-field'
						>
							<input type='hidden' name='contact-form' value='Contact Form' />
							<div hidden>
								<input name='bot-field' />
							</div>
							<div className='grid gap-4 w-full'>
								<div className='flex gap-4 flex-col'>
									<Input
										id={'name'}
										placeholder='Name*'
										required={true}
										type={'text'}
										name={'name'}
									/>
									<div>
										<Input
											placeholder='Department/Agency'
											type={'text'}
											name={'agency'}
											id={'agency'}
										/>
									</div>
									<div>
										<Input
											placeholder='Email Address*'
											type={'email'}
											name={'email'}
											id={'email'}
											required={true}
										/>
									</div>
								</div>
								<div>
									<Textarea
										className='h-full bg-primary-foreground'
										placeholder='Message*'
										id={'message'}
										name={'message'}
										required={true}
									/>
								</div>
							</div>
							<div className='text-right mt-4'>
								<Button type='submit' variant={'secondary'}>
									Send Message
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='border-t-2 border-secondaryTextColor mt-8 full-bleed'>
				<div className='flex flex-col lg:flex-row justify-between inside text-mainTextColor py-6 gap-6 gap-y-6'>
					<div className='space-y-3'>
						<h3 className='text-base font-bold'>Telephone</h3>
						<div>
							<p className='text-base'>8527-2192 loc. 309</p>
							<p className='text-base'>+63 943 505 4939</p>
						</div>
					</div>
					<div className=' space-y-3'>
						<h3 className='text-base font-bold'>Email</h3>
						<a
							className='text-base text-mainTextColor hover:underline hover:text-primary underline-offset-4'
							href={`mailto:mgmsecretariat@gmail.com`}
						>
							mgmsecretariat@gmail.com
						</a>
					</div>
					<div className='max-w-[300px]'>
						<h3 className='text-base font-bold'>Address</h3>
						<a
							className='text-base text-mainTextColor hover:underline hover:text-primary underline-offset-4'
							href='https://goo.gl/maps/hLjq3q9nR4oDo22b8'
							target='_blank'
						>
							National Commission for Culture and the Arts Building 633 Gen.
							Luna St., Intramuros, Manila
						</a>
					</div>
					<div className=' space-y-3 order-first md:order-last'>
						<h3 className='text-base font-bold'>Search MGM</h3>
						<div className='relative'>
							<Input
								className='w-[200px]'
								placeholder='Search'
								type={'text'}
								name={'search'}
								required={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
