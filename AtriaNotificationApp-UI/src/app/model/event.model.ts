import { Announcement } from './announcement.model';

export class Event {
    id: string;
    event_name: string;
    event_banner: string;
    announcements: Announcement[];
    description: string;
    showAsBanner: boolean;
    dateCreatedOn: Date;
    dateModifiedOn: Date;
}
