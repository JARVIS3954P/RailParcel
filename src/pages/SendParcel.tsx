
import ParcelForm from "@/components/ParcelForm";

const SendParcelPage = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Send a Parcel</h1>
          <p className="mt-2 text-lg text-gray-600">
            Complete the form below to book your parcel delivery
          </p>
        </div>
        
        <ParcelForm />
      </div>
    </div>
  );
};

export default SendParcelPage;
