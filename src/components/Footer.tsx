
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-railway-darkBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-xl">Rail</span>
              <span className="text-railway-orange font-bold text-xl">Parcel</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leveraging Indian Railways for cost-effective, real-time trackable, and secure parcel delivery services.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/send" className="text-gray-300 hover:text-white text-sm">Send a Parcel</Link></li>
              <li><Link to="/track" className="text-gray-300 hover:text-white text-sm">Track Parcel</Link></li>
              <li><Link to="/rates" className="text-gray-300 hover:text-white text-sm">Shipping Rates</Link></li>
              <li><Link to="/coverage" className="text-gray-300 hover:text-white text-sm">Coverage Areas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white text-sm">Careers</Link></li>
              <li><Link to="/partner" className="text-gray-300 hover:text-white text-sm">Become a Partner</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-gray-300 hover:text-white text-sm">Refund Policy</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white text-sm">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} RailParcel. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                A project for peer-to-peer parcel delivery via Indian Railways
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
