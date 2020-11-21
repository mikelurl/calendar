export interface Events extends Array<Event> {}

export interface Event {
    id: number;
    title: string;
    start: Date;
    end: Date;
    place: string;
}

export interface EventDetails extends Event {
    particimants: Array<string>;
    description: string;
}