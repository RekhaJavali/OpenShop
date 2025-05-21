import React, { useState } from 'react';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'Go to Account Settings → Change Password to reset your password.'
  },
  {
    question: 'How can I contact support?',
    answer: 'You can use the contact form below or email us at support@example.com.'
  },
  {
    question: 'Where can I find my billing information?',
    answer: 'Navigate to Billing under your Profile Settings to view all invoices and payment details.'
  }
];

const HelpAndSupport = () => {
  const [search, setSearch] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold">Help & Support</h2>

      <div>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for help..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <h3 className="text-xl font-medium mb-3">Frequently Asked Questions</h3>
        <ul className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <li key={index}>
                <details className="bg-gray-100 rounded-md p-4">
                  <summary className="font-medium cursor-pointer">{faq.question}</summary>
                  <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
                </details>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No matching FAQs found.</p>
          )}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-2">Contact Support</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Describe your issue..."
            className="w-full px-4 py-2 border rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupport;
