import { Announcer } from './announcer.model';

export class Content {
    title: string;
    posted: string;
    image: string;
    postedBy: Announcer;
    description: string;
    isApproved: boolean;
    isActive: boolean;
}
