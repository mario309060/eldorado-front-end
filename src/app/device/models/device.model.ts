export class Category {
    constructor(
        public id?: number,
        public name?: string
    ) { }
}

export class Device {
    constructor(
        public id?: number,
        public colorname?: string,
        public partnumber?: number,
        public categoryId?: number,
        public category?: Category
    ) { }
}

