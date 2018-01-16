import React from 'react';
import image from '../images/2018-01-13_11-57-08_Screenshot.jpg'

class ProductList extends React.Component {

    render() {
        
        let data = this.props.data.map(function(number,index){
            return (
                <div key={index} className="col-xs-3"  style={{
                    border: '1px solid black',
                  }}>
                  <img src={image} alt="image" href="https://androidstash.netlify.com/" style={{width: '100%'}}/>
                  <h3> product {number} </h3>
                  <h4> product Description </h4>
                </div>
              );
        })
        return <div>{data}</div>;
     
    }
  }
  export default ProductList
