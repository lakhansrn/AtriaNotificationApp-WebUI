
import { Announcement } from './announcement.model';

export class Event {
    event_name: string;
    event_banner: string;
    announcements: Announcement[];
    description: string;
    showAsBanner: boolean;
}