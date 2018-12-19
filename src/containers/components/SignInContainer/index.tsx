import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import SignInForm from '../../../components/SignIn';
import { logIn } from '../../../actions';
import { ThunkAction } from 'redux-thunk';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch : Dispatch) {
    return {
        requestSignIn: (email: string, password: string) => dispatch<any>(logIn(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);