export interface QuestionShape {
  body: string;
  createdAt: number;
  isEdited: boolean;
  isRead: boolean;
  title: string;
  uid: string;
}

export interface AnswerShape {
  _id: string;
  body: string;
  createdAt: number;
  dislikes: string[];
  isEdited: boolean;
  likes: string[];
  qid: string;
  uid: string;
  editedAt?: number;
}
