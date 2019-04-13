import { Announcement } from './announcement.model';

export class Board {
    id: string;
    board_name: string;
    board_banner: string;
    announcements: Announcement[];
    description: string;
    showAsBanner: boolean;
    dateCreatedOn: Date;
    dateModifiedOn: Date;
}
