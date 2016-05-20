(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'This is a beautiful gem',
			canPurchase: true,
			images: [
				{
					full: '1.jpg_256',
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'This is a beautiful gem',
			canPurchase: false,
			images: [
				{
					full: '2.jpg_256',
				}
			]
		}
	];
})();