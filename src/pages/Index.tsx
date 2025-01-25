import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const donationRef = useRef<HTMLDivElement>(null);

  const scrollToDonation = () => {
    donationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Share Your Food, Share Your Love</h1>
          <p className="text-xl mb-8">Help us fight hunger by donating your excess food</p>
          <Button 
            onClick={scrollToDonation}
            className="bg-white text-orange-600 hover:bg-orange-100 font-semibold px-8 py-3 rounded-lg text-lg"
          >
            Donate Food Now
          </Button>
        </div>
      </div>

      {/* Other content sections */}
      <div className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">We aim to reduce food waste and help those in need.</p>
          <p className="text-lg text-gray-700 mb-4">Join us in making a difference in our community.</p>
        </div>
      </div>

      {/* Donation Section */}
      <div ref={donationRef} className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Donate? It's Simple!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Step 1</h3>
              <p>Gather your excess food items.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Step 2</h3>
              <p>Contact us to arrange a pickup or drop-off.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Step 3</h3>
              <p>Feel good knowing you've helped someone in need!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
