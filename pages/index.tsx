import { useState } from 'react';
import Head from 'next/head';
import { quotes, Quote } from '../data/quotes';
import QuoteCard from '../components/QuoteCard';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<Quote[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const availableTopics = Array.from(new Set(quotes.map(q => q.topic.toLowerCase())));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (topic.trim() === '') {
      // Show 3 random quotes
      const shuffled = [...quotes].sort(() => 0.5 - Math.random());
      setResults(shuffled.slice(0, 3));
    } else {
      const filtered = quotes.filter(q =>
        q.topic.toLowerCase() === topic.toLowerCase()
      );
      setResults(filtered.slice(0, 3));
    }
  };

  const handleInputChange = (value: string) => {
    setTopic(value);

    const matches = availableTopics.filter(t =>
      t.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(matches.slice(0, 5));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setTopic(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      <Head>
        <title>Quote Generator</title>
      </Head>

      <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Quote Generator</h1>

        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Enter topic (e.g., motivation, work)"
            value={topic}
            onChange={(e) => handleInputChange(e.target.value)}
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Get Quotes
          </button>

          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 mt-1 w-full bg-white shadow rounded z-10">
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </form>

        {results.length > 0 && (
          <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {results.map((q, idx) => (
              <QuoteCard key={idx} text={q.text} author={q.author} />
            ))}
          </div>
        )}

        {results.length === 0 && topic.trim() !== '' && (
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
