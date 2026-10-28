/**
 * QuiznGroww TypeScript Type Contracts
 */

export type Difficulty = 'easy' | 'medium' | 'hard';
export type GameMode = 'standard' | 'blitz' | 'zen' | 'survival';

export interface Question {
  _id: string;
  topic: string;
  difficulty: Difficulty;
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

/** Client-safe question where correctAnswer is stripped for anti-cheat */
export interface ClientQuestion {
  _id: string;
  topic: string;
  difficulty: Difficulty;
  questionText: string;
  options: string[];
}

export interface UserSession {
  id: string;
  google_id?: string;
  email: string;
  name: string;
  avatar?: string;
  quizzes_taken: number;
  total_score: number;
  total_questions: number;
  accuracy: number;
  current_streak: number;
  best_streak: number;
}

export interface QuizPerformanceRecord {
  id: string;
  user_id: string;
  user_name: string;
  topic: string;
  difficulty: Difficulty;
  mode: GameMode;
  score: number;
  total_questions: number;
  percentage: number;
  time_taken_seconds: number;
  created_at: string;
}

export interface AIGenerateRequest {
  topic: string;
  difficulty?: Difficulty;
  count?: number;
  contextText?: string;
}

export interface AIGenerateResponse {
  success: boolean;
  topic: string;
  count: number;
  questions: ClientQuestion[];
  source: 'gemini' | 'mock-fallback';
}
