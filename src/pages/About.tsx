import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Cozy Cat Cottage</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Cozy Cat Cottage Adoption Center was founded in 2004 as a no-kill, cage-free cat sanctuary. Our mission is to rescue homeless, abused, and abandoned cats and kittens, provide them with loving care, and find them permanent homes.
          </p>
          <p>
            Since our inception, we have rescued and rehomed thousands of cats, making a significant impact on the lives of both felines and their adoptive families in our community.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Facility</h2>
          <p className="mb-4">
            Our adoption center provides a cage-free environment where cats can roam freely, play, and socialize. This setup allows potential adopters to interact with the cats in a home-like setting, ensuring better matches between cats and their new families.
          </p>
          <p>
            We have separate areas for kittens, adult cats, and special needs cats, ensuring that each group receives the specific care they require.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="mb-4">
            Cozy Cat Cottage is run by a dedicated team of staff and volunteers who are passionate about animal welfare. Our team includes experienced cat care specialists, veterinary professionals, and adoption counselors.
          </p>
          <p>
            We also rely heavily on the support of our amazing volunteers who help with daily care, socialization, and various other tasks that keep our sanctuary running smoothly.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
          <p className="mb-4">
            Through our efforts, we have:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Rescued and rehomed over 10,000 cats and kittens</li>
            <li>Provided medical care and rehabilitation for countless injured and ill cats</li>
            <li>Educated the community about responsible pet ownership and the importance of spaying/neutering</li>
            <li>Collaborated with local shelters and rescue organizations to reduce cat overpopulation</li>
          </ul>
          <p>
            Your support through adoptions, donations, and volunteering helps us continue this important work and make a difference in the lives of cats in need.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;