import {loadFood} from 'actions/food'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
class Page extends React.Component {
  componentDidMount() {
    this.props.loadFood()
  }
  
	render() {
    let food = this.props.food
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {
              _.map(food, (item, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{item.name}</td>
                  <td>{item.calories}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
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
