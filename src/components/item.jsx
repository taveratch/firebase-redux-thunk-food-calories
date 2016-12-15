export default (props) => {
  return (
    <div className="relative">
      {props.name}
      <span className="pull-right">
        {props.calories}
      </span>
    </div>
  )
}
