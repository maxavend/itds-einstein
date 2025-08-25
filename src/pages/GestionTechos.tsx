import { useNavigate } from 'react-router-dom'
// ...existing code... (Avatar/Button removed because header uses SVG + text from Figma)
import NavigationListItem from '../components/NavigationListItem'
import { FaBoxOpen, FaSearch, FaPrint, FaFileAlt } from 'react-icons/fa'

/**
 * Página de detalle 'Gestión de techos' (landing desde la Card)
 * Diseño base reproducido para navegación desde GdAHome
 */
export default function GestionTechos() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-neutral-white font-sans p-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <header className="box-border flex flex-col gap-6 items-start justify-start px-4 py-0 w-full">
          <div className="relative shrink-0 size-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Volver"
              className="absolute inset-0 flex items-center justify-center p-0 bg-transparent"
            >
              <div className="absolute inset-[18%]">
                {/* Action icon SVG (bell-like) taken from Figma node */}
                <svg className="w-4 h-4 text-neutral-default" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.4 8.575L8.3 13.475C8.5 13.675 8.59583 13.9083 8.5875 14.175C8.57917 14.4417 8.475 14.675 8.275 14.875C8.075 15.0583 7.84167 15.1542 7.575 15.1625C7.30833 15.1708 7.075 15.075 6.875 14.875L0.275 8.275C0.175 8.175 0.104167 8.06667 0.0625 7.95C0.0208333 7.83333 0 7.70833 0 7.575C0 7.44167 0.0208333 7.31667 0.0625 7.2C0.104167 7.08333 0.175 6.975 0.275 6.875L6.875 0.275C7.05833 0.0916667 7.2875 0 7.5625 0C7.8375 0 8.075 0.0916667 8.275 0.275C8.475 0.475 8.575 0.7125 8.575 0.9875C8.575 1.2625 8.475 1.5 8.275 1.7L3.4 6.575H14.575C14.8583 6.575 15.0958 6.67083 15.2875 6.8625C15.4792 7.05417 15.575 7.29167 15.575 7.575C15.575 7.85833 15.4792 8.09583 15.2875 8.2875C15.0958 8.47917 14.8583 8.575 14.575 8.575H3.4Z" fill="currentColor" />
                </svg>
              </div>
            </button>
          </div>
          <div className="font-dm font-bold text-[24px] text-neutral-strongest leading-[1.2]" style={{ width: 'min-content' }}>
            Gestión de techos
          </div>
        </header>

        <section className="bg-neutral-white rounded-2xl p-0">
          <div className="flex flex-col gap-3 p-0">
            <NavigationListItem title="Crear UA para techos" subtitle="Identifica la mercadería almacenada en altura" icon={<FaBoxOpen className="w-5 h-5 text-neutral-default" />} onClick={() => {}} />
            <NavigationListItem title="Búsqueda de productos" subtitle="Encuentra productos o modifica el contenido de la UA" icon={<FaSearch className="w-5 h-5 text-neutral-default" />} onClick={() => {}} />
            <NavigationListItem title="Imprimir ubicación" subtitle="Registra la posición de la mercadería almacenada en techos" icon={<FaPrint className="w-5 h-5 text-neutral-default" />} onClick={() => {}} />
            <NavigationListItem title="Generar informe" subtitle="Crea un archivo Excel con toda la información referente a las UAs" icon={<FaFileAlt className="w-5 h-5 text-neutral-default" />} onClick={() => {}} />
          </div>
        </section>
      </div>
    </main>
  )
}
