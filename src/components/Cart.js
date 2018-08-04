import React, { Component } from 'react'

export default class Cart extends Component {
  render(props) {
    console.log(this.props);
    return (
      <div>
        <p> hello </p>
        {this.props.cartItems.map((obj) => {

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
    )
        }
        }
