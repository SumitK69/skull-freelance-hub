
import { useState } from 'react';

type EmojiRatingProps = {
  initialRating?: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
};

const emojis = ['💀', '😢', '😐', '😊', '🔥'];

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
    <div className="flex space-x-2 items-center">
      {emojis.map((emoji, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            className={`emoji-rating ${
              (hoverRating || rating) >= ratingValue
                ? 'opacity-100 scale-110'
                : 'opacity-50'
            } ${readOnly ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={() => handleRatingChange(ratingValue)}
            onMouseEnter={() => !readOnly && setHoverRating(ratingValue)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

export default EmojiRating;
