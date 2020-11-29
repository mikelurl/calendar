export interface AppEvents extends Array<AppEvent> {}

export interface AppEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    place: string;
}

export interface AppEventDetails extends AppEvent {
    particimants: Array<string>;
    description: string;
}