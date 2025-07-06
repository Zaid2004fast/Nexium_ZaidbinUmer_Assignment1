import { useState } from 'react';
import Head from 'next/head';
import { quotes, Quote } from '../data/quotes';
import QuoteCard from '../components/QuoteCard';
import { Input } from '@shadcn/ui';
import { Button } from '@shadcn/ui';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<Quote[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = quotes.filter(q => q.topic.toLowerCase() === topic.toLowerCase());
    setResults(filtered.slice(0, 3));
  };

  return (
    
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">Quote Generator</h1>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          placeholder="Enter topic (e.g., life, motivation, inspiration)"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          className="w-64"
        />
        <Button type="submit">Get Quotes</Button>
      </form>

      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
        {results.map((q, idx) => (
          <QuoteCard key={idx} text={q.text} author={q.author} />
        ))}
      </div>

      {results.length === 0 && topic && (
        <p className="mt-6 text-red-600">No quotes found for "{topic}". Try another topic.</p>
      )}
    </div>
  );
}
