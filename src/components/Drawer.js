import React from 'react';

function Drawer() {
  return (
    <div>
      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30 ">
            Корзина <img className="removeBtn" src="/img/btnRemove.svg" alt="btnRemove" />
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btnRemove.svg" alt="btnRemove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btnRemove.svg" alt="btnRemove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btnRemove.svg" alt="btnRemove" />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenBtn">
              Оформить заказ <img src="/img/right.svg" alt="RightArrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
