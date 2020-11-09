import React, { Component } from 'react';

import Item from '../../components/Item/Item';
import Total from '../../components/Total/Total';
import Data from '../../data/cart.json';
import Details from '../../components/Details/Details';
import './style.scss';

export default class Cart extends Component {
  componentDidMount() {
    console.log('rins');
    fetch('https://run.mocky.io/v3/d32ce512-1c21-4a09-919a-79bd68c1f8c2')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
    const newData = Data.items.map((item) => ({ ...item, count: 0 }));
    this.setState({ data: newData });
  }

  state = {
    cartData: [],
    data: [],
  };

  addToCarthandler = (data) => {
    let newData = [...this.state.cartData];
    let newItems = [...this.state.data];
    if (data.count > 0) {
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id === data.id) {
          newData.splice(i, 1);
          newItems[data.id] = { ...newItems[data.id], count: 0 };
          this.setState({ cartData: newData, data: newItems });
          break;
        }
      }
    } else {
      newItems[data.id] = { ...newItems[data.id], count: 1 };
      newData.push({ ...data, count: 1 });
      this.setState({ cartData: newData, data: newItems });
    }
  };

  modifyItemCount = (type, id) => {
    console.log(type, id);
    let newCart = [...this.state.cartData];
    let newData = [...this.state.data];
    newCart.forEach((data, index) => {
      if (data.id === id) {
        newCart[index] = {
          ...newCart[index],
          count:
            type === 'add'
              ? newCart[index].count + 1
              : newCart[index].count - 1,
        };
        newData[id] = newCart[index];
        if (newCart[index].count === 0) newCart.splice(index, 1);
        this.setState({ cartData: newCart, data: newData });
        return false;
      }
    });
  };

  render() {
    return (
      <div className="cart-wrapper">
        <Item data={this.state.data} addToCarthandler={this.addToCarthandler} />
        <div className="right-content">
          <Total data={this.state.cartData} />
          <Details
            data={this.state.cartData}
            modifyItemCount={this.modifyItemCount}
          />
        </div>
      </div>
    );
  }
}
