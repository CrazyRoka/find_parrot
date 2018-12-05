import * as React from 'react';
import Home from '../../../stories/screens/landings/Home';
import { Dispatch } from 'redux';
import { addProduct } from '../../../actions';
import { ProductStore, Product } from '../../../dataTypes';
import { connect } from 'react-redux';
import products from '../../../reducers';

export interface Props {
    products: Array<Product>;
    loadProduct: Function;
}

const mapStateToProps = (state : ProductStore) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loadProduct: (product : Product) => dispatch(addProduct(product))
    }
}

class HomeContainer extends React.PureComponent<Props> {
    componentDidMount() {
        const { loadProduct } = this.props;
        
        fetch('https://api.randomuser.me/?results=6')
          .then(response => response.json())
          .then(data => data.results.map((e : any) => ({ id: e.login.uuid, name: e.email, image_url: e.picture.large})))
          .then(products => products.forEach((product : Product) => loadProduct(product)));
    }

    render() {
        const { products } = this.props;

        return(
            <Home products={products} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);