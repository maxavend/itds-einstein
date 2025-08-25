
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GdAHome from './pages/GdAHome'
import GestionTechos from './pages/GestionTechos'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/gda-home" element={<GdAHome />} />
				<Route path="/gestion-techos" element={<GestionTechos />} />
			</Routes>
		</BrowserRouter>
	)
}
