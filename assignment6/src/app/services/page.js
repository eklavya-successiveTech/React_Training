import dynamic from 'next/dynamic'

const ServicesComponent = dynamic(() => import('../components/ServicesComponent'), {
  loading: () => <p>Loading...</p>,
})

export default function Services() {
  return <ServicesComponent />
}