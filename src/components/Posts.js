import React, { Component } from 'react'
import '../assets/react-toolbox/theme.css';
import theme from '../assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Card from 'react-toolbox/lib/card';
import axios from 'axios';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import '../App.css';
import shop from '../images/shop.png';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap/lib';
import Modal from 'react-bootstrap/lib/Modal';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
// import popover from 'react-bootstrap/lib/popover';
// import {tooltip} from 'react-bootstrap/lib';


// import Cart from './Cart';

export default class Posts extends Component {
  
    constructor(){
        super();
        this.state = {
            products: [],
            cart: [],
            isActive :false,
            show: false,
            details: {}
        }
    this.changeIsActive = this.changeIsActive.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    }

    
    componentDidMount() {
        axios.get('https://greencommunitylaundry.herokuapp.com/api/products')
          .then(res => {
            const arr = res.data;
            this.setState({ products: arr });
          })
    }

addToCart(dat){
this.setState ({ cart: [...this.state.cart, dat]})

}

changeIsActive(){
    this.setState({ isActive: !this.state.isActive})
}

handleClose() {
    this.setState({ show: false });
  }

  handleShow(obj) {
      console.log(obj);
    this.setState({ details :obj})
    this.setState({ show: true });
  }

    render() {
        // console.log(this.state.cart);
    
    return (
        <ThemeProvider theme={theme}>
          <div>

<AppBar>
<Link style={{marginLeft: '1200px'}} to="/cart"> <img src={shop}/> </Link> 

</AppBar>


<button onClick={this.changeIsActive}> get cart  </button>


{!this.state.isActive && <button onClick={this.changeIsActive}> get cart  </button>

?

<div className="cardAllign"> 
{this.state.products.map((obj)=>{
    return (
        <Card style={{ borderColor: '2px solid black', width: '320px', height: '300px', marginLeft: '50px', marginTop: '30px'}}>  
            <div> 
        <p>     <img src={`https://greencommunitylaundry.herokuapp.com/api/Images/${obj.image}`}  width="100%" height="200px"/>  </p>
        <p> {obj.name}  </p>
        <p> {obj.price} </p>
        <p> <Button style={{marginRight: '130px'}}  bsStyle="info"  onClick={this.addToCart.bind(this,obj)}> Add to Cart </Button>  
         <Button  style={{marginLeft: '20px'}}  bsStyle="info" onClick={this.handleShow.bind(this,obj)}> Details  </Button>  </p>
        
        
        </div> 
       </Card>
    )
})}
</div>

:
<div> 

        {this.state.cart.map((obj) => {


          <table>
            <thead>
              <tr>
                <td> name </td>
                <td> price</td>
                <td> quantity </td>
              </tr>
            </thead>

            return(

              <tr>
             <p>  <img src={`https://greencommunitylaundry.herokuapp.com/api/Images/${obj.image}`}  width="300px" height="200px"/>  </p> 
             <p>  {obj.name} </p> 
             <p>  {obj.price} </p> 
                
              </tr> 
            
            )

        </table>

          })}


</div> 

}

    <div> 


        <Modal show={this.state.show} onHide={this.handleClose} style={{height: '1000px'}}>
          <Modal.Header closeButton>
            <Modal.Title> Details </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div> 
            <p>  {this.state.details.id}    </p> 
            <p> <img src={`https://greencommunitylaundry.herokuapp.com/api/Images/${this.state.details.image}`} width="100%"/> </p>
            <p>  {this.state.details.price} </p>
            <p>  {this.state.details.name} </p>
            
            </div>
                  
          </Modal.Body>
          <Modal.Footer>
    
            <Button bsStyle="warning" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>


        </div> 





</div>

       </ThemeProvider>
    )
  }
}
