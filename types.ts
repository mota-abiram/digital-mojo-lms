export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  department: string;
  joinDate: string;
  progress?: {
    [courseId: string]: {
      completedModules: string[];
      lastUpdated: string;
    }
  };
}

export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  duration: string;
  isCompleted: boolean;
  type: 'video' | 'quiz' | 'reading';
  videoUrl?: string;
}

export interface CourseSection {
  id: string;
  title: string;
  modules: CourseModule[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  image: string;
  category: 'mandated' | 'role-specific' | 'optional';
  dueDate?: string;
  sections: CourseSection[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export interface Quiz {
  id: string;
  title: string;
  moduleId: string;
  totalQuestions: number;
  timeLimit: string; // e.g. "15:00"
  passingScore?: number;
  questions: Question[];
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'alert' | 'event';
}