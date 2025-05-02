
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Search, Clock, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-railway-blue overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-railway-blue sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-railway-blue transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left px-4 sm:px-8 xl:pl-0">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Parcel delivery via</span>
                <span className="block text-railway-orange">Indian Railways</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Fast, reliable and cost-effective parcel delivery leveraging the extensive Indian railway network. Track your parcels in real-time and enjoy hassle-free delivery.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button asChild size="lg" className="w-full bg-railway-orange hover:bg-railway-lightOrange">
                    <Link to="/send">Send a Parcel</Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button asChild variant="outline" size="lg" className="w-full bg-white text-railway-blue hover:bg-gray-100">
                    <Link to="/track">Track Parcel</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-railway-blue via-railway-darkBlue to-railway-darkBlue flex items-center justify-center">
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl">
            <img
              className="w-full max-w-md"
              src="https://www.irctc.co.in/nget/assets/images/logo.png"
              alt="Indian Railways"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
