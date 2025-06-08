'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import { motion } from 'framer-motion'
import Image from 'next/image'

const properties = [
  {
    id: 1,
    name: 'Luxury Villa',
    price: '$1,200,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    name: 'Modern Apartment',
    price: '$450,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
  },
  {
    id: 3,
    name: 'Family Home',
    price: '$750,000',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 4,
    name: 'Penthouse Suite',
    price: '$2,500,000',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 5,
    name: 'Beach House',
    price: '$1,800,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 6,
    name: 'Mountain View',
    price: '$950,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
  },
]

export default function Properties() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Properties"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-accent mb-4">
            Our Properties
          </h1>
          <p className="text-lg md:text-xl text-accent-light mb-8 max-w-2xl mx-auto">
            Discover our exclusive collection of premium properties
          </p>
        </motion.div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 px-4 bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-accent mb-2">{property.name}</h3>
                  <p className="text-secondary mb-4">{property.price}</p>
                  {/* <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-accent-light text-sm">Location</p>
                      <p className="text-accent">{property.location}</p>
                    </div>
                    <div>
                      <p className="text-accent-light text-sm">Beds</p>
                      <p className="text-accent">{property.beds}</p>
                    </div>
                    <div>
                      <p className="text-accent-light text-sm">Baths</p>
                      <p className="text-accent">{property.baths}</p>
                    </div>
                  </div> */}
                  <a
                    href="/contact"
                    className="inline-block bg-secondary hover:bg-secondary-light text-primary px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-accent mb-4">
              Why Choose Us
            </h2>
            <p className="text-accent-light max-w-2xl mx-auto">
              We stand out from the competition with our commitment to excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Guidance',
                description: 'Our team of experienced real estate professionals provides personalized guidance throughout your property journey.',
              },
              {
                title: 'Premium Properties',
                description: 'We curate only the finest properties that meet our high standards of quality and luxury.',
              },
              {
                title: 'Client Satisfaction',
                description: 'Your satisfaction is our priority. We work tirelessly to exceed your expectations.',
              },
              {
                title: 'Market Expertise',
                description: 'With years of experience, we have deep insights into the real estate market trends and opportunities.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-serif text-accent mb-3">{feature.title}</h3>
                <p className="text-accent-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
} 