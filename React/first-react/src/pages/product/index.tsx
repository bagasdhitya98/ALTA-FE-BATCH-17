import { Component } from "react";
import { withRouter } from "../../withRouter";
import axios from "axios";

import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Layout from "../../components/Layout";

interface ProductProps {
  location?: any;
}

interface ProductState {
  data?: [];
  content?: any;
  isOpen?: boolean;
}

export class Product extends Component<ProductProps, ProductState> {
  state = {
    data: [],
    content: null,
    isOpen: false,
  };

  getProducts() {
    axios
      .get("https://65842cef4d1ee97c6bcf27a5.mockapi.io/product")
      .then((response) => {
        this.setState({ data: response?.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getProductById(id: string) {
    axios
      .get(`https://65842cef4d1ee97c6bcf27a5.mockapi.io/product/${id}`)
      .then((response) => {
        this.setState({ isOpen: true });
        this.setState({ content: response?.data });
        console.log("get by id : ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount(): void {
    this.getProducts();
  }

  render() {
    const { data, isOpen, content } = this.state;
    return (
      <Layout>
        <div className="grid grid-cols-5 gap-5">
          {data ? (
            data?.map((item: any, index: any) => {
              return (
                <Card
                  key={index}
                  title={item?.product_name}
                  price={item?.product_price}
                  onClick={() => this.getProductById(item?.id)}
                />
              );
            })
          ) : (
            <div className="text-center font-semibold text-xl text-blue-500">
              Loading ...
            </div>
          )}
        </div>
        {isOpen === true ? (
          <Modal onClick={() => this.setState({ isOpen: false })}>
            <div className="p-5">
              <p className="font-semibold text-lg">{content?.product_name}</p>
              <p className="font-medium">{content?.product_description}</p>
            </div>
          </Modal>
        ) : (
          <></>
        )}
      </Layout>
    );
  }
}

export default withRouter(Product);
