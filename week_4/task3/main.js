var app = new Vue ({
    //connect to element in html
    el: '#app',
    data: {
        product: 'Sublime Replenishing Night Masque',
        image: './images/shop.jpg',
        inStock: true,
        details: ["100% Organic Shea Butter", "Avocado Oil", "Almond Sweet Oil"],
        variants: [
            {
                varientId: 1,
                variantType: "Sweet Orange",
                variantImage: './images/shop.jpg'
            },
            {
                varientId: 2,
                variantType: "Lavender",
                variantImage: './images/toothbrush.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart +=1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
});

