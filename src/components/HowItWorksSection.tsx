
import { Package, Navigation, Train, MapPin } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Package,
      title: "Book Your Parcel",
      description: "Enter parcel details, dimensions and choose pickup/delivery locations."
    },
    {
      icon: Train,
      title: "Railway Transport",
      description: "Your parcel travels via the Indian Railway network to its destination."
    },
    {
      icon: Navigation,
      title: "Real-time Tracking",
      description: "Track your parcel's journey in real-time with our tracking system."
    },
    {
      icon: MapPin,
      title: "Secure Delivery",
      description: "Parcel is delivered to the recipient at the destination station."
    }
  ];
  
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our peer-to-peer parcel delivery system is simple, secure and efficient
          </p>
        </div>
        
        <div className="relative">
          {/* The connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-railway-blue bg-opacity-20 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <h3 className="text-xl font-bold text-railway-blue mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="mx-4 my-4 md:my-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-railway-blue flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
