import { Component } from "react";
import { withRouter } from "../../withRouter";

interface ProductProps {
  location?: any;
}

export class Product extends Component<ProductProps> {
  render() {
    const { location } = this.props;
    console.log("result of passing username : ", location?.state?.username);
    console.log("result of passing password : ", location?.state?.password);

    return <div>Product</div>;
  }
}

export default withRouter(Product);
