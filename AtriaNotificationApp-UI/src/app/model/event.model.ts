import { Annoucement } from './annoucement.model';

export class Event {
    event_name: string;
    event_banner: string;
    annoucements: Annoucement[];
    description: string;
    showAsBanner: boolean;
}
