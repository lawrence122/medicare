import React, { createContext, useContext, useState } from 'react';
import { ReviewItem } from '../interfaces/ReviewItem';

type GlobalContextType = {
  reviews: ReviewItem[];
  setReviews: React.Dispatch<React.SetStateAction<ReviewItem[]>>;
  addReview: (value: ReviewItem) => void;
  removeReview: (index: number) => void;
};

const GlobalContext = createContext<GlobalContextType>({
  reviews: [],
  setReviews: () => {},
  addReview: () => {},
  removeReview: () => {},
});

export const GlobalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [reviews, setReviews] = useState<ReviewItem[]>([]);
  
    const addReview = (review: ReviewItem) => {
        setReviews(prev => [...prev, review]);
    };
  
    const removeReview = (index: number) => {
        setReviews(prev => prev.filter((_, i) => i !== index));
    };
  
    return (
      <GlobalContext.Provider value={{ 
        reviews, 
        setReviews,
        addReview,
        removeReview,
      }}>
        {children}
      </GlobalContext.Provider>
    );
  };

export const useGlobal = () => useContext(GlobalContext);