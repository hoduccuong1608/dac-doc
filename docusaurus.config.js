/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Nền tảng oneSME',
	tagline: 'Hướng dẫn sử dụng',
	url: 'https://onesme.com.vn',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.svg',
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'oneSME Docs',
			logo: {
				alt: 'oneSME Docs',
				src: 'img/logo2.svg',
			},
			hideOnScroll: true,
			items: [
				// {
				// 	label: 'Hướng dẫn sử dụng Portal',
				// 	position: 'left',
				// 	items: [
				// 		{
				// 			to: '/docs/admin/gioi-thieu',
				// 			label: 'Dành cho Quản trị viên oneSME',
				// 		},
				// 		{
				// 			to: '/docs/sme/gioi-thieu',
				// 			label: 'Dành cho khách hàng',
				// 		},
				// 		{
				// 			to: '/docs/dev/gioi-thieu',
				// 			label: 'Dành cho nhà phát triển',
				// 		},
				// 	],
				// },
				// {
				// 	label: 'Dành cho Quản trị viên oneSME',
				// 	type: 'doc',
				// 	docId: 'admin/gioi-thieu',
				// },
				// {
				// 	label: 'Dành cho khách hàng',
				// 	type: 'doc',
				// 	docId: 'sme/gioi-thieu',
				// },
				// {
				// 	label: 'Dành cho nhà phát triển',
				// 	type: 'doc',
				// 	docId: 'dev/gioi-thieu',
				// },
				// {
				// 	docId: 'spdv/intro',
				// 	type: 'doc',
				// 	label: 'Tích hợp Sản phẩm dịch vụ',
				// },
				// {
				// 	type: 'doc',
				// 	docId: 'spdv',
				// 	position: 'left',
				// 	label: 'Tích hợp SPDV',
				// },
				// { to: '/blog', label: 'Blog', position: 'left' },
				// {
				// 	href: 'https://github.com/facebook/docusaurus',
				// 	label: 'GitHub',
				// 	position: 'right',
				// },
			],
		},
		footer: {
			style: 'dark',
			links: [
				// {
				// 	title: 'Tài liệu',
				// 	items: [
						// {
						// 	label: 'Hướng dẫn sử dụng oneSME Portal',
						// 	to: '/docs/sme/gioi-thieu',
						// },
						// {
						// 	label: 'Hướng dẫn tích hợp Sản phẩm dịch vụ',
						// 	to: 'docs/spdv/intro',
						// },
				// 	],
				// },
				{
					title: 'Liên hệ',
					items: [
						{
							label: 'Chăm sóc khách hàng',
							href: '/',
						},
						{
							label: 'Đại lý phân phối',
							href: '/',
						},
					],
				},
				{
					title: 'About',
					items: [
						{
							label: 'VNPT-Technology',
							href: '/',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} oneSME, Inc. Built by VNPT-Technology.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.json'),
					// Please change this to your repo.
					// editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				// blog: {
				// 	showReadingTime: true,
				// 	// Please change this to your repo.
				// 	editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
				// },
				theme: {
					customCss: require.resolve('./src/css/custom.css'),

				},
			},
		],
	],
	customFields: {
		linkWebOrigin: 'https://onesme.vn',
	},
	// plugins: [
	// 	[
	// 		'@docusaurus/plugin-content-docs',
	// 		{
	// 			id: 'spdv',
	// 			path: 'spdv',
	// 			routeBasePath: 'spdv',
	// 			sidebarPath: require.resolve('./sidebars-spdv.js'),
	// 			// ... other options
	// 		},
	// 	],
	// ],
};
