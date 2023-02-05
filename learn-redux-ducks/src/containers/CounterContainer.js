import { connect } from "react-redux"
import Counter from "../components/Counter"
import { increse, decrese } from "../modules/counter"

const CounterContainer = ({ number, increse, decrese }) => {
  return <Counter number={number} onIncrese={increse} onDecrese={decrese} />
}

const mapStateToProps = state => ({
  number: state.counter.number
})
const mapDispatchToProps = dispatch => ({
  increse: () => {
    dispatch(increse())
  },
  decrese: () => {
    dispatch(decrese())
  }
})

export default connect(mapStateToProps, mapDispatchToProps,)(CounterContainer)