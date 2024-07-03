import React, { useState, useEffect, useRef, useMemo } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const typingSpeed = 200;
  const deletingSpeed = 100;
  const delayBetweenWords = 1500;

  const words = useMemo(() => ["Developer", "Programmer", "Tech Enthusiast", "Software Engineer"], []);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
        if (letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
        if (letterIndex === currentWord.length) {
          setIsDeleting(true);
          timeoutRef.current = setTimeout(handleType, delayBetweenWords);
          return;
        }
      }
      timeoutRef.current = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    };

    timeoutRef.current = setTimeout(handleType, typingSpeed);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [letterIndex, isDeleting, wordIndex, words]);

  return (
    <p className="typewriter-container">
      I am a&nbsp; <span className="typewriter-text">{text}</span>
    </p>
  );
};

export default Typewriter;
