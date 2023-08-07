
// Technical stuff
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Main components
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import LibraryPage from './pages/LibraryPage';
import ContactPage from './pages/ContactPage';

function App() {

	return (
		<div className="App">

			<NavBar />

			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/library' element={<LibraryPage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>

		</div>
	);
}


export default App;
