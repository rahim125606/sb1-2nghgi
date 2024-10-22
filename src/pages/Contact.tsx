import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="mb-4 flex items-center">
              <MapPin className="mr-2" />
              <p>62 Village Pointe Drive, Powell, OH 43065</p>
            </div>
            <div className="mb-4 flex items-center">
              <Phone className="mr-2" />
              <p>(614) 336-8510</p>
            </div>
            <div className="mb-4 flex items-center">
              <Mail className="mr-2" />
              <p>info@cozycatcottage.org</p>
            </div>
            <h3 className="text-xl font-semibold mb-2">Hours of Operation</h3>
            <p>Monday - Friday: 11am - 3pm</p>
            <p>Saturday: 11am - 4pm</p>
            <p>Sunday: 12pm - 4pm</p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input type="text" id="subject" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full p-2 border rounded" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </section>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.3964623440135!2d-83.09099638459657!3d40.19103397939202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838f3b2a7b2b2b7%3A0x8b8b8b8b8b8b8b8b!2sCozy%20Cat%20Cottage%20Adoption%20Center!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;