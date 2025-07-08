import dynamic from 'next/dynamic'

const AboutComponent = dynamic(() => import('../components/AboutComponent'), {
  loading: () => <p>Loading...</p>,
})

export default function About() {
  return <AboutComponent />
}