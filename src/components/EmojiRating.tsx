
import { useState } from 'react';
import { Skull } from 'lucide-react';

type EmojiRatingProps = {
  initialRating?: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
};

const EmojiRating = ({ initialRating = 0, onChange, readOnly = false }: EmojiRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    if (readOnly) return;
    
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <div className="flex space-x-1 items-center">
      {[1, 2, 3, 4, 5].map((value) => {
        return (
          <span
            key={value}
            className={`emoji-rating ${
              (hoverRating || rating) >= value
                ? 'text-skull-purple opacity-100 scale-110'
                : 'text-gray-400 opacity-50'
            } ${readOnly ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={() => handleRatingChange(value)}
            onMouseEnter={() => !readOnly && setHoverRating(value)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
          >
            <Skull size={18} />
          </span>
        );
      })}
    </div>
  );
};

export default EmojiRating;
