import { AppEventsDetail } from 'src/app/services/models/events'

export const ExampleEventsDetail: AppEventsDetail = [
    {
        id: 1,
        title: "Example Event (Read description)",
        start: new Date(Date.now()),
        end: new Date(Date.now()),
        place: "Europe",
        description: "All events unencrypted saved in your local browser storage. This is just a test app!",
        participants: []
    }
]