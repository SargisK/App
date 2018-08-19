import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from '../data';
import carsDetails from '../dataCar';

class CarInfo extends Component {

    componentWillUnmount() {
        this.props.onClearStore()
    }

    render() {
        this._selectedCars = [];

        this.props.carsStore.forEach(carId => {
            let selectCar = carsDetails.filter(carDetails => carDetails.id === carId)
            this._selectedCars = this._selectedCars.concat(selectCar)
        })

        return (<div>
            <ul>
                {console.time()}

                {

                    this._selectedCars ? this._selectedCars.map(car => <li key={car.id}>
                        <h3>
                            {data.filter(carName => car.id === carName.id)[0].name}
                        </h3>
                        <ul>
                            <li>{`model - ${car.model}`}</li>
                            <li>{`speed - ${car.speed}`}</li>
                            <li>{`price - ${car.price}`}</li>
                        </ul>
                    </li>) : ''}

                {console.timeEnd()}
            </ul>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    carsStore: state.cars
})

export default connect(mapStateToProps, dispatch => ({
    onClearStore: () => {
        dispatch({ type: 'CAR_SELECTED', payload: [] })
    }
}))(CarInfo)
