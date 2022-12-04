declare class JDate {
    d: Date;
    constructor(date?: Date);
    getMonthName(): string;
    getShortMonthName(): string;
    formatDate(format: string): string;
}
export { JDate };
