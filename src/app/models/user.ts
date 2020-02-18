export interface User {
    id: number;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    gender: string;
    blogName: string;
    created: Date;
    lastActive: any;
    description: string;
    AvatarUrl: string;
    roles?: string[];
}
