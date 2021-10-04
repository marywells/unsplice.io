export interface User {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  institution: string;
  picture: string;
  socialLinks: {
    github: string;
    instagram: string;
    linkedin: string;
    website: string;
  };
  userPrograms: [{ id: string; programCode: string }];
}

export interface State {
  user: User;
}

export interface MyToken {
  name: string;
  exp: number;
  userInfo: null;
  userPrograms: any;
}

export interface Module {
  name: string;
  moduleCode: string;
  desc: string;
  progress: number;
}

export interface Content {
  id: string;
  number: number;
  title: string;
  desc: string;
  completed: boolean;
  notionContent: string;
  createdAt: string;
}
