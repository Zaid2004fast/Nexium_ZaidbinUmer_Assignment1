import Head from 'next/head';
import { useState } from 'react';
import QuoteForm from '../components/QuoteForm';
import { quotes } from '../data/quotes';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (t) => {
    const filtered = quotes.filter(q =>
      q.topic.toLowerCase().includes(t.toLowerCase())
    );
    if (filtered.length >= 3) {
      setResults(filtered.slice(0, 3));
    } else {
      const shuffled = [...quotes].sort(() => 0.5 - Math.random());
      setResults(shuffled.slice(0, 3));
    }
  };

  return (
    <>
      <Head>
        <title>Quote Generator by Zaid</title>
        <meta name="description" content="Get 3 random quotes about any topic using this fun generator!" />
      </Head>

      <div className="min-h-screen bg-base-200 p-8">
        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4 text-center text-primary">Quote Generator</h1>
          <QuoteForm onSearch={handleSearch} />
          <div className="mt-6 space-y-4">
            {results.map((q, idx) => (
              <div key={idx} className="quote-card">
                <p className="italic text-lg text-gray-800">"{q.text}"</p>
                <p className="text-right mt-2 font-semibold text-secondary">- {q.author}</p>
              </div>
            ))}
          </div>

          <footer className="mt-12 text-center text-sm text-gray-500">
            Made by <span className="font-semibold text-blue-600">Zaid Bin Umer</span>
          </footer>
        </div>
      </div>
    </>
  );
}