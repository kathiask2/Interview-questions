export type CategoryId =
  | "nodejs"
  | "react"
  | "css"
  | "sql"
  | "problems";

export type QAItem = {
  id: string;
  question: string;
  answer: string;
  code?: string;
  tags?: string[];
};

export type Category = {
  id: CategoryId;
  title: string;
  shortTitle: string;
  description: string;
  items: QAItem[];
};
