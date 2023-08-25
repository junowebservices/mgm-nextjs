import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

const Contact = () => {
	// const [data, setData] = useState({});

	// const handleChange = (e) => {
	//   console.log({ [e.target.name]: e.target.value });
	//   // setData({ [e.target.name]: e.target.value });
	//   // setState({ [e.target.name]: e.target.value });
	// };

	// const handleSubmit = (e) => {
	//   e.preventDefault();
	//   const form = e.target;
	//   fetch("/", {
	//     method: "POST",
	//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
	//     body: encode({
	//       "form-name": form.getAttribute("name"),
	//       ...data,
	//     }),
	//   });
	//   // .then(() => navigate(form.getAttribute("action")))
	//   // .catch((error) => alert(error));
	// };

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
							name='contact'
							method='post'
							action='/contact/thanks/'
							data-netlify='true'
							data-netlify-honeypot='bot-field'
							// onSubmit={(e) => handleSubmit(e)}
						>
							{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
							<input type='hidden' name='form-name' value='contact' />
							<div hidden>
								<label>
									Don't fill this out:{' '}
									{/* <input name="bot-field" onChange={(e) => handleChange(e)} /> */}
								</label>
							</div>
							<div className='grid gap-4 w-full'>
								<div className='flex gap-4 flex-col'>
									<Input
										id={'name'}
										placeholder='Name*'
										required={true}
										type={'text'}
										// onChange={(e) => handleChange(e)}
										name={'name'}
									/>
									{/* <input
                    className="w-full bg-mainBg text-sm lg:text-base p-3 "
                    type={"text"}
                    name={"name"}
                    onChange={(e) => handleChange(e)}
                    id={"name"}
                    required={true}
                    placeholder="Name*"
                  />
                </div> */}
									<div>
										<Input
											placeholder='Department/Agency'
											type={'text'}
											name={'agency'}
											// onChange={(e) => handleChange(e)}
											id={'agency'}
										/>
										{/* <input
                    placeholder="Department/Agency"
                    type={"text"}
                    name={"agency"}
                    onChange={(e) => handleChange(e)}
                    id={"agency"}
                  /> */}
									</div>
									<div>
										<Input
											placeholder='Email Address*'
											type={'email'}
											name={'email'}
											// onChange={(e) => handleChange(e)}
											id={'email'}
											required={true}
										/>
										{/* <input
                    placeholder="Email Address*"
                    className="w-full bg-mainBg text-sm lg:text-base p-3"
                    type={"email"}
                    name={"email"}
                    onChange={(e) => handleChange(e)}
                    id={"email"}
                    required={true}
                  /> */}
									</div>
								</div>
								<div>
									<Textarea
										className='h-full bg-primary-foreground'
										placeholder='Message*'
										// onChange={(e) => handleChange(e)}
										id={'message'}
										name={'message'}
										required={true}
									/>
									{/* <textarea
                  placeholder="Message*"
                  className="w-full h-full bg-mainBg text-sm lg:text-base p-3 min-h-[150px]"
                  name={"message"}
                  onChange={(e) => handleChange(e)}
                  id={"message"}
                  required={true}
                /> */}
								</div>
							</div>
							<div className='text-right mt-4'>
								<Button type='submit' variant={'secondary'}>
									Send Message
								</Button>
								{/* <button
                  className="bg-mainOrange hover:text-mainOrange border-mainOrange text-white mt-3 mb-5 border-2  hover:bg-white focus:ring-4 focus:outline-none focus:ring-mainOrange-dark font-medium text-sm px-5 py-1.5 text-center uppercase transition-all ease-in-out duration-300"
                  type="submit"
                >
                  Send
                </button> */}
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='border-t-2 border-secondaryTextColor mt-8 full-bleed'>
				<div className='flex justify-between inside text-mainTextColor py-6 gap-6 gap-y-6'>
					<div className=' space-y-3'>
						<h3 className='text-base font-bold'>Telephone</h3>
						<div>
							<p className='text-base'>8527-2192 loc. 309</p>
							<p className='text-base'>+63 943 505 4939</p>
						</div>
					</div>
					<div className=' space-y-3'>
						<h3 className='text-base font-bold'>Email</h3>
						<a
							className='text-base text-mainTextColor'
							href={`mailto:mgmsecretariat@gmail.com`}
						>
							mgmsecretariat@gmail.com
						</a>
					</div>
					<div className='max-w-[300px]'>
						<h3 className='text-base font-bold'>Address</h3>
						<a
							className='text-base text-mainTextColor'
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
								// onChange={(e) => handleChange(e)}
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
