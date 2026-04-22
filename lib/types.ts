export interface QuizOption {
  id: string;
  text: string;
  scores: Record<string, number>; // resultId -> score
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export interface QuizResult {
  id: string;
  title: string;
  description: string;
  emoji: string;
  shareText: string;
  color: string; // tailwind gradient class
}

export interface Quiz {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  coverColor: string;
  category: string;
  tags: string[];
  questions: QuizQuestion[];
  results: QuizResult[];
  createdAt: string;
  isNew?: boolean;
  isTrending?: boolean;
}
