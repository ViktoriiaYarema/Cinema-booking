import React from "react";
import "./App.scss";
import Hall from "./components/Hall";
import BookCard from "./components/BookCard";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

const App = props => {
	return (
		<Container>
			<Row>
				<Col>
					<Hall
						bookedSeatsData={props.bookedSeats}
						bookingSeats={props.bookingSeats}
						removeSeats={props.removeSeats}
					/>
					<BookCard
						bookedSeatsData={props.bookedSeats}
						removeSeats={props.removeSeats}
						clearState={props.clearState}
					/>
				</Col>
			</Row>
		</Container>
	);
};

const bookingSeats = seat => {
	return {
		type: "ACTIVE",
		payload: seat,
	};
};
const removeSeats = seat => {
	return {
		type: "NOT-ACTIVE",
		payload: seat,
	};
};
const clearState = () => {
	return {
		type: "CLEAR-STATE",
	};
};
const mapDispatchToProps = {
	bookingSeats,
	removeSeats,
	clearState,
};
const mapStateToProps = state => {
	return {
		bookedSeats: state.data,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
