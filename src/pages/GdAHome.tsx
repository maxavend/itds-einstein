
import ActionIcon from '../components/ActionIcon'
import Avatar from '../components/Avatar'
import CardImage from '../components/CardImage'
import Select from '../components/Select'
import Tabs from '../components/Tabs'
import { MdFlag, MdAssignment, MdBuild, MdDescription } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

/**
 * Página GdA/Home según layout y tokens de Figma
 */
export default function GdAHome() {
  const navigate = useNavigate()

  return (
    <main className="bg-neutral-white min-h-screen font-sans">
      <div className="flex flex-col gap-4 items-start justify-start pb-6 pt-12 w-full">
        {/* Header */}
        <div className="flex flex-col gap-6 items-start w-full px-4">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="w-56">
              <Select
                filledText="Santa Isabel"
                icon={<MdFlag className="text-theme-primary w-4 h-4" aria-label="Bandera" />}
                optional={false}
                labelText=""
                helperText={undefined}
              />
            </div>
            <div className="flex flex-row gap-3 items-center">
              <ActionIcon size="M" />
              <Avatar bgColor="bg-theme-softest" size="M">SA</Avatar>
            </div>
          </div>
          <div className="font-dm font-bold text-2xl text-neutral-strongest w-full leading-[1.2]">
            Hola, Samus <span role="img" aria-label="saludo">👋🏻</span>
          </div>
        </div>
        {/* Tabs */}
        <div className="w-full px-4">
          <Tabs
            tabs={[
              {
                label: 'Tareas',
                lIcon: true,
                iconL: <MdAssignment className="w-5 h-5" aria-label="Tareas" />,
                badge: true,
                badgeContent: 3,
                style: 'Box',
                active: true,
              },
              {
                label: 'Herramientas',
                lIcon: true,
                iconL: <MdBuild className="w-5 h-5" aria-label="Herramientas" />,
                badge: false,
                style: 'Box',
                active: false,
              },
              {
                label: 'Resumen',
                lIcon: true,
                iconL: <MdDescription className="w-5 h-5" aria-label="Resumen" />,
                badge: false,
                style: 'Box',
                active: false,
              },
            ]}
            onTabChange={() => {}}
          />
        </div>
        {/* CardImage */}
        <div className="w-full px-4 mt-4">
          <div className="cursor-pointer" onClick={() => navigate('/gestion-techos')} role="link">
            <CardImage
              title="Gestión de techos"
              description="Encuentra información de mercadería  en techos."
            />
          </div>
        </div>
      </div>
    </main>
  )
}
