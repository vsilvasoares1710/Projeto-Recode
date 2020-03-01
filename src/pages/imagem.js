import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Images

class Imagem extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount(){
    document.getElementById("top-of-root").scrollIntoView(true)
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {
    console.log(this.props.history);
    return (
      <div className="container-fluid bg-white">
        <div className="container bg-white">
          <div className="row my-5">
            <img
              src={this.props.location.link}
              width="98%"
              className="my-auto"
            />
            <div className="text-center mx-auto mt-2">
              <Btn onClick={this.goBack} text="Voltar à página anterior" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Imagem;
