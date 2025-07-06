import React from 'react';
import { Card, CardBody } from '@shadcn/ui';

interface QuoteCardProps {
  text: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ text, author }) => (
  <Card className="bg-base-100 shadow-md">
    <CardBody>
      <p className="italic text-lg mb-2">"{text}"</p>
      <p className="text-right font-semibold">- {author}</p>
    </CardBody>
  </Card>
);

export default QuoteCard;
