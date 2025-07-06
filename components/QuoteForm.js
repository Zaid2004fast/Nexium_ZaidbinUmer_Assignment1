import { useState } from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

export default function QuoteForm({ onSearch }) {
  const [topic, setTopic] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(topic);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <label htmlFor="topic" className="block text-sm font-medium mb-1">
          Enter a topic:
        </label>
        <Input
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. life, success"
        />
      </div>
      <div className="self-end">
        <Button type="submit">Generate</Button>
      </div>
    </form>
  );
}
