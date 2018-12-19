import Header from "../../../components/Header";
import { connect } from "react-redux";
import { ApplicationState } from "../../..";

function mapStateToProps({ authentification } : ApplicationState) {
    console.log(authentification);
    return {
        logged: authentification.logged,
        email: authentification.email
    };
}

function mapDispatchToProps() {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);