import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import News from "./pages/news";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/news/login" />
          <Route element={<News />} path="/" />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

// ------ Contoh CRUD -------

// import { Component } from "react";
// import axios from "axios";

// import Layout from "./components/Layout";
// import Modal from "./components/Modal";

// interface ProductState {
//   data: [];
//   shownPopup: boolean;
//   productName: string;
//   productDescription: string;
//   productPrice: string;
// }

// export class App extends Component<ProductState> {
//   state = {
//     data: [],
//     shownPopup: false,
//     productName: "",
//     productDescription: "",
//     productPrice: "",
//   };

//   getAllProduct() {
//     axios
//       .get("https://65842cef4d1ee97c6bcf27a5.mockapi.io/product")
//       .then((response) => {
//         const sortedData = response?.data?.sort(
//           (a: any, b: any) => b?.id - a?.id
//         );
//         this.setState({ data: sortedData });
//         console.log(sortedData);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   postProduct(
//     product_name: string,
//     product_description: string,
//     product_price: string
//   ) {
//     const body = {
//       product_name: product_name,
//       product_description: product_description,
//       product_price: product_price,
//     };
//     axios
//       .post("https://65842cef4d1ee97c6bcf27a5.mockapi.io/product", {
//         product_name: body.product_name,
//         product_description: body.product_description,
//         product_price: body.product_price,
//       })
//       .then((response) => {
//         const { data, shownPopup } = this.state;
//         this.setState({ data: [...data, response.data] });
//         this.setState({ shownPopup: !shownPopup });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   deleteProduct(id: string) {
//     axios
//       .delete(`https://65842cef4d1ee97c6bcf27a5.mockapi.io/product/${id}`)
//       .then(() => {
//         const { data } = this.state;
//         const removeData = data.filter((item: any) => item.id !== id);
//         this.setState({ data: removeData });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   componentDidMount() {
//     this.getAllProduct();
//   }

//   render() {
//     console.log("data : ", this.state.data);
//     const { data, shownPopup, productName, productDescription, productPrice } =
//       this.state;
//     return (
//       <Layout>
//         <div className="grid grid-cols-2 gap-5">
//           {data ? (
//             data?.map((item: any, index: number) => {
//               return (
//                 <div
//                   key={index}
//                   className="w-96 h-max rounded-md shadow-md p-3"
//                 >
//                   <p className="font-semibold">{item?.product_name}</p>
//                   <p>{item?.product_description}</p>
//                   <p>Price : {item?.product_price}</p>
//                   <button
//                     onClick={() => this.deleteProduct(item?.id)}
//                     className="bg-red-500 hover:bg-red-600 focus:outline-none border-none text-white font-semibold rounded-md"
//                   >
//                     Delete Product
//                   </button>
//                 </div>
//               );
//             })
//           ) : (
//             <div className="flex justify-center items-center font-bold text-black absolute">
//               Data not available
//             </div>
//           )}
//         </div>
//         <div className="fixed bottom-10 right-10">
//           <button
//             onClick={() => this.setState({ shownPopup: !shownPopup })}
//             className="bg-cyan-500 hover:bg-cyan-600 focus:outline-none border-none text-white font-semibold rounded-md"
//           >
//             Add Product
//           </button>
//         </div>
//         {shownPopup ? (
//           <Modal
//             title="Add Product"
//             text="Add Product"
//             onClick={() =>
//               this.postProduct(productName, productDescription, productPrice)
//             }
//           >
//             <div className="flex flex-col gap-y-6">
//               <input
//                 className="p-3 -96 h-10 bg-white rounded-md border border-cyan-500"
//                 value={productName}
//                 placeholder="Product Name ..."
//                 onChange={(e: any) =>
//                   this.setState({ productName: e.target.value })
//                 }
//               />
//               <input
//                 className="p-3 w-96 h-10 bg-white rounded-md border border-cyan-500"
//                 value={productDescription}
//                 placeholder="Product Description ..."
//                 onChange={(e: any) =>
//                   this.setState({ productDescription: e.target.value })
//                 }
//               />
//               <input
//                 className="p-3 w-96 h-10 bg-white  rounded-md border border-cyan-500"
//                 value={productPrice}
//                 placeholder="Product Price ..."
//                 onChange={(e: any) =>
//                   this.setState({ productPrice: e.target.value })
//                 }
//               />
//             </div>
//           </Modal>
//         ) : (
//           <></>
//         )}
//       </Layout>
//     );
//   }
// }

