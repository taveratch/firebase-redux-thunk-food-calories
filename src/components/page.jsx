import {loadFood} from 'actions/food'
import {connect} from 'react-redux'

class Page extends React.Component {
  componentDidMount() {
    this.props.loadFood()
  }
	render() {
    let food = this.props.food
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {food: state.food}
}


export default connect(
  mapStateToProps,
  {loadFood}
)(Page)
