import React from "react";

const Seat = props => {
	let useBookingSeats = seatId =>
		props.bookedSeatsData.map(item => item.id).includes(props.id, 0);
	let status = useBookingSeats(props.id);
	const handlerActive = active => {
		const info = {
			id: props.id,
			price: props.price,
			row: props.row,
			seatNum: props.seatNum,
			completed: props.completed,
		};

		if (!active) {
			info.completed = true;
			props.bookingSeats(info);
		} else {
			info.completed = false;
			props.removeSeats(info);
		}
	};

	return (
		<div
			className={status ? [" Seat Seat-selected"] : ["Seat"]}
			id={props.id}
			onClick={() => {
				handlerActive(status);
			}}
		></div>
	);
};
export default Seat;
