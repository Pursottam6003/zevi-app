import { useState } from "react";
import { ProductType } from "../../../assets/data/FakerData";
import { RatingBox } from "../../../assets/Icons/RatingBox";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import styles from "./ProductsItems.module.scss"

interface ProductItemType {
    product: ProductType;
}

const ProductsItem = ({ product }: ProductItemType) => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [showViewProduct, setShowViewProduct] = useState(false);

    const navigate = useNavigate();

    return (
        <div className={styles.product_item}>
            <div className={styles.product_img_container}>
                <div className={styles.wishlist_icon_container}>
                    {isInWishlist ? (
                        <AiFillHeart
                            color="red"
                            onClick={() => setIsInWishlist((prev) => !prev)}
                        />
                    ) : (
                        <AiOutlineHeart
                            color="red"
                            onClick={() => setIsInWishlist((prev) => !prev)}
                        />
                    )}
                </div>
                <img
                    className={styles.product_img}
                    src={product.productImg}
                    alt=""
                    onMouseOver={() => setShowViewProduct(true)}
                    onMouseOut={() => setShowViewProduct(false)}
                />
                {showViewProduct && (
                    <div
                        onMouseOver={() => setShowViewProduct(true)}
                        onMouseOut={() => setShowViewProduct(false)}
                        className={styles.view_product}
                        onClick={() => navigate("/")}
                    >
                        View Product
                    </div>
                )}
            </div>
            <div>{product.productName}</div>
            <div>
                <span className={styles.org_price}>Rs. {product.productOrgPrice} </span>
                <span className={styles.dis_price}>Rs. {product.productDisPrice} </span>
            </div>
            <div className={styles.rating_and_reviews_container}>
                {RatingBox(product.productRating)} ({product.productsReviews})
            </div>
        </div>
    );
};

export default ProductsItem;
