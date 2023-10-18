import React from "react";
import "./ProductSell.css";

function ProductSell() {
  return (
    <div className="product-sell">
      <div className="heading">
      <h3>Product Sell</h3>
      <span>
        <input placeholder="Search"/>
        <select name="" id="select">
          <option value="Last 30 Days">Last 30 Days</option>
        </select>
      </span>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample product row */}
          <tr>
            <td className="flex">
              <img className="image" src="https://previews.123rf.com/images/tevaritnavarath/tevaritnavarath1610/tevaritnavarath161000067/66669456-icon-red-and-black-chart-60-percent-pie-chart-vector.jpg"
            />
            <div>
            <div className="bold">Abstract 3D</div>
            <small>Lorem ipsum dolor sit amet...</small>
            </div>
            
            </td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>
          {/* Add other product rows similarly */}
          <tr>
            <td className="flex">
              <img className="image" src="https://previews.123rf.com/images/tevaritnavarath/tevaritnavarath1610/tevaritnavarath161000067/66669456-icon-red-and-black-chart-60-percent-pie-chart-vector.jpg"
            />
            <div>
            <div className="bold">Sarphens Illustration</div>
            <small>Lorem ipsum dolor sit amet...</small>
            </div>
            </td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductSell;
