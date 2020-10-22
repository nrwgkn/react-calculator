import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Calculator from "../components/Calculator";
import * as actions from "../actions";

const mapStateToProps = (state) => ({
  calculator: state.calculator,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
