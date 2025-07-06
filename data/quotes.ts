export interface Quote {
  text: string;
  author: string;
  topic: string;
}

export const quotes: Quote[] = [
  // 🟣 Motivation
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    topic: "motivation",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    topic: "motivation",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    topic: "motivation",
  },

  // 🟡 Work
  {
    text: "Choose a job you love, and you will never have to work a day in your life.",
    author: "Confucius",
    topic: "work",
  },
  {
    text: "Pleasure in the job puts perfection in the work.",
    author: "Aristotle",
    topic: "work",
  },
  {
    text: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke",
    topic: "work",
  },

  // 🔴 Fear
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
    topic: "fear",
  },
  {
    text: "Fear defeats more people than any other one thing in the world.",
    author: "Ralph Waldo Emerson",
    topic: "fear",
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    topic: "fear",
  },

  // 🟢 Success
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
    topic: "success",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    topic: "success",
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    topic: "success",
  },
];
