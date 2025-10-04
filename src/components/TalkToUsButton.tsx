import { MessageSquare } from 'lucide-react';

export default function TalkToUsButton() {
  const handleClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-1/2 right-0 -translate-y-1/2 z-40 bg-red-500 hover:bg-red-600 text-white py-8 px-4 rounded-l-lg shadow-lg transition-all writing-mode-vertical transform hover:scale-105"
      style={{ writingMode: 'vertical-rl' }}
      aria-label="Talk to Us"
    >
      <span className="font-bold text-sm tracking-wider">Talk to Us</span>
    </button>
  );
}
