import React, { useState } from "react";

const Question = () => {
  // Array of questions and answers
  const faqData = [
    {
      question: "How are cryptocurrencies taxed in Australia?",
      answer:
        "The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities.",
    },
    {
      question: "What’s the difference between long-term and short-term capital gains?",
      answer:
        "The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.",
    },
    {
      question: "Do I have to pay tax on crypto-to-crypto transactions?",
      answer:
        "Yes, according to the ATO, when you trade one cryptocurrency for another, it's seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax (CGT). To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins at both the acquisition and disposal times.",
    },
    {
      question: "How do I lower my cryptocurrency taxes?",
      answer:
        "Here are the top 6 strategies for lowering your cryptocurrency taxes in Australia: 1. Hold for over 12 months to qualify for a 50% long-term CGT discount. 2. Offset gains with losses to reduce your overall tax burden. 3. Claim tax deductions if you're a crypto trader or running a crypto business. 4. Use crypto tax tools like KoinX to streamline calculations and ensure compliance. 5. Donate to charities for tax deductions. 6. Disclose all crypto transactions to avoid penalties.",
    },
    {
      question: "Does the ATO track crypto?",
      answer:
        "Yes, the ATO has robust tracking capabilities for cryptocurrency transactions, including data from exchanges and wallets since 2014. Through their data matching program, they can access data from service providers like Binance and CoinJar to track your crypto activities.",
    },
    // Add other questions here...
  ];

  // State for managing the expanded state of each FAQ
  const [expanded, setExpanded] = useState(null);

  // Function to toggle the answer visibility
  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className=" w-full mx-auto  bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h1>

      {/* Most Frequently Asked Question Section */}

      {/* FAQ List */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-sm hover:bg-blue-50 transition-all ease-in-out"
          >
            <div
              onClick={() => toggleAnswer(index)}
              className="flex justify-between cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-blue-600">{`${index + 1}. ${faq.question}`}</h2>
              <span className="text-gray-500 text-xl">
                {expanded === index ? "−" : "+"}
              </span>
            </div>
            {expanded === index && (
              <p className="text-gray-700 mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
