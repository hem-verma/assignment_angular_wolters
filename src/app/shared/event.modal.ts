export class Event {
    public id: number;

    public description: string;

    public eventType: string;

    public eventDate: string;

    public customerName: string;

    constructor(id: number, desc: string, eventType: string, eventDate: string, customerName: string ) {
        this.id = id;
        this.description = desc;
        this.eventType = eventType;
        this.eventDate = eventDate;
        this.customerName = customerName;
    }
}
