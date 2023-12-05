interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  owner: number;
  members: number[];
}

interface CardGroup {
  id: number;
  title: string;
  project: number;
  order: number;
}

interface Card {
  id: number;
  title: string;
  detail: string;
  group: number;
  creator: number;
  assignee: number;
  deadline: string;
  order: number;
}
interface TestData {
  User: User[];
  Project: Project[];
  CardGroup: CardGroup[];
  Card: Card[];
}
