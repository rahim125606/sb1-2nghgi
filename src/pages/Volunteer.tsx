import React from 'react';

const Volunteer: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Volunteer at Cozy Cat Cottage</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Volunteer?</h2>
          <p className="mb-4">
            Volunteering at Cozy Cat Cottage is a rewarding experience that allows you to make a real difference in the lives of cats in need. Our volunteers are essential to our mission and help us provide the best possible care for our feline residents.
          </p>
          <p>
            As a volunteer, you'll have the opportunity to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Interact with and socialize cats</li>
            <li>Assist with daily care and feeding</li>
            <li>Help with adoption events and administrative tasks</li>
            <li>Contribute to the overall well-being of our cats</li>
            <li>Meet like-minded animal lovers and make new friends</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Cat Care</h3>
              <p>Help with feeding, grooming, and providing enrichment activities for our cats.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Adoption Counselor</h3>
              <p>Assist potential adopters in finding their perfect feline companion.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Foster Care</h3>
              <p>Provide a temporary home for cats or kittens in need of extra care.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Event Support</h3>
              <p>Help organize and run adoption events and fundraisers.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Volunteer Requirements</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Must be at least 16 years old (13-15 with parent/guardian)</li>
            <li>Commit to at least 2 hours per week for a minimum of 3 months</li>
            <li>Attend a volunteer orientation and training session</li>
            <li>Have a love for cats and a passion for animal welfare</li>
            <li>Be reliable, punctual, and able to follow instructions</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Ready to Volunteer?</h2>
          <p className="mb-4">
            If you're interested in volunteering at Cozy Cat Cottage, please fill out our volunteer application form. We'll review your application and contact you to schedule an orientation.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Volunteer Application
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Volunteer;