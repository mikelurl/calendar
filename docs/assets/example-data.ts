import { AppEvents } from "./models/events";

export const ExampleEvents: AppEvents = [
    {
        id: 1,
        title: "Example Title",
        start: new Date(2019, 11, 20),
        end: new Date(2019, 11, 20),
        place: "Köln"
    },
    {
        id: 2,
        title: "Example Title",
        start: new Date(Date.now()),
        end: new Date(Date.now()),
        place: "Potzdamer Platz 3, Berlin"
    },
    {
        id: 3,
        title: "Example Title",
        start: new Date(2020, 12, 24),
        end: new Date(20, 12, 26),
        place: "München"
    },
    {
        id: 4,
        title: "Example Title",
        start: new Date(2021, 11, 20),
        end: new Date(2021, 11, 20),
        place: "Köln"
    },
    {
        id: 5,
        title: "Example Title",
        start: new Date(2021, 11, 19),
        end: new Date(2021, 11, 19),
        place: ""
    },
]