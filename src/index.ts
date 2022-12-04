const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const shortMonthNames = [
	"Jan",
	"Feb",
	"March",
	"April",
	"May",
	"June",
	"July",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec"
];

class JDate {
	d: Date;
	constructor(date?: Date) {
		this.d = date ?? new Date();
	}
	getMonthName(): string {
		return monthNames[this.d.getMonth()];
	}
	getShortMonthName(): string {
		return shortMonthNames[this.d.getMonth()];
	}
	formatDate(format: string): string {
		return format
			.replace("%Y", String(this.d.getFullYear())) // Year
			.replace("%y", String(this.d.getFullYear()).slice(-2)) // Short year
			.replace("%f", String(this.d.getMonth() + 1)) // Month
			.replace("%m", String(this.d.getMonth() + 1).padStart(2, "0")) // Padded month
			.replace("%B", this.getMonthName()) // Month name
			.replace("%b", this.getShortMonthName()) // Short month name
			.replace("%e", String(this.d.getDate())) // Date
			.replace("%d", String(this.d.getDate()).padStart(2, "0")) // Padded date
			.replace("%H", String(this.d.getHours()).padStart(2, "0")) // Padded hours
			.replace("%M", String(this.d.getMinutes()).padStart(2, "0")) // Padded minutes
			.replace("%S", String(this.d.getSeconds()).padStart(2, "0")) // Padded seconds
	}
}

export { JDate }
