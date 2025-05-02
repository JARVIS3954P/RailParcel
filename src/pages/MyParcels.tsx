
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Package, ArrowRight, MapPin } from "lucide-react";

const MyParcelsPage = () => {
  // Placeholder data - would come from API in real app
  const parcels = [
    {
      id: "RP12345678IN",
      from: "New Delhi",
      to: "Mumbai CST",
      status: "In Transit",
      date: "May 1, 2025",
      expected: "May 2, 2025"
    },
    {
      id: "RP87654321IN",
      from: "Bangalore",
      to: "Chennai",
      status: "Delivered",
      date: "April 28, 2025",
      expected: "April 29, 2025"
    }
  ];
  
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Parcels</h1>
          <p className="mt-2 text-lg text-gray-600">
            Track and manage your parcels
          </p>
        </div>
        
        {parcels.length === 0 ? (
          <Card className="text-center p-12">
            <CardContent className="pt-10">
              <div className="flex justify-center mb-4">
                <Package className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">No parcels found</h3>
              <p className="text-gray-500 mb-6">You haven't sent any parcels yet</p>
              <Button asChild className="bg-railway-blue hover:bg-railway-darkBlue">
                <Link to="/send">
                  Send your first parcel
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Recent Parcels</h2>
              <Button asChild variant="outline">
                <Link to="/send">
                  Send New Parcel
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {parcels.map((parcel) => (
                <Card key={parcel.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-medium">Parcel {parcel.id}</CardTitle>
                      <span className={`text-sm px-2 py-1 rounded ${
                        parcel.status === "Delivered" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-amber-100 text-amber-800"
                      }`}>
                        {parcel.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-railway-blue mr-1" />
                          <p className="text-sm text-gray-600">From: {parcel.from}</p>
                        </div>
                      </div>
                      <div className="mx-4">
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-railway-orange mr-1" />
                          <p className="text-sm text-gray-600">To: {parcel.to}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Shipped: {parcel.date}</span>
                      <span>Expected: {parcel.expected}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/track?id=${parcel.id}`}>
                          Track Parcel
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/parcels/${parcel.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyParcelsPage;
