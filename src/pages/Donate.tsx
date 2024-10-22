import React from 'react';

const Donate: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Support Cozy Cat Cottage</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Donate?</h2>
          <p className="mb-4">
            Your generous donations help us continue our mission of rescuing and caring for homeless, abused, and abandoned cats. Every contribution, no matter the size, makes a significant impact on the lives of our feline friends.
          </p>
          <p>
            Your donations support:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Food, litter, and supplies for our cats</li>
            <li>Veterinary care, including spaying/neutering and vaccinations</li>
            <li>Facility maintenance and improvements</li>
            <li>Community outreach and education programs</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Ways to Donate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">One-Time Donation</h3>
              <p className="mb-4">Make a one-time donation to support our immediate needs.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Donate Now
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Monthly Giving</h3>
              <p className="mb-4">Become a sustaining donor with a monthly contribution.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Set Up Monthly Donation
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Wish List</h3>
              <p>Donate items from our wish list to directly support our cats' needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Sponsor a Cat</h3>
              <p>Provide ongoing support for a specific cat in our care.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Legacy Giving</h3>
              <p>Include Cozy Cat Cottage in your estate planning.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
          <p className="mb-4">
            We are committed to using your donations responsibly and transparently. As a registered 501(c)(3) non-profit organization, your contributions are tax-deductible to the fullest extent allowed by law.
          </p>
          <p>
            Thank you for your support in helping us create a better world for cats in need!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Donate;