const products = [
    { 
        id: 1, 
        name: "Xe đạp điện Osakar A10", 
        price: 12800000, 
        img: "assets/img/osakar_a10.jpg",
        battery: "Lithium-ion",
        range: "120km",
        brand: "osakar",
        desc: "Xe máy điện thông minh với thiết kế Ý sang trọng, kháng nước chuẩn IP67.",
    },
    { 
        id: 2, 
        name: "Xe đạp điện Osakar A8", 
        price: 12000000, 
        img: "assets/img/osakar_a8.jpg", 
        battery: "Ắc quy",
        range: "80km",
        brand: "osakar",
        desc: "Dòng xe quốc dân, bền bỉ, tiết kiệm điện năng tối đa cho học sinh sinh viên." 
    },
    { 
        id: 3, 
        name: "Xe đạp điện Osakar Alpha Sport", 
        price: 14200000, 
        img: "assets/img/osakar_alphasport.jpg", 
        battery: "Ắc quy 48V",
        range: "50km",
        brand: "osakar",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 4, 
        name: "Xe đạp điện Osakar Mandi", 
        price: 14800000, 
        img: "assets/img/osakar_mandi.jpg", 
        battery: "Ắc quy 48V",
        range: "100km",
        brand: "osakar",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." ,
    },
    { 
        id: 5, 
        name: "Xe đạp điện Osakar Star", 
        price: 13500000, 
        img: "assets/img/osakar_star.jpg", 
        battery: "Ắc quy 48V",
        range: "120km",
        brand: "osakar",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 6, 
        name: "Xe đạp điện Osakar Sunoo", 
        price: 14800000, 
        img: "assets/img/osakar_sunoo.png", 
        battery: "Ắc quy 48V",
        range: "200km",
        brand: "osakar",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 7, 
        name: "Xe đạp điện Osakar X8", 
        price: 13900000, 
        img: "assets/img/osakar_x8.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "osakar",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 8, 
        name: "Xe đạp điện TAILG GR55", 
        price: 12900000, 
        img: "assets/img/TAILGGR55.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "tailg",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 9, 
        name: "Xe đạp điện TAILG GR56", 
        price: 14990000, 
        img: "assets/img/TAILGGR56.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "tailg",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 10, 
        name: "Xe đạp điện TAILG GX30", 
        price: 12600000, 
        img: "assets/img/TAILGGX30.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "tailg",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 11, 
        name: "Xe đạp điện TAILG JS32", 
        price: 12600000, 
        img: "assets/img/TAILGJS32.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "tailg",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 12, 
        name: "Xe đạp điện TAILG JS50", 
        price: 15400000, 
        img: "assets/img/TAILGJS50.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "tailg",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 13, 
        name: "Xe đạp điện TAILG JY33", 
        price: 10500000, 
        img: "assets/img/TAILGJY33.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "tailg",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 14, 
        name: "Xe đạp điện NIJIA SWIFT 2 Yên", 
        price: 12900000, 
        img: "assets/img/NIJIASWIFT2.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "nijia",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 15, 
        name: "Xe đạp điện NIJIA SWIFT 3 Yên", 
        price: 12900000, 
        img: "assets/img/NIJIASWIFT3.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "nijia",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 16, 
        name: "Xe đạp điện NIJIA WINTER", 
        price: 12200000, 
        img: "assets/img/NIJIA_WINTERS.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "nijia",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 17, 
        name: "Xe đạp điện NIJIA WINTER S", 
        price: 12200000, 
        img: "assets/img/NIJIA_WINTERS.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "nijia",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 18, 
        name: "Xe đạp điện Yadea VC Icandy", 
        price: 14000000, 
        img: "assets/img/YADEAVC.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "yadea",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 19, 
        name: "Xe đạp điện Yadea I-Fun", 
        price: 9990000, 
        img: "assets/img/YADEAIFUN.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "yadea",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 20, 
        name: "Xe đạp điện Yadea I6", 
        price: 11800000, 
        img: "assets/img/YADEAI6.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "yadea",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 21, 
        name: "Xe đạp điện Yadea I8", 
        price: 13990000, 
        img: "assets/img/YADEAI8.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "yadea",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 22, 
        name: "Xe đạp điện Yadea I5", 
        price: 11500000, 
        img: "assets/img/YADEAI5.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "yadea",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 23, 
        name: "Xe đạp điện Yadea IGO", 
        price: 13000000, 
        img: "assets/img/YADEAIGO.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "yadea",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
    { 
        id: 24, 
        name: "Xe đạp điện Osakar X8", 
        price: 13900000, 
        img: "assets/img/osakar_x8.jpg", 
        battery: "Ắc quy 48V",
        range: "170km",
        brand: "osakar",
        desc: "Thiết kế xe đạp truyền thống kết hợp động cơ điện hỗ trợ lực đạp nhẹ nhàng." 
    },
];