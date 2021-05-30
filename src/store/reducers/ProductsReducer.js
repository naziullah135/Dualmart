const initState =  {
    products:[
        {
            id: 1,
            name: 'Men Shirt for summer',
            image:'1.jpg',
            price: 20,
            discount: 2,
            discountPrice: 20 -2/100*20,
            quantity: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            
        },
        {
            id: 2,
            name: 'Women Jacket for winter',
            image:'2.jpg',
            price: 30,
            discount: 5,
            discountPrice: 20 -5/100*30,
            quantity: 5,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",

        },
        {
            id: 3,
            name: 'Men Trouser for all season',
            image:'3.jpg',
            price: 15,
            discount: 2,
            discountPrice: 15 -2/100*15,
            quantity: 4,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",

        },
        {
            id: 4,
            name: 'Shoes for all season',
            image:'4.jpg',
            price: 50,
            discount: 4,
            discountPrice: 50 -4/100*50,
            quantity: 4,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",

        },
        {
            id: 5,
            name: 'Female scart for summer',
            image:'5.jpg',
            price: 25,
            discount: 2,
            discountPrice: 25 -2/100*25,
            quantity: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",

        },
        {
            id: 6,
            name: 'Men jeans for all season',
            image:'6.jpg',
            price: 60,
            discount: 6,
            discountPrice: 60 -6/100*60,
            quantity: 3,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",

        },
        {
            id: 7,
            name: 'Men Trouser for all season',
            image:'7.jpg',
            price: 30,
            discount: 3,
            discountPrice: 30 -3/100*30,
            quantity: 5,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",

        },
        {
            id: 8,
            name: 'Men Shirt for winter',
            image:'8.jpg',
            price: 45,
            discount: 5,
            discountPrice: 45 -5/100*45,
            quantity: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",

        },
        {
            id: 9,
            name: 'Men Shirt for all season',
            image:'9.jpg',
            price: 55,
            discount: 5,
            discountPrice: 55 -5/100*55,
            quantity: 6,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",

        },
        {
            id: 10,
            name: 'Men Jacket for winter',
            image:'10.jpg',
            price: 95,
            discount: 3,
            discountPrice: 95 -3/100*95,
            quantity: 10,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",

        }
    ],
    product: {}
}

const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return {...state, product: state.products.find(product=> product.id === parseInt(action.id))}
       default:
           return state;
    }
}

export default ProductsReducer;