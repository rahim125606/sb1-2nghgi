import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Welcome to Cozy Cat Cottage</h1>
          <p className="text-xl text-center mb-8">Cozy Cat Cottage Adoption Center is a non-profit, 501(c)(3), no-kill organization that provides refuge, aid, and care for abandoned, injured, abused or lost cats and kittens in Central Ohio, while finding them permanent, responsible, loving homes.

</p>
          <div className="flex justify-center">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cute cat" className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">Cozy Cat Cottage is dedicated to rescuing and caring for homeless, abused, and abandoned cats. We provide a safe haven and work tirelessly to find loving forever homes for our feline friends.</p>
            <Link to="/about" className="text-blue-600 hover:text-blue-800">Learn More</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Adopt a Cat</h2>
            <p className="mb-4">Give a loving home to a cat in need. Our adoption process is designed to ensure the best match between cats and their new families.</p>
            <Link to="/adopt" className="text-blue-600 hover:text-blue-800">View Adoptable Cats</Link>
          </div>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How You Can Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
              <p className="mb-4">Join our team of dedicated volunteers and make a difference in the lives of cats.</p>
              <Link to="/volunteer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Volunteer Now</Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Donate</h3>
              <p className="mb-4">Your generous donations help us continue our mission of rescuing and caring for cats.</p>
              <Link to="/donate" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Donate</Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Foster</h3>
              <p className="mb-4">Provide a temporary home for cats in need and help them prepare for adoption.</p>
              <Link to="/volunteer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Foster a Cat</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;