import React, { useState } from 'react';
import './navbar.css';
// import logo from '../images/logo.svg';
// import hamburger from '../images/hamburger.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
const Navbar = () => {
	const [searchbar, setsearchbar] = useState(false);
	const [selected, setselected] = useState('0'); //setting string because we can set id as a string too
	const [lowerNavOptions] = useState([
		'Home',
		'Participants',
		'Programme',
		'Liveblog',
		'About',
	]);
	const [upperNavOptions] = useState([
		'Agenda',
		'Events',
		'Reports',
		'Platforms',
	]);
	return (
		<>
			{/* Navbar */}
			<div className='container-fluid Navbar '>
				<div className='row h-100'>
					<div className='col-4'>
						<div className='leftMenu d-flex justify-content-start justify-content-xl-around align-items-center '>
							<GiHamburgerMenu fontSize='1.5em' />

							{upperNavOptions.map((item, idx) => {
								return (
									<a key={idx} className='d-none d-xl-inline' href='#'>
										{item}
									</a>
								);
							})}
						</div>
					</div>
					<div className='col-4 d-flex justify-content-center'>
						<img
							className='logo '
							src='https://upload.wikimedia.org/wikipedia/commons/b/b6/World_Economic_Forum_logo.svg'
							alt=''
						/>
					</div>
					<div className='col-4 d-flex justify-content-end align-items-center '>
						<input
							type='button'
							value='Sign Up'
							className={`d-none  signUp ${
								searchbar ? 'd-xl-none' : 'd-xl-inline'
							}`}
						/>
						<div
							className={`searchbar ${
								searchbar ? 'd-flex align-items-center' : 'd-none'
							}`}>
							<input type='text' placeholder='Search' />
							<BiSearch fontSize='3.2rem' />
						</div>
						<div onClick={() => setsearchbar(!searchbar)}>
							{searchbar ? (
								<ImCross
									fontSize='2.5rem'
									fontWeight='100'
									className='search'
								/>
							) : (
								<BiSearch fontSize='2.5rem' className='search' />
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Lower Nav */}

			<div className='lowerNav d-flex justify-content-between align-items-center'>
				<div className='lowerleft d-flex justify-content-around'>
					{lowerNavOptions.map((item, idx) => {
						return (
							<a
								href='#'
								id={idx}
								onClick={() => setselected(idx.toString())}
								className={selected == `${idx}` ? 'active' : null}
								key={idx}>
								{item}
							</a>
						);
					})}
				</div>
				<div className='social d-flex justify-content-between align-items-center'>
					<a href='#' id='hashtag'>
						#SDI20
					</a>

					<a id='fb' href='https://lafdapedia.herokuapp.com/'>
						<i className='fab fa-facebook-f'></i>
					</a>

					<a id='tw' href='https://lafdapedia.herokuapp.com/'>
						<i className='fab fa-twitter'></i>
					</a>

					<a id='in' href='https://lafdapedia.herokuapp.com/'>
						<i className='fab fa-linkedin'></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default Navbar;
