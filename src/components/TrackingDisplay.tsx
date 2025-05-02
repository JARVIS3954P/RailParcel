
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface TrackingStatus {
  label: string;
  location: string;
  timestamp: string;
  description: string;
  completed: boolean;
}

export default function TrackingDisplay() {
  const [trackingId, setTrackingId] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Mock tracking statuses - would come from API in real app
  const trackingStatuses: TrackingStatus[] = [
    {
      label: "Accepted",
      location: "New Delhi Railway Station",
      timestamp: "May 1, 2025 - 14:30",
      description: "Parcel received at origin station",
      completed: true,
    },
    {
      label: "In Transit",
      location: "On Rajdhani Express (12301)",
      timestamp: "May 1, 2025 - 16:50",
      description: "Parcel loaded on train and in transit",
      completed: true,
    },
    {
      label: "Reached Junction",
      location: "Mathura Junction",
      timestamp: "May 1, 2025 - 19:15",
      description: "Train passed through junction station",
      completed: true,
    },
    {
      label: "Current Location",
      location: "Approaching Kota Junction",
      timestamp: "May 2, 2025 - 01:30",
      description: "Parcel is currently at this location",
      completed: false,
    },
    {
      label: "Destination",
      location: "Mumbai CST",
      timestamp: "Expected: May 2, 2025 - 10:30",
      description: "Final destination",
      completed: false,
    }
  ];

  const handleSearch = () => {
    if (trackingId.trim()) {
      setShowResults(true);
    }
  };
  
  const getCompletedWidth = () => {
    const totalStations = trackingStatuses.length;
    const completedStations = trackingStatuses.filter(status => status.completed).length;
    return `${(completedStations / (totalStations - 1)) * 100}%`;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Track Your Parcel</CardTitle>
        <CardDescription className="text-center">
          Enter your tracking number to get real-time updates
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex space-x-2">
          <Input
            placeholder="Enter tracking ID (e.g., RP12345678IN)"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <Button 
            onClick={handleSearch}
            className="bg-railway-blue hover:bg-railway-darkBlue whitespace-nowrap"
          >
            Track Parcel
          </Button>
        </div>

        {showResults && (
          <div className="mt-6">
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Tracking Number</p>
                  <p className="font-medium">RP12345678IN</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="font-medium text-amber-500">In Transit</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Origin</p>
                  <p className="font-medium">New Delhi</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Destination</p>
                  <p className="font-medium">Mumbai CST</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-medium mb-3">Tracking Details</h3>
            
            <div className="relative timeline-container">
              {trackingStatuses.map((status, index) => (
                <div 
                  key={index} 
                  className="flex-1 flex flex-col items-center relative"
                >
                  <div className={`station-dot ${status.completed || index === 3 ? "active" : ""}`}></div>
                  {index < trackingStatuses.length - 1 && (
                    <div className={`tracking-line ${index < 3 ? "tracking-line-completed" : ""}`}></div>
                  )}
                  {index === 3 && (
                    <Navigation className="train-icon absolute" size={20} />
                  )}
                  <p className="text-xs mt-6 text-center">{status.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-3">Status History</h3>
              <div className="space-y-4">
                {trackingStatuses.map((status, index) => (
                  <div key={index} className={`p-3 border rounded-md ${index === 3 ? "border-railway-orange bg-orange-50" : "bg-gray-50"}`}>
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{status.label}</p>
                        <p className="text-sm text-gray-600">{status.location}</p>
                        <p className="text-xs text-gray-500 mt-1">{status.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{status.timestamp}</p>
                        {index === 3 && (
                          <p className="text-xs bg-railway-orange text-white px-2 py-0.5 rounded mt-1">Current</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!showResults && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="text-railway-blue mb-4">
              <Navigation size={48} />
            </div>
            <h3 className="text-lg font-medium mb-2">Enter your tracking number</h3>
            <p className="text-gray-500 max-w-md">
              You can find your tracking number in your confirmation email or receipt
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
