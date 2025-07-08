import dynamic from 'next/dynamic'

const ContactComponent = dynamic(() => import('../components/ContactComponent'), {
  loading: () => <p>Loading...</p>,
})

export default function Contact() {
  return <ContactComponent />
}