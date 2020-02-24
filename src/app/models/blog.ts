import { User } from './user';

export interface Blog {
    id: number;
    blogName: string;
    author: User;
    content: string;
}
