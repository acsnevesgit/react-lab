import { useState, useEffect } from 'react';

const Typewriter = ({ content, speed }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent((displayedContent) => displayedContent + content[index])
  }, [index]);

  return <p className='type-writer'>{displayedContent}</p>;
};

export default Typewriter;