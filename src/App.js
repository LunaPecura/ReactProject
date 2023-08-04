import './App.css';
import {Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import AntPage from './pages/AntPage';
import BSTPage from './pages/BSTPage';
import TheoryPage from './pages/TheoryPage';

function App() {

	return (
		<div className="App">

			<NavBar />

			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				{/* <Route path='/board' element={<BoardPage n={n} />} /> */}
				{/* <Route path='/fidgets' element={<FidgetPage />} /> */}
				<Route path='/ant' element={<AntPage />} />
				<Route path='/bst' element={<BSTPage />} />
				<Route path='/theory' element={<TheoryPage />} />
			</Routes>

		</div>
	);
}


export default App;
