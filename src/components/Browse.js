import React, { Component } from 'react'
import { getProductData } from '../actions/products'
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

export class Browse extends Component {
  componentDidMount = () => {
    this.props.getProductData();
    // let json = require('../data.json');
    // console.log("HIT", json);
  }

  render() {
    let plans = this.props.productData.content;
    return (
      <div>
        {
          plans ? plans.map((elem, index) => {
            {/* return <h5 key={index} >{elem.plan.planName} : {elem.insuranceProviderId}</h5> */}
            return (<Col sm="3" style={{'display':'inline-block'}}>
              <Card>
              {/* <CardImg top width="100%" src="../assets/images/HDFCErgo" alt="Card image cap" /> */}
              {/* <img src="C:\Stuff\symbo-web-app\src\assets\images\HDFCErgo.png" alt=""/> */}
              <CardBody>
                <CardText><b>Plan Name: </b> {elem.plan.planName}</CardText>
                <CardText><b>Insurance Provider: </b>{elem.plan.insuranceProviderName}</CardText>
                <CardText><b>Sum Insured: </b>{elem.sumInsured}</CardText>
                <CardText><b>Premium: </b>{elem.totalAmount.amount}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card></Col>);
          }) : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productData: state.productFields,
});

export default connect(mapStateToProps, { getProductData })(Browse);