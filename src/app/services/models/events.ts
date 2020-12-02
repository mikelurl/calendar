export interface AppEvents extends Array<AppEvent> {}
export interface AppEventsDetail extends Array<AppEventDetail> {}

export interface AppEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    place: string;
}

export interface AppEventDetail extends AppEvent {
    participants: Array<string>;
    description: string;
}