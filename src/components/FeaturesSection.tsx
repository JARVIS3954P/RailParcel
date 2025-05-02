
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Shield, Tag } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Real-time Tracking",
      description: "Track your parcel's journey at every step with our real-time tracking system.",
      icon: MapPin,
    },
    {
      title: "Quick Delivery",
      description: "Leverage the extensive railway network for faster delivery times.",
      icon: Clock,
    },
    {
      title: "Secure Handling",
      description: "Your parcels are handled with care and secured throughout transit.",
      icon: Shield,
    },
    {
      title: "Cost Effective",
      description: "Save up to 30% compared to traditional courier services.",
      icon: Tag,
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose RailParcel?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We combine the reliability of Indian Railways with modern tracking technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-railway-blue bg-opacity-10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-railway-blue" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
