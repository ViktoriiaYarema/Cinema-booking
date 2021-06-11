import React, { useState } from "react";
import { Card, Button, ListGroup, CloseButton, Row,	Col, Alert } from "react-bootstrap";
import ticketImg from "../img/tickets.svg";
import deleteIcon from '../img/delete-icon.svg';
import ModalAlert from "./Modal";

const BookCard = props => {
	const [show, setShow] = useState(false);
	const [successBooking, setSuccessBooking] = useState(false);

	const keepCount = () =>
		props.bookedSeatsData.reduce((acc, value) => acc + value.price, 0);
	const deleteTicket = item => props.removeSeats(item);
	const submitBookedSeats = length => {
		length === 0 ? setShow(true) : setSuccessBooking(true);
		props.clearState();
	};

	return (
		<Card
			className="fixed-bottom"
			style={{ width: "25em", left: "60%", height: "100vh" }}
		>
			<Card.Body>
				<Card.Header>
					<Card.Title>Tickets : </Card.Title>
					<small className="text-muted">
						{props.bookedSeatsData.length} tickets, {keepCount()}$
					</small>
				</Card.Header>
				<ListGroup
					variant="flush"
					className="scroll"
					style={{ height: "100%" }}
				>
					{props.bookedSeatsData.length === 0 ? (
						<img src={ticketImg} alt="ticket" style={{ opacity: "0.5" }}></img>
					) : (
						props.bookedSeatsData.map((item, index) => {
							return (
								<ListGroup.Item key={index}>
									<Row>
										<Col>{item.row} row</Col>
										<Col> {item.seatNum} seat</Col>
										<Col>
											{item.price}$
											<CloseButton
												onClick={() => deleteTicket(item)}
											></CloseButton>
										</Col>
									</Row>
								</ListGroup.Item>
							);
						})
					)}
					{
						<ModalAlert
							show={successBooking}
							onHide={() => setSuccessBooking(false)}
						/>
					}
				</ListGroup>
				<Card.Footer className="justify-content-center  align-items-center">
					{show ? (
						<Alert variant="danger" onClose={() => setShow(false)} dismissible>
							Please, make a choice!
						</Alert>
					) : (
						<Card.Text className=" d-flex justify-content-between  align-items-center align-self-start">
							Total amount :
							<strong style={{ fontSize: "1.3em" }}>{keepCount()}$ </strong>
							<Button variant="danger" onClick={() => props.clearState()}> 
								<img src={deleteIcon} alt="delete"></img>
							</Button>
						</Card.Text>
					)}
					<Button
						variant="warning"
						style={{ width: "100%" }}
						onClick={() => submitBookedSeats(props.bookedSeatsData.length)}
					>
						Book tickets
					</Button>
				</Card.Footer>
			</Card.Body>
		</Card>
	);
};

export default BookCard;
