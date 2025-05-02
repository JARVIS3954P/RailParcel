
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function ParcelForm() {
  const [step, setStep] = useState(1);
  
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i === step ? "bg-railway-orange text-white" : 
                i < step ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {i < step ? "✓" : i}
            </div>
            <span className="text-xs mt-1">
              {i === 1 ? "Details" : i === 2 ? "Route" : "Payment"}
            </span>
          </div>
        ))}
        <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-4 -z-10 mx-12"></div>
      </div>
    );
  };
  
  const renderParcelDetailsStep = () => {
    return (
      <>
        <CardHeader>
          <CardTitle>Parcel Details</CardTitle>
          <CardDescription>
            Provide information about your parcel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input id="weight" type="number" placeholder="Enter parcel weight" />
            </div>
            
            <div className="space-y-2">
              <Label>Parcel Type</Label>
              <RadioGroup defaultValue="standard">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fragile" id="fragile" />
                  <Label htmlFor="fragile">Fragile</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="perishable" id="perishable" />
                  <Label htmlFor="perishable">Perishable</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="length">Length (cm)</Label>
              <Input id="length" type="number" placeholder="Length" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="width">Width (cm)</Label>
              <Input id="width" type="number" placeholder="Width" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input id="height" type="number" placeholder="Height" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe your parcel contents" 
              className="resize-none"
            />
          </div>
          
          <Button 
            onClick={handleNext} 
            className="w-full bg-railway-blue hover:bg-railway-darkBlue"
          >
            Continue to Routing
          </Button>
        </CardContent>
      </>
    );
  };
  
  const renderRouteSelectionStep = () => {
    return (
      <>
        <CardHeader>
          <CardTitle>Route Information</CardTitle>
          <CardDescription>
            Select the source and destination stations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="source">Source Station</Label>
              <Select>
                <SelectTrigger id="source">
                  <SelectValue placeholder="Select source station" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ndls">New Delhi (NDLS)</SelectItem>
                  <SelectItem value="cstm">Mumbai CST (CSTM)</SelectItem>
                  <SelectItem value="mas">Chennai Central (MAS)</SelectItem>
                  <SelectItem value="hwh">Howrah Junction (HWH)</SelectItem>
                  <SelectItem value="bza">Vijayawada Junction (BZA)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Destination Station</Label>
              <Select>
                <SelectTrigger id="destination">
                  <SelectValue placeholder="Select destination station" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ndls">New Delhi (NDLS)</SelectItem>
                  <SelectItem value="cstm">Mumbai CST (CSTM)</SelectItem>
                  <SelectItem value="mas">Chennai Central (MAS)</SelectItem>
                  <SelectItem value="hwh">Howrah Junction (HWH)</SelectItem>
                  <SelectItem value="bza">Vijayawada Junction (BZA)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pnr">PNR Number (Optional)</Label>
              <Input id="pnr" placeholder="Enter if you're traveling with the parcel" />
            </div>

            <Separator className="my-2" />
            
            <div className="pt-2">
              <p className="font-medium text-sm">Available Trains</p>
              <div className="mt-2 space-y-2">
                <div className="p-3 border rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Rajdhani Express (12301)</p>
                      <p className="text-sm text-gray-500">New Delhi → Mumbai CST</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹320</p>
                      <p className="text-xs text-gray-500">1 day delivery</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 border rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Duronto Express (12213)</p>
                      <p className="text-sm text-gray-500">New Delhi → Mumbai CST</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹280</p>
                      <p className="text-xs text-gray-500">2 days delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handlePrev}>
              Back
            </Button>
            <Button 
              onClick={handleNext} 
              className="bg-railway-blue hover:bg-railway-darkBlue"
            >
              Continue to Payment
            </Button>
          </div>
        </CardContent>
      </>
    );
  };

  const renderPaymentStep = () => {
    return (
      <>
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>
            Review and confirm your parcel delivery
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h3 className="font-medium mb-2">Delivery Summary</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-gray-500">Route:</p>
              <p>New Delhi → Mumbai CST</p>
              <p className="text-gray-500">Train:</p>
              <p>Rajdhani Express (12301)</p>
              <p className="text-gray-500">Departure:</p>
              <p>May 3, 2025 - 16:50</p>
              <p className="text-gray-500">Estimated Delivery:</p>
              <p>May 4, 2025 - 10:30</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium mb-2">Price Breakdown</h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-500">Base Fare</span>
                <span>₹250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Handling Fee</span>
                <span>₹50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">GST (18%)</span>
                <span>₹20</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₹320</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handlePrev}>
              Back
            </Button>
            <Button 
              className="bg-railway-orange hover:bg-railway-lightOrange"
            >
              Confirm & Pay
            </Button>
          </div>
        </CardContent>
      </>
    );
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <div className="relative p-4">
        {renderStepIndicator()}
        {step === 1 && renderParcelDetailsStep()}
        {step === 2 && renderRouteSelectionStep()}
        {step === 3 && renderPaymentStep()}
      </div>
    </Card>
  );
}
