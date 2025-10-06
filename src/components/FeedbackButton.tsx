import { Star } from 'lucide-react';

export default function FeedbackButton() {
  const handleClick = () => {
    window.open('https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-1/2 right-0 -translate-y-1/2 mt-32 z-40 bg-emerald-600 hover:bg-emerald-700 text-white py-8 px-4 rounded-l-lg shadow-lg transition-all writing-mode-vertical transform hover:scale-105"
      style={{ writingMode: 'vertical-rl' }}
      aria-label="Feedback"
    >
      <span className="font-bold text-sm tracking-wider">Feedback</span>
    </button>
  );
}
