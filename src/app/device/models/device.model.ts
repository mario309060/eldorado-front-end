export class Category {
    constructor(
        public id?: number,
        public name?: string
    ) { }
}

export class Device {
    constructor(
        public id?: number,
        public color?: string,
        public partNumber?: string,
        public category?: Category
    ) { }
}

