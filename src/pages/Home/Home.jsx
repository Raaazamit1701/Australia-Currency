import React from "react";
import { AdsBanner, TaxCalutaor } from "../../components";
import Question from "../../components/Qusetion/Question";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#e6ebf1] to-[#f7f9fc] pb-10 min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 flex-wrap justify-center md:flex-nowrap">
          {/* Tax Calculator Section */}
          <div className="bg-white p-8 md:w-[60%] w-full rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <TaxCalutaor />
          </div>

          {/* Ads Banner Section */}
          <div className="md:w-[30%] w-full h-fit rounded-lg shadow-xl p-6 bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <AdsBanner />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-xl">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default Home;
