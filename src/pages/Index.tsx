
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <FeaturesSection />
      
      <HowItWorksSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-railway-darkBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Trusted Delivery Network</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Leveraging the vast Indian Railways network for efficient parcel delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-railway-orange">7,325+</p>
              <p className="mt-2 text-gray-300">Railway Stations</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-railway-orange">67,956</p>
              <p className="mt-2 text-gray-300">Route Kilometers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-railway-orange">13,169</p>
              <p className="mt-2 text-gray-300">Daily Trains</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-railway-orange">30%</p>
              <p className="mt-2 text-gray-300">Cost Savings</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-railway-blue to-railway-darkBlue rounded-2xl shadow-xl p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to send your parcel?</h2>
                <p className="mt-2 text-lg text-gray-300 max-w-3xl">
                  Experience cost-effective, reliable and real-time trackable parcel delivery with RailParcel.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:flex-shrink-0">
                <Button asChild size="lg" className="w-full md:w-auto bg-railway-orange hover:bg-railway-lightOrange">
                  <Link to="/send">
                    Send a Parcel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What types of parcels can I send?",
                a: "You can send non-perishable items that comply with railway regulations. There are restrictions on hazardous materials, flammables, and illegal substances."
              },
              {
                q: "How is the cost calculated?",
                a: "The cost is calculated based on parcel weight, dimensions, distance between stations, and train availability. Our system automatically finds the most cost-effective route."
              },
              {
                q: "How can I track my parcel?",
                a: "You can track your parcel in real-time using the tracking number provided at booking. Our system integrates with IRCTC to provide accurate location updates."
              },
              {
                q: "What happens if my parcel is lost or damaged?",
                a: "All parcels are insured up to ₹5,000. You can purchase additional insurance during booking for higher value items."
              },
              {
                q: "How long does delivery take?",
                a: "Delivery time depends on the train schedules and distance. Typically, parcels arrive within 1-3 days for most routes across India."
              },
              {
                q: "Do I need to be traveling on the train with my parcel?",
                a: "No, our service does not require you to travel. However, if you are traveling, you can provide your PNR for potential faster delivery options."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/faq" className="text-railway-blue hover:text-railway-darkBlue font-medium inline-flex items-center">
              View all FAQs
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
