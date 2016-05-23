(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products = gems;
	});

  app.controller('PanelController',function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
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
			],
      reviews: [ 
        {
          stars: 5,
          body: "I love this product",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "this product is ugly",
          author: "joe@hater.com"
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
			],
      reviews: [ 
        {
          stars: 4,
          body: "Is beautiful",
          author: "teo@thomas.com"
        },
        {
          stars: 1,
          body: "this product is too expensive",
          author: "teo@hater.com"
        }
      ]
		}
	];
})();