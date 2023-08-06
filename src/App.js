
// Technical stuff
import './App.css';
import {Route, Routes} from 'react-router-dom';

// Main components
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import AntPage from './pages/AntPage';
import BSTPage from './pages/BSTPage';
import LibraryPage from './pages/LibraryPage';

function App() {

	return (
		<div className="App">

			<NavBar />

			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/ant' element={<AntPage />} />
				<Route path='/bst' element={<BSTPage />} />
				<Route path='/library' element={<LibraryPage />} />
			</Routes>

		</div>
	);
}


export default App;
