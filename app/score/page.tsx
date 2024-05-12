'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const ScorePage: React.FC = () => {
  const score = useSearchParams().get('score');
  

  return (
    <div>
      <h1>Your Score</h1>
      <p>{score}</p>
      <p>Congratulations! You completed the quiz.</p>
    </div>
  );
};

export default ScorePage;
