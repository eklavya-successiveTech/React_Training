import dynamic from 'next/dynamic'

const HomeComponent = dynamic(() => import('./components/HomeComponent'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return <HomeComponent />
}