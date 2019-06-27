import React from 'react';
import { Provider } from "react-redux";
import store from '../stores/mainStore';
import BookingForm from './BookingForm';

export default class BookingFormWrapper extends React.Component {
	render = () => (
		<Provider store={store}>
			<BookingForm />
		</Provider>
	)
}
