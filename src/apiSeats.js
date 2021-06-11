let data = [];

class Seats {
	price = 5;
	completed = false;
	constructor(id, row, seatNum) {
		this.id = id;
		this.row = row;
		this.seatNum = seatNum;
	}
}

for (let i = 1; i <= 40; i++) {
	for (let j = 1; j <= 20; j++) {
		data.push(new Seats(i, i, j));
	}
}

export default data;
