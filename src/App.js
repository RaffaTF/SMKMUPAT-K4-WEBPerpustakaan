import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";

const products = [
	{
		id: 1,
		name: "Buku Kewirausahaan",
		rating: 4.3,
		description:
			"Buku ini terdapat gambaran tentang usaha yang akan dibuat",
		price: 199,
		image: require("./assets/product-1.png"),
	},
	{
		id: 2,
		name: "Buku Paket Matematika",
		rating: 4.2,
		description:
			"Buku matematika menyajikan banyak rumus tentang al-jabar",
		price: 229,
		image: require("./assets/product-2.png"),
	},
	{
		id: 3,
		name: "Buku Paket Ipa",
		rating: 3.2,
		description:
			"buku ini merupakan buku panduan untuk bisa menjadi juara olimpiade ipa",
		price: 99,
		image: require("./assets/product-3.png"),
	},
	{
		id: 4,
		name: "Buku Paket Bahasa Indonesia",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: require("./assets/product-4.png"),
	},
	{
		id: 5,
		name: "Buku Paket Bahasa Jawa",
		rating: 4.5,
		description:
			"Dalam buku bahasa jawa terdapat banyak aksara jawa dan juga bahasa krama",
		price: 85,
		image: require("./assets/product-5.png"),
	},
	{
		id: 6,
		name: "Buku Paket Bahasa Inggris",
		rating: 3.8,
		description:
			" Dalam buku bahasa inggris terdapat banyak materi salah satunya = simple present tense",
		price: 123,
		image: require("./assets/product-6.png"),
	},
	{
		id: 7,
		name: "Buku Paket Bahasa Arab",
		rating: 3.8,
		description:
			" Dalam buku bahasa arab terdapat kosa kata bahasa arab untuk kita bisa belajar bahasa arab",
		price: 154,
		image: require("./assets/product-7.png"),
	},
	{
		id: 8,
		name: "Buku Paket Ips",
		rating: 3.8,
		description:
			" Dalam buku ips terdapat banyak sejarah tentang bangsa indonesia",
		price: 180,
		image: require("./assets/product-8.png"),
	},
	{
		id: 9,
		name: "Buku Komik conan",
		rating: 3.8,
		description:
			" buku ini sangat banyak digemari anak-anak",
		price: 112,
		image: require("./assets/product-9.png"),
	},
	{
		id: 10,
		name: "Buku Komik conan",
		rating: 3.8,
		description:
			" buku ini sangat banyak digemari anak-anak",
		price: 112,
		image: require("./assets/product-10.png"),
	},
];

function App() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				<h3 className="logo">store</h3>
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;