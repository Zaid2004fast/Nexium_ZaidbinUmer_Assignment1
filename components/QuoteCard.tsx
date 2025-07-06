import React from 'react';

interface QuoteCardProps {
  text: string;
  author: string;
}

export default function QuoteCard({ text, author }: QuoteCardProps) {
  return (
    <div className="bg-white border-l-4 border-primary p-4 rounded shadow hover:scale-[1.01] transition">
      <p className="italic text-lg text-gray-800">"{text}"</p>
      <p className="text-right mt-2 font-semibold text-gray-700">- {author}</p>
    </div>
  );
}
