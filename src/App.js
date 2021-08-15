import About from './About/About';
import './App.css';
import JoinSummit from './JoinSummit/JoinSummit';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Partners from './Partners/Partners';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Main />
			<About />
			<JoinSummit />
			<Partners />
		</div>
	);
}

export default App;
