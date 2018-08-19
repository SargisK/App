import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import carsName from '../data'

class Cars extends Component {

  selectCar(id, e) {
    let selectedCars = '';
    console.log(e.target.checked);

    if (e.target.checked) {

      selectedCars = this.props.carsStore.concat(id);

    } else {

      selectedCars = this.props.carsStore.filter((carsId) => {
        console.log(id)
        console.log(carsId)
        return carsId !== id
      });
    }
    this.props.onSelectCar(selectedCars);
  }

  render() {

    return (
      <div>
        <ul>
          {
            carsName.map((car) =>
              <li key={car.id}>
                <span>{car.name}</span>
                <input type="checkbox" onChange={this.selectCar.bind(this, car.id)} id="" />
              </li>
            )
          }
        </ul>
        <Link to={'/carinfo'}>info</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  carsStore: state.cars
})

export default connect(
  mapStateToProps,
  dispatch => ({
    onSelectCar: (selectedCars) => {


      dispatch({ type: 'CAR_SELECTED', payload: selectedCars })
    }
  })
)(Cars) 