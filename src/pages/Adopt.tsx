import React from 'react';

const Adopt: React.FC = () => {
  const adoptableCats = [
    { name: 'Whiskers', age: '2 years', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { name: 'Mittens', age: '1 year', image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { name: 'Luna', age: '3 years', image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { name: 'Oliver', age: '6 months', image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Adopt a Cat</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Adoption Process</h2>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">Browse our available cats below or visit our adoption center</li>
            <li className="mb-2">Fill out an adoption application</li>
            <li className="mb-2">Meet with our adoption counselors for an interview</li>
            <li className="mb-2">If approved, complete the adoption paperwork and pay the adoption fee</li>
            <li>Take your new furry friend home!</li>
          </ol>
          <p>
            Our adoption fee is $100 for adult cats and $150 for kittens. This fee covers spaying/neutering, vaccinations, microchipping, and initial veterinary care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Available Cats</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adoptableCats.map((cat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                <p className="text-gray-600">{cat.age}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Ready to Adopt?</h2>
          <p className="mb-4">
            If you're ready to give a loving home to one of our cats, please visit our adoption center or contact us to start the adoption process.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Adopt;