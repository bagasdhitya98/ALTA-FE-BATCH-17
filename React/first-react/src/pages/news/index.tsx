import { Component } from "react";
import { withRouter } from "../../withRouter";

interface NewsProps {
  location?: any;
}

export class News extends Component<NewsProps> {
  render() {
    const { location } = this.props;
    console.log("result of passing username : ", location?.state?.username);
    console.log("result of passing password : ", location?.state?.password);

    return <div>News</div>;
  }
}

export default withRouter(News);
