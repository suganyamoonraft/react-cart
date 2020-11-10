import React, { Component, Fragment } from 'react';

import Item from '../../components/Item/Item';
import Total from '../../components/Total/Total';
import Details from '../../components/Details/Details';
import Loader from '../../components/commonComponents/loader/Loader';
import './style.scss';

export default class Cart extends Component {
  componentDidMount() {
    fetch('https://run.mocky.io/v3/d32ce512-1c21-4a09-919a-79bd68c1f8c2')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const newData = data.items.map((item) => ({ ...item, count: 0 }));
        this.setState({ data: newData });
      })
      .catch((err) => console.error(err));
  }

  state = {
    cartData: [],
    data: [],
    itemName: '',
    add: false,
  };

  addToCarthandler = (data) => {
    let newData = [...this.state.cartData];
    let newItems = [...this.state.data];
    this.setState({ itemName: data.name });
    if (data.count > 0) {
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id === data.id) {
          newData.splice(i, 1);
          newItems[data.id] = { ...newItems[data.id], count: 0 };
          this.setState({ cartData: newData, data: newItems, add: true });
          this.animateHandler();
          break;
        }
      }
    } else {
      newItems[data.id] = { ...newItems[data.id], count: 1 };
      newData.push({ ...data, count: 1 });
      this.setState({ cartData: newData, data: newItems, add: false });
      this.animateHandler();
    }
  };

  animateHandler = () => {
    const element = document.getElementById('item-name');
    element.classList.add('animate');
    setTimeout(() => {
      element.classList.remove('animate');
    }, 1000);
  };

  modifyItemCount = (type, id) => {
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
        if (newCart[index].count === 0) {
          newCart.splice(index, 1);
          this.setState({ add: true });
          this.animateHandler();
        }
        this.setState({ cartData: newCart, data: newData });
        return false;
      }
    });
  };

  render() {
    return this.state.data.length > 0 ? (
      <Fragment>
        <hr />
        <div className="heading-wrapper">
          <h1 className="heading">All Items</h1>
          <div className="added-wrapper" id="item-name">
            <p className="added-item">{`${this.state.itemName} ${
              this.state.add ? 'removed from cart' : 'added to cart'
            }`}</p>
          </div>
        </div>
        <hr />
        <div className="cart-wrapper">
          <Item
            data={this.state.data}
            addToCarthandler={this.addToCarthandler}
          />
          <div className="right-content">
            <Total data={this.state.cartData} />
            <Details
              data={this.state.cartData}
              modifyItemCount={this.modifyItemCount}
            />
          </div>
        </div>
      </Fragment>
    ) : (
      <Loader />
    );
  }
}
