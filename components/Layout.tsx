import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import Canvas from "./Canvas";
import { useWindowResize } from "../hooks/windowResize";

const Layout = () => {
	const { width, height } = useWindowResize();

	return (
		<>
			<Head>
				<title>TAM Creates</title>
				<meta
					name="description"
					content="Generated by TAM (Tarique Ali Mirza <tarique1988@gmail.com>)"
				/>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<div className="flex flex-col" style={{ width, height }}>
				<Header height={48} width />
				<Canvas width height={height - 48 - 36} minHeight={400} />
				<Footer width height={36} />
			</div>
		</>
	);
};

export default Layout;
