import Header from '../components/Header'
import Tabs from '../components/Tabs'
import CardImage from '../components/CardImage'

export default function Home() {
  return (
    <div className="bg-neutral-100 relative rounded-[12px] w-full" data-name="Home">
      <div className="flex flex-col items-center justify-start w-full">
        <Header />

        <main className="w-full p-4">
          <Tabs />
          <div className="mt-6">
            <CardImage />
          </div>
        </main>
      </div>
    </div>
  )
}
