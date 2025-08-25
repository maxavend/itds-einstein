import Button from '../components/Button'
import { FaChevronRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

// Pantalla Home según layout y tokens de Figma
export default function Home() {
	const navigate = useNavigate()
	return (
		<main className="flex flex-col items-end justify-center min-h-screen bg-neutral-white font-sans">
			<section className="flex flex-col items-center justify-center gap-6 w-full">
				<header className="flex flex-col items-center gap-3 w-full text-center">
					<h1 className="font-bold text-[48px] leading-[1.2] text-neutral-strongest font-dm">
						Pantalla principal de test sin ITDS
					</h1>
					<p className="font-medium text-base leading-[20px] text-neutral-default max-w-xl mx-auto font-dm">
						Esta es la página de inicio. Al clickear en 'Ir al test', serás redirigido a la pantalla de pruebas. Si no hay contenido disponible, aparecerá una notificación.
					</p>
				</header>
				<Button rightIcon={<FaChevronRight />} onClick={() => navigate('/gda-home')}>
					Ir al test
				</Button>
			</section>
		</main>
	)
}
