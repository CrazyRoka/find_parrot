import { bindActionCreators, Dispatch } from 'redux';
import SignUpForm from '../../../components/SignUp';
import { connect } from 'react-redux';
import { signUp } from '../../../actions';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch : Dispatch) {
    return {
        requestSignUp: bindActionCreators(signUp, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);