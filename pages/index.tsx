import { useState } from 'react';
import Head from 'next/head';
import { quotes, Quote } from '../data/quotes';
import QuoteCard from '../components/QuoteCard';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<Quote[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = quotes.filter(q => q.topic.toLowerCase() === topic.toLowerCase());
    setResults(filtered.slice(0, 3));
  };

  return (
    <>
      <Head>
        <title>Quote Generator</title>
      </Head>

      <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Quote Generator</h1>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Enter topic (e.g., motivation, life)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Get Quotes
          </button>
        </form>

        {results.length > 0 && (
          <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {results.map((q, idx) => (
              <QuoteCard key={idx} text={q.text} author={q.author} />
            ))}
          </div>
        )}

        {results.length === 0 && topic && (
          <p className="mt-8 text-red-600 text-center">
            No quotes found for "<span className="font-semibold">{topic}</span>". Try another topic.
          </p>
        )}

        <footer className="mt-16 text-sm text-gray-600">
          Made by <span className="font-semibold">Zaid Bin Umer</span>
        </footer>
      </div>
    </>
  );
}
