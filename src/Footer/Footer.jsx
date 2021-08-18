import React from 'react';
import './Footer.css';
import { BiRightArrowAlt } from 'react-icons/bi';
import links from './AboutLinks';
const Footer = () => {
	return (
		<div className='container-fluid footer-container  p-0'>
			<div className='Footer '>
				{/* Upper part */}
				<div className='upper pt-4 d-flex align-items-start align-items-lg-center justify-content-between justify-content-lg-around   flex-column flex-lg-row'>
					<img
						className='logo '
						src='https://upload.wikimedia.org/wikipedia/commons/b/b6/World_Economic_Forum_logo.svg'
						alt=''
					/>
					<p>
						Subscribe for updates <br />
						<small>A weekly update of what’s on the Global Agenda</small>
					</p>
					<div className='searchBar  d-flex'>
						<input
							type='email'
							name='EMAIL'
							aria-label='Email address'
							placeholder='Email address'
						/>
						<div className='arrow '>
							<BiRightArrowAlt />
						</div>
					</div>
				</div>
				{/* lower part */}
				<div className='lower row  mx-auto'>
					<div className=' col-12 col-md-6 col-lg-3'>
						<div className='row mt-2 mx-1 section  section1'>
							<div className='col'>
								<div className='title'>
									<h5>About</h5>
									{links.map((element, idx) => {
										return (
											<a key={idx} href='https://iarani.com/'>
												{element}
											</a>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					<div className=' col-12 col-md-6 col-lg-6'>
						<div className='row mt-2 mx-1 section section2'>
							<div className='col d-flex flex-column flex-lg-row justify-content-between p-0'>
								<div className='part-1'>
									<div className='title pl-3'>
										<h5>Media</h5>
										<a href='https://iarani.com/'>Accreditation</a>
										<a href='https://iarani.com/'>news</a>
										<a href='https://iarani.com/'>Subscribe to our news</a>
									</div>
								</div>
								<div className='part-2'>
									<div className='title pl-3'>
										<h5>Members and partners</h5>
										<a href='https://iarani.com/'>Member login to TopLink</a>
										<a href='https://iarani.com/'>Strategic Partners' area</a>
										<a href='https://iarani.com/'>Partner Institutes' area</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=' col-12 col-md-6 col-lg-3'>
						<div className='row mt-2 mx-1 section  section3'>
							<div className='col'>
								<div className='title'>
									<h5>Follow the World Economic Forum</h5>
									<div className='d-flex flex-column justify-content-between'>
										<div className='d-flex justify-content-start justify-content-lg-around social-icons'>
											<img src='https://img.icons8.com/color/48/4a90e2/facebook.png' />
											<img src='https://img.icons8.com/color/48/4a90e2/twitter.png' />
											<img src='https://img.icons8.com/color/48/4a90e2/linkedin.png' />

											<img src='https://img.icons8.com/ios/50/000000/tiktok.png' />

											<img src='https://img.icons8.com/ios/50/4a90e2/instagram-new.png' />
										</div>

										<div className='part-2 global'>
											<div className='title pl-3'>
												<h5>Global sites</h5>
												<a href='https://iarani.com/'>
													Centre for the Fourth Industrial Revolution
												</a>
												<a href='https://iarani.com/'>Open Forum</a>
												<a href='https://iarani.com/'>Global Shapers</a>
												<a href='https://iarani.com/'>Young Global Leaders</a>
												<a href='https://iarani.com/'>
													Schwab Foundation for Social Entrepreneurship
												</a>
												<a href='https://iarani.com/'>Strategic Intelligence</a>
												<a href='https://iarani.com/'>Global Risks</a>
												<a href='https://iarani.com/'>UpLink Platform</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='endDiv w-100 d-block d-lg-flex justify-content-between '>
						<p>© 2021 World Economic Forum</p>
						<a href='#'>Privacy Policy & Terms of Service</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
