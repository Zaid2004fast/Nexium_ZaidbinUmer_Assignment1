export interface Quote {
  topic: string;
  text: string;
  author: string;
}

export const quotes: Quote[] = [
  { topic: 'motivation', text: "The only way to achieve the impossible is to believe it’s possible.", author: "Charles Kingsleigh" },
  { topic: 'motivation', text: "Don’t limit your challenges. Challenge your limits.", author: "Jerry Dunn" },
  { topic: 'motivation', text: "Push yourself because no one else is going to do it for you.", author: "Unknown" },
  { topic: 'inspiration', text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { topic: 'inspiration', text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
  { topic: 'inspiration', text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { topic: 'life', text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
  { topic: 'life', text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { topic: 'life', text: "Get busy living or get busy dying.", author: "Stephen King" }
];
