import React from "react";
import ProductCard from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Product/ProductCard.js";
import Cake from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/ProductImage/Cake.png";
import Frame from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/ProductImage/Frame.png";
import LED from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/ProductImage/LED.png";
import Necklace from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/ProductImage/Necklace.png";
import Plant from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/ProductImage/Plant.png";
import Purs from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/ProductImage/Purs.png";
import Toy from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/ProductImage/Toy.png";
import Watch from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/ProductImage/Watch.png";
import "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Product/Product.css";
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <h2 className="product-header">Best Selling Gifts</h2>
      <div className="product-container">
        <ProductCard
          image={Cake}
          cardType="Cake"
          title="Birthday Cake"
          description="Delight in layers of joy with our exquisite Birthday Cake."
          price="$20.99"
          buyNow={() => {
            // function to add to cart
          }}
        />
        <ProductCard
          image={Frame}
          cardType="Decor"
          title="Inspiring Photo Frame"
          description="Transform moments into art with our Inspiring Photo Frame."
          price="$15.99"
          buyNow={() => {
            // function to add to cart
          }}
        />

        <ProductCard
          image={LED}
          cardType="Decor"
          title="Multiple LEDs"
          description="Radiate ambiance with our dazzling decorative LED lights."
          price="$15.99"
          buyNow={() => {
            // function to add to cart
          }}
        />
        <ProductCard
          image={Necklace}
          cardType="jewelry"
          title="Diamond Jewelry"
          description="Elegance in every facet, our exquisite diamond jewelry."
          price="$15.99"
          buyNow={() => {
            // function to add to cart
          }}
        />
        <ProductCard
          image={Plant}
          cardType="Home & Decor"
          title="Plant Showecase"
          description="Green Haven Display: Curate nature's beauty with our Plant."
          price="$15.99"
          buyNow={() => {
            // function to add to cart
          }}
        />
        <ProductCard
          image={Purs}
          cardType="accessories"
          title="Girl Small Handbag"
          description="Compact couture for her, the perfect blend of fashion."
          price="$15.99"
          buyNow={() => {
            // function to add to cart
          }}
        />
        <ProductCard
          image={Toy}
          cardType="Toy"
          title="Dinosaur Wood Toy"
          description="Eco-friendly, handcrafted Dinosaur Toy for playtime joy."
          price="$15.99"
          buyNow={() => {
            // function to add to cart
          }}
        />
        <ProductCard
          image={Watch}
          cardType="accessories"
          title="Smart Watch"
          description="Stay connected & active with feature-packed Smart Watch."
          price="$15.99"
          buyNow={() => {
            // function to add to cart
          }}
        />
        {/* Add more Product components here */}
      </div>
    </>
  );
};

export default Product;
