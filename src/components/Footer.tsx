import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Visit us</h3>
            <p>10344 Sawmill Road</p>
            <p>Powell, Ohio 43065</p>
            <a href="https://goo.gl/maps/your-google-maps-link" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View in Google Maps</a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p>Weekdays: 10am - 2pm, 5:30pm - 7:30pm</p>
            <p>Saturday: 11:00am - 3:00pm</p>
            <p>Sunday: 1:30pm - 4:30pm</p>
            <p className="mt-2">* Tuesday evening reserved for <Link to="/book-buddies" className="text-blue-400 hover:underline">Book Buddies Reading Program</Link> only</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="flex items-center mb-2"><MapPin size={18} className="mr-2" /> P.O. Box 283, Powell, Ohio 43065-0283</p>
            <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> <a href="tel:6143368510" className="hover:underline">614.336.8510</a></p>
            <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> Fax: 614.336.8515</p>
            <p className="flex items-center mb-2"><Mail size={18} className="mr-2" /> <a href="mailto:info@cozycatcottage.org" className="hover:underline">info@cozycatcottage.org</a></p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-4">Connect with us</h3>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.facebook.com/cozycatcottage" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
            <a href="https://www.instagram.com/cozycatcottage" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <img src="/path-to-greatnonprofits-badge.png" alt="GreatNonprofits Top-Rated 2022" className="h-16" />
            <img src="/path-to-best-of-2022-award.png" alt="Best of 2022 Award" className="h-16" />
          </div>
          <p>&copy; 2024 Cozy Cat Cottage. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;