// export default App;

// ---------- [STATE, PROPS, LIFECYCLE COMPONENT] ----------

// import { Component } from "react";

// import Card from "./components/Card";
// import Modal from "./components/Modal";
// import Random from "./components/Random";
// import Layout from "./components/Layout";

// import data from "./dummy/foods.json";

// interface CountState {
//   count: number;
//   mode: boolean;
//   visibility: boolean;
// }

// class App extends Component<CountState> {
//   state = {
//     count: 0,
//     mode: false,
//     visibility: false,
//   };

//   handleIncrement() {
//     const { count } = this.state;
//     this.setState({ count: count + 1 });
//   }

//   handleDecrement() {
//     const { count } = this.state;
//     this.setState({ count: count - 1 });
//     if (count === 0) {
//       alert("Out of bound");
//       this.setState({ count: 0 });
//     }
//   }

//   handlePopup() {
//     const { visibility } = this.state;
//     this.setState({ visibility: !visibility });
//   }

//   switchMode() {
//     const { mode } = this.state;
//     this.setState({ mode: !mode });
//   }

//   // Fase Mounting
//   componentDidMount() {
//     console.log("Component Did Mount");
//   }

//   // Fase Updating
//   componentDidUpdate(prevState: CountState) {
//     const { count } = this.state;
//     if (prevState.count !== count) {
//       console.log("Component Did Update");
//     }
//   }

//   // Fase Unmounting
//   componentWillUnmount() {
//     console.log("Component Will Unmount");
//   }

//   render() {
//     const { count, mode, visibility } = this.state;

//     return (
//       <Layout mode={mode}>
//         <div className="text-red-500">Hello world, this is tailwind effect</div>
//         <div className="flex gap-x-5 my-10">
//           <button
//             className="p-3 bg-green-500 text-white"
//             onClick={() => this.handleIncrement()}
//           >
//             +
//           </button>
//           <input
//             className="bg-white shadow-md rounded-lg text-center text-slate-500"
//             value={count}
//             type="text"
//           />
//           <button
//             className="p-3 bg-red-500 text-white"
//             onClick={() => this.handleDecrement()}
//           >
//             -
//           </button>
//         </div>
//         <div className="my-3 gap-y-5 flex flex-col">
//           <button
//             className="bg-slate-500 w-40 h-10"
//             onClick={() => this.switchMode()}
//           >
//             Change Mode
//           </button>
//           <button
//             className="bg-slate-500 w-40 h-10"
//             onClick={() => this.handlePopup()}
//           >
//             Show Popup 1
//           </button>
//           <Random text="Contoh props 1" />
//           <Random text="Contoh props 2" />
//           <Random text="Contoh props 3" />
//         </div>
//         <div className="grid grid-cols-2 gap-x-4 gap-4">
//           {data &&
//             data.map((item: any, index: number) => {
//               return (
//                 <Card
//                   key={index}
//                   image={item.image}
//                   content={item.content}
//                   title={item.title}
//                   price={item.price}
//                 />
//               );
//             })}
//         </div>
//         <div className="grid grid-cols-1 gap-5 mt-10">
//           <div className="p-3 w-80 h-18 lg:bg-orange-500 md:bg-red-500 sm:bg-yellow-500 bg-green-500">
//             Element 1 for test responsivity
//           </div>
//           <div className="p-3 w-80 h-18 lg:bg-orange-500 md:bg-red-500 sm:bg-yellow-500 bg-green-500">
//             Element 2 for test responsivity
//           </div>
//           <div className="p-3 w-80 h-18 lg:bg-orange-500 md:bg-red-500 sm:bg-yellow-500 bg-green-500">
//             Element 3 for test responsivity
//           </div>
//           <div className="p-3 w-80 h-18 lg:bg-orange-500 md:bg-red-500 sm:bg-yellow-500 bg-green-500">
//             Element 4 for test responsivity
//           </div>
//         </div>
//         {visibility ? (
//           <Modal
//             title="Contoh Penerapan Props"
//             content="Kita bisa reuse component ini"
//             shownModal={() => this.handlePopup()}
//           />
//         ) : (
//           <></>
//         )}
//       </Layout>
//     );
//   }
// }

// export default App;
