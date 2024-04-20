import { useState } from "react";

const starRatingContainer = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainer = {
  display: "flex",
};

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 36,
  className = "",
  message = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={starRatingContainer} className={className}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            onRate={() => handleRating(index + 1)}
            onHoverIn={() => setTempRating(index + 1)}
            onHoverOut={() => setTempRating(rating)}
            isFullStar={tempRating >= index + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === maxRating
          ? message[tempRating - 1]
          : tempRating || ""}
      </p>
    </div>
  );
}

function Star({ onRate, onHoverIn, onHoverOut, isFullStar, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      onClick={() => onRate()}
      onMouseEnter={() => onHoverIn()}
      onMouseLeave={() => onHoverOut()}
      style={starStyle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke={color}
        fill={isFullStar ? `${color}` : "none"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </span>
  );
}
