const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const shopify = express();

shopify.use(cors());
shopify.use(bodyParser.urlencoded({extended: true}));
shopify.use(bodyParser.json());

shopify.get("/api/products", (req, res) => {
    const products = [
        {
            title: "Iphone 12",
            price: 1500,
            imageUrl: "https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/1/2/12_pro_grp_1_.jpg"
        },
        {
            title: "Iphone 13",
            price: 1500,
            imageUrl: "https://images.hindustantimes.com/tech/img/2022/09/27/960x540/Apple-iPhone13-Pro-alpine-green-hero-2up-220308_bi_1664273586596_1664273586798_1664273586798.jpg"
        },
        {
            title: "Ipad Pro",
            price: 1500,
            imageUrl: "https://mynexttablet.com/wp-content/uploads/2020/04/apple-ipad-pro-2020-test.jpg"
        },

        {
            title: "Macbook Pro",
            price: 1400,
            imageUrl: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Y30DpqRVL._SX522_.jpg"
        },
        {
            title: "Macbook Air",
            price: 1400,
            imageUrl: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663415676/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245232_0_pin6ch.png/mxw_640,f_auto"
        },
        {
            title: "Macbook Mini",
            price: 1400,
            imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/macbookpro_22102021.png"
        },

        {
            title: "Iphone 14 Pro Max",
            price: 1600,
            imageUrl: "https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/1/2/12_pro_grp_1_.jpg"
        },
        {
            title: "Iphone 13 Pro Max",
            price: 1600,
            imageUrl: "https://images.hindustantimes.com/tech/img/2022/09/27/960x540/Apple-iPhone13-Pro-alpine-green-hero-2up-220308_bi_1664273586596_1664273586798_1664273586798.jpg"
        },
        {
            title: "Ipad Pro Pro Max",
            price: 1600,
            imageUrl: "https://mynexttablet.com/wp-content/uploads/2020/04/apple-ipad-pro-2020-test.jpg"
        },
    ];

    return res.status(200).json({
        statusCode: 200,
        data: products
    });
});

shopify.listen(3000, () => console.log("The Is running at 3000."))
