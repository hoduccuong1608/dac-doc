import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { Redirect, useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

// function HomepageHeader() {
// 	const { siteConfig } = useDocusaurusContext();
// 	return (
// 		<header className={clsx('hero hero--primary', styles.heroBanner)}
// 		style={{ background: "#1F2179"}}>
// 			<div className="container" style={{
// 				display: "flex",
// 				justifyContent: "space-between"
// 			}} >
// 				<div className="text-banner">
// 				<p className="hero__title">Hướng dẫn sử dụng</p>
// 				<p className="hero__title">Tích hợp Sản phẩm</p>
// 				<span>
// 				<span className="hero__title">dịch vụ </span>
// 				<span className="hero__title" style={{ color: "#FACD5C"}}>oneSME</span>
// 				</span>

// 				</div>
// 				<div>
// 					<img src={useBaseUrl("/img/home/banner.png")} alt="banner"/>
// 				</div>
// 			</div>
// 		</header>
// 	);
// }

export default function Home() {
	return <Redirect to="/docs/dac/gioi-thieu" />
}
