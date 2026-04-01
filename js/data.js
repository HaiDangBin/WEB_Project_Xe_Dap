
const products = [
    { 
        id: 1, 
        name: "Xe đạp điện Osakar A10", 
        price: 12800000, 
        img: "assets/img/osakar_a10.jpg",
        battery: "Lithium-ion",
        range: "45km",
        brand: "osakar",
        desc: `Xe đạp điện Osakar A10 có thiết kế hiện đại và nhỏ gọn, với những sự cải tiến vượt bậc so với các phiên bản trước đó là xe đạp điện Osakar A8 và A9. Xe từ lúc ra mắt đã làm mưa làm gió trên thị trường xe đạp điện và được người dùng đánh giá là phù hợp với mọi đối tượng từ học sinh đến người lớn tuổi.
        Xe đạp điện A10 Osakar được thiết kế với sự tinh tế và hiện đại, tạo nên một kiểu dáng trẻ trung và năng động.
        Osakar A10 có khung xe nhẹ và chắc chắn, được làm từ hợp kim thép chất lượng cao. Khung xe được sản xuất theo phong cách thể thao, đảm bảo độ bền và độ cứng tối ưu. Kiểu dáng khung xe cân đối và gọn nhẹ, mang đến sự thoải mái cho khách hàng.
        Xe đạp điện A10 của Osakar được trang bị hệ thống phanh cơ trước và sau. Hệ thống phanh này đảm bảo khả năng phanh mạnh mẽ và an toàn, giúp bạn dễ dàng kiểm soát tốc độ và dừng lại một cách nhanh chóng khi cần thiết.
        Để mang lại trải nghiệm chạy xe êm ái trên địa hình khác nhau, Osakar A10 được lắp thêm hệ thống giảm sóc dầu thủy lực. Hệ thống này bao gồm: thụt dầu thủy lực ở bánh trước và lo xo trụ thủy lực ở bánh sau.
        Osakar A10 còn được lắp thêm một khóa chống trộm vận hành bằng từ. Bạn có thể dễ dàng khóa và mở khóa xe từ xa, đồng thời bảo vệ xe khỏi việc bị đánh cắp và tìm xe một cách dễ dàng hơn.`,
        specs: {
            "Kích thước xe": "1740 x 610 x 1010mm",
            "Tốc độ tối đa": "40 km/h",
            "Quãng đường": "45 km",
            "Trọng lượng": "40Kg",
            "Chiều cao yên": "720 mm",
            "Số người chở": "2 người",
            "Thời gian sạc": "	6 – 8 giờ",
            "Chiều dài cơ sở": "1200mm"

        }
    },
    { 
        id: 2, 
        name: "Xe đạp điện Osakar A8", 
        price: 12000000, 
        img: "assets/img/osakar_a8.jpg", 
        battery: "Pin Lithium-ion",
        range: "50km",
        brand: "osakar",
        desc: `Xe đạp điện Osakar A8 là sản phẩm xe điện hiện đại và thân thiện. Được thương hiệu Osakar sản xuất nhằm đem lại một phương tiện di chuyển nhỏ gọn và tiện lợi cho học sinh và các cô, các chị nội trợ.
        Xe đạp điện Osakar A8 được thiết kế hiện đại, tỉ mỉ đến từng chi tiết. Với sự tập trung vào cảm nhận của người sử dụng, Osakar đã tạo ra một chiếc xe đạp điện vừa đảm bảo tính thẩm mỹ mà vừa rất tiện dụng.
        Xe điện Osakar A8 được trang bị nhiều linh kiện và phụ tùng cao cấp, đảm bảo sự đáng tin cậy và hiệu suất tối ưu.
        Có thể kể đến một số linh - phụ kiện như: Lốp cao su không săm, vành đúc hợp kim, phuộc lò xo dầu thủy lực, đèn LED, hệ thống chống trộm, ... Mang đến trải nghiệm tuyệt vời cho người sử dụng.
        Như đã nói, xe Osakar được trang bị hệ thống đèn LED với khả năng chiếu sáng tốt. Hệ thông chiếu sáng đèn LED này có độ sáng cao, và đèn pha của xe đạp điện Osakar A8 được bố trí ở đầu tay lái cho tầm chiếu sáng rộng. Giúp người điều khiển có một tầm quan sát an toàn khi vận hành và trong suốt quãng đường di chuyển.
        Đặc biệt, xe đạp điện Osakar A8 còn được tích hợp thắng cơ ở cả bánh trước và sau, đảm bảo hệ thống phanh mạnh mẽ và an toàn. 
        Xe đạp điện A8 Osakar sử dụng động cơ mạnh mẽ với công suất lên đến 240W - 250W, ít hao phí năng lượng. Giúp xe tăng tốc nhanh chóng và giúp xe di chuyển nhẹ nhàng trên địa hình đồi, vượt qua đường dốc và đạt vận tốc tối đa một cách dễ dàng.
        `,
        specs: {
            "Kích thước xe": "1800 x 640 x 1070mm",
            "Tốc độ tối đa": "40 km/h",
            "Quãng đường": "45 km",
            "Trọng lượng": "40Kg",
            "Chiều cao yên": "720 mm",
            "Số người chở": "2 người",
            "Phân bổ bánh trước": "	15kg",
            "Phân bổ bánh sau": "	25kg",
            "Chiều dài cơ sở": "1250mm"
        } 
    },
    { 
        id: 3, 
        name: "Xe đạp điện Osakar Alpha Sport", 
        price: 14200000, 
        img: "assets/img/osakar_alphasport.jpg", 
        battery: "Ắc quy 48V",
        range: "50km",
        brand: "osakar",
        desc: "" 
    },
    { 
        id: 4, 
        name: "Xe đạp điện Osakar Mandi", 
        price: 14800000, 
        img: "assets/img/osakar_mandi.jpg", 
        battery: "Ắc quy 48V-20Ah",
        range: "90km",
        brand: "osakar",
        desc: `Với thiết kế nhỏ gọn, thanh thoát và hàng loạt tính năng vượt trội, Osakar Mandi mang đến trải nghiệm hoàn hảo trên mọi hành trình. Đây là sự lựa chọn lý tưởng cho học sinh, sinh viên và người yêu thích xe điện nhỏ gọn nhưng đầy mạnh mẽ.
        Xe đạp điện Osakar Mandi được thiết kế với phong cách hiện đại, trẻ trung, hướng đến đối tượng khách hàng là học sinh, sinh viên và những người trẻ tuổi.
        Thân xe được thiết kế cân đối, gọn nhẹ với kích thước 1650 x 675 x 1035 mm, phù hợp với mọi vóc dáng. Người dùng có thể tự do lựa chọn màu xe với bảng màu 14 tuỳ chọn, từ đỏ cá tính đến xám hồng nhẹ nhàng và xanh năng động, giúp bạn dễ dàng chọn lựa theo sở thích.
Xe được trang bị hệ thống đèn full LED hiện đại giúp tăng khả năng quan sát và đảm bảo an toàn khi di chuyển, lớp sơn chống oxy hóa mang lại vẻ đẹp bền vững.
Xe đạp điện Osakar Mandi được trang bị động cơ công suất 500W, có thể đạt tối đa 1000W, giúp xe vận hành ổn định trên mọi địa hình. Động cơ có tiêu chuẩn chống nước IP67, hoạt động tốt ngay cả khi ngập nước ở độ sâu 0,5m trong 30 phút.
Với động cơ khỏe, Osakar Mandy dễ dàng vượt qua các đoạn đường dốc, tăng tốc nhanh chóng và vận hành ổn định. Xe có thể đạt vận tốc 40 km/h và đi được quãng đường lên tới 90 km cho mỗi lần sạc đầy.`,
        specs: {
            "Kích thước xe": "1650 x 675 x 1035 mm",
            "Tốc độ tối đa": "40 km/h",
            "Quãng đường": "90 km",
            "Trọng lượng": "98Kg",
            "Chiều cao yên": "720 mm",
            "Số người chở": "2 người",
            "Động cơ": "500W",
            "Tải cho phép": "79 kg"
        } 
    },
    { 
        id: 5, 
        name: "Xe đạp điện Osakar Star", 
        price: 13500000, 
        img: "assets/img/osakar_star.jpg", 
        battery: "Lithium-ion",
        range: "45km",
        brand: "osakar",
        desc: `Trong thời đại ngày càng phát triển của công nghệ và quan tâm đến việc bảo vệ môi trường, xe đạp điện đã trở thành một giải pháp vận chuyển thông minh và thân thiện với môi trường. Và trong số các dòng xe đạp điện trên thị trường xe điện hiện nay, xe đạp điện Osakar Star là một trong những lựa chọn nổi bật với tính tiện lợi và thiết kế hiện đại.
        Một trong những ưu điểm nổi bật của Osakar Star là sở hữu thiết kế thời trang, hiện đại, trẻ trung và năng động.
        Với khung xe được làm bằng hợp kim thép, và được sơn tĩnh điện nhẹ nhàng và chắc chắn, Osakar Star mang đến sự thoải mái và dễ dàng điều khiển. Khả năng chịu tải trọng của khung xe lên tới 170Kg, có thể chở được 2 người và thêm 1 số vật dụng khác.
        Bạn có thể điều chỉnh yên xe và tay lái để phù hợp với chiều cao và sở thích cá nhân của mình. Ngoài ra, màu sắc và kiểu dáng đẹp mắt của Osakar Star còn là điểm nhấn tạo nên phong cách riêng của bạn.`,
        specs: {
            "Kích thước xe": "1650 x 680 x 1050 mm",
            "Tốc độ tối đa": "23 Km/h",
            "Quãng đường": "45 km",
            "Trọng lượng": "40Kg",
            "Kích thước lốp": "( 76 - 305 ) 16 x 3.0",
            "Số người chở": "2 người",
            "Động cơ": "500W",
            "Lốp": "Không săm"
        }  
    },
    { 
        id: 6, 
        name: "Xe đạp điện Osakar Sunoo", 
        price: 14800000, 
        img: "assets/img/osakar_sunoo.png", 
        battery: "Chì Axit 48V-20Ah",
        range: "60km",
        brand: "osakar",
        desc: `Xe đạp điện Osakar Sunoo là dòng xe mới mang phong cách hiện đại, nhỏ gọn và cực kỳ thân thiện với người dùng. Được thiết kế hướng đến học sinh, sinh viên và đặc biệt là phái nữ, mẫu xe này không yêu cầu bằng lái, giúp người dùng dễ dàng di chuyển hằng ngày một cách hợp pháp, an toàn và tiết kiệm.
        Đạp điện Osakar Sunoo gây ấn tượng với thiết kế bo tròn mềm mại, mang đến cảm giác trẻ trung, dễ thương nhưng vẫn tinh tế. Từng chi tiết đều được hoàn thiện tỉ mỉ, tạo nên vẻ ngoài năng động và sành điệu. Mẫu xe này chính là “trợ thủ” thời trang hoàn hảo cho các bạn trẻ yêu thích phong cách hiện đại, đáng yêu và đậm chất riêng.
        Điểm nhấn nổi bật nhất của Osakar Sunoo là tính năng mở khóa bằng thẻ từ NFC. Thay vì sử dụng chìa khóa truyền thống, người dùng chỉ cần chạm thẻ để khởi động xe nhanh chóng, an toàn và cực kỳ tiện lợi. Công nghệ hiện đại này giúp nâng tầm trải nghiệm, mang đến cảm giác “chuẩn xe điện thông minh” cho thế hệ trẻ.
        Một trong những điểm cộng đáng giá của Osakar Sunoo chính là tích hợp bàn đạp hỗ trợ thông minh, cho phép người dùng dễ dàng đạp xe khi hết điện. Tính năng này cực kỳ hữu ích cho học sinh, sinh viên – những người thường xuyên di chuyển quãng đường ngắn trong ngày, giúp duy trì sự chủ động trong mọi tình huống.
        Xe đạp điện Osakar Sunoo được trang bị động cơ công suất tối đa 1000W, mang đến khả năng vận hành bền bỉ, tăng tốc mượt mà và tiết kiệm năng lượng. Xe đạt chuẩn chống nước IP67, có thể vận hành ổn định khi ngập nước sâu đến 0,5m trong 30 phút, giúp người dùng hoàn toàn yên tâm khi di chuyển trong điều kiện thời tiết mưa gió hay khu vực trũng thấp.
        Lựa chọn xe đạp điện Osakar Sunoo không chỉ mang lại sự tiện lợi mà còn thể hiện lối sống xanh, thân thiện với môi trường. Trong bối cảnh ô nhiễm không khí ngày càng nghiêm trọng, việc sử dụng xe điện giúp giảm khí thải, giảm tiếng ồn và góp phần xây dựng một không gian sống trong lành hơn.
        `,
        specs: {
            "Kích thước xe": "1670x705x1060 mm",
            "Tốc độ tối đa": "38km/h",
            "Quãng đường": "60km",
            "Trọng lượng": "81 kg",
            "Công suất tối đa": "1000W",
            "Loại động cơ": "OSAKAR JZ48V500W",
            "Động cơ": "500W",
            "Hệ thống đèn": "LED"
        }   
    },
    { 
        id: 7, 
        name: "Xe đạp điện Osakar Win", 
        price: 13900000, 
        img: "assets/img/osakar_win.jpg", 
        battery: "Ắc quy 48V",
        range: "70km",
        brand: "osakar",
        desc: "" 
    },
    { 
        id: 8, 
        name: "Xe đạp điện TAILG GR55", 
        price: 12900000, 
        img: "assets/img/TAILGGR55.jpg", 
        battery: "Ắc quy 48V",
        range: "70km",
        brand: "tailg",
        desc: "" 
    },
    { 
        id: 9, 
        name: "Xe đạp điện TAILG GR56", 
        price: 14990000, 
        img: "assets/img/TAILGGR56.jpg", 
        battery: "60V20Ah",
        range: "60km",
        brand: "tailg",
        desc: `Bạn đang tìm một chiếc xe điện vừa đẹp mắt, dễ đi, lại tiết kiệm chi phí để đồng hành mỗi ngày? Xe đạp điện TAILG GR56 chính là một lựa chọn đáng cân nhắc. Với kiểu dáng gọn gàng, động cơ khỏe khoắn và nhiều tiện ích hiện đại, GR56 không chỉ giúp bạn đi học, đi làm hay dạo phố thoải mái mà còn thể hiện được cá tính riêng. Đây là mẫu xe được nhiều bạn trẻ yêu thích bởi sự kết hợp hoàn hảo giữa phong cách hiện đại và khả năng vận hành bền bỉ.
        Mẫu xe đạp điện GR56 chinh phục ánh nhìn ngay từ cái nhìn đầu tiên với sự kết hợp hài hòa giữa nét cổ điển thanh lịch và phong cách hiện đại, năng động. Chiếc xe này không chỉ là phương tiện di chuyển mà còn là một tuyên ngôn cá tính trên phố.
        Đừng để vóc dáng nhỏ gọn của TAILG GR56 đánh lừa bạn – bên trong xe là động cơ 500W mạnh mẽ, cho phép đạt tốc độ tối đa 40km/h. Vừa đủ nhanh để bạn thoải mái di chuyển trong thành phố, vừa an toàn cho học sinh, sinh viên sử dụng hằng ngày.
        Điểm cộng lớn của GR56 chính là quãng đường đi được lên đến 60km chỉ với một lần sạc đầy (6–8 giờ). Như vậy, bạn có thể yên tâm dùng xe cho cả tuần đi học hay đi làm mà không cần lo lắng sạc pin liên tục.
        Xe còn có khả năng leo dốc đến 10°, dễ dàng vượt qua cầu vượt hay đoạn đường nghiêng mà vẫn giữ được sự ổn định. Hệ thống phanh đĩa trước – tang trống sau kết hợp với lốp xe bản lớn giúp xe bám đường chắc chắn, an toàn trong mọi tình huống.
        Với sự kết hợp giữa động cơ bền bỉ, phanh an toàn và khả năng tiết kiệm điện, TAILG GR56 thực sự là một lựa chọn đáng tin cậy cho mọi chuyến đi.`,
        specs: {
            "Kích thước xe": "1670 × 730 × 1040 (mm)",
            "Tốc độ tối đa": "40 km/h",
            "Quãng đường": "60 km",
            "Trọng lượng": "42 kg",
            "Chiều cao yên": "720 mm",
            "Phanh": "Phanh đĩa trước – Tang trống sau",
            "Thời gian sạc": "	6 – 8 giờ",
            "Quy cách lốp": "Trước: 3.0-10 Sau: 2.75-10"

        }
    },
    { 
        id: 10, 
        name: "Xe đạp điện TAILG GX30", 
        price: 12600000, 
        img: "assets/img/TAILGGX30.jpg", 
        battery: "Ắc quy 48V",
        range: "70km",
        brand: "tailg",
        desc: "" 
    },
    { 
        id: 11, 
        name: "Xe đạp điện TAILG JS32", 
        price: 12600000, 
        img: "assets/img/TAILGJS32.jpg", 
        battery: "Ắc quy 48V",
        range: "70km",
        brand: "tailg",
        desc: "" 
    },
    { 
        id: 12, 
        name: "Xe đạp điện TAILG JS50", 
        price: 15400000, 
        img: "assets/img/TAILGJS50.jpg", 
        battery: "5Ắc quy 20A",
        range: "100km",
        brand: "tailg",
        desc: `Xe đạp điện Tailg JS50 là một trong những sản phẩm đột phá trong thị trường xe điện hiện nay, mang đậm phong cách thiết kế Châu Âu với những tính năng vượt trội, mang đến trải nghiệm di chuyển tiện lợi, an toàn và đẳng cấp. Với hơn 90% linh kiện nhập khẩu và công nghệ tiên tiến, Tailg JS50 không chỉ nổi bật về hiệu suất mà còn gây ấn tượng bởi thiết kế tinh tế, phù hợp với mọi nhu cầu di chuyển trong đô thị và trên mọi địa hình.
        Xe Đạp Điện Tailg JS50 sở hữu thiết kế thời thượng, đạt tiêu chuẩn xuất khẩu cho thị trường Châu Âu. Chiếc xe này được phát triển và bổ sung các công nghệ sử dụng cho xe điện với độ chắc chắn cao, khả năng tăng tốc nhanh và sự hợp lý của nhiều công nghệ tiên tiến. Đây chính là sự lựa chọn lý tưởng cho những ai yêu thích sự sang trọng và hiện đại.
        Tailg JS50 được trang bị bánh trước vành đúc hợp kim La zăng, có khả năng chịu lực cao, giúp xe di chuyển dễ dàng trên mọi địa hình. Vòng đúc kim này không chỉ chắc chắn mà còn giúp tăng cường độ bền cho xe, đảm bảo an toàn cho người sử dụng. Đặc biệt, bánh xe được trang bị lốp cao su không cọ với mặt xúc tiếp lớn, giúp xe dễ dàng vượt qua cung đường cứng, mang lại cảm giác ổn định và an toàn nhất trong mọi điều kiện.
        Xe Đạp Điện Tailg JS50 được trang bị hệ thống đèn LED Bi với khả năng chiếu sáng vượt trội, giúp bạn dễ dàng chuyển đổi trong điều kiện thiếu ánh sáng. Đèn LED này được đặt ngay giữa hai tay lái, giúp bạn có thể chiếu sáng góc hoạt động và tăng khả năng quan sát. Hệ thống đèn chiếu sáng này có cơ chế quay theo hướng dẫn của tay lái, đảm bảo bạn có thể dễ dàng giám sát mọi vật cản phía trước. Phía trên đầu đèn là mặt đồng hồ điện tử thông minh hiển thị đầy đủ các thông số kỹ thuật, giúp người điều khiển kiểm soát trạng thái xe một cách dễ dàng.
        Tailg JS50 được trang bị để kéo dài phần thân dưới của xe , giúp người lái tư thế ngồi thoải mái ngay cả khi di chuyển trong thời gian dài. Kết hợp yên xe có thiết kế đôi , Chiếc xe mang đến cảm giác giác nữ ái, thoải mái cho người sử dụng. Yên xe được làm từ chất liệu cao cấp từ da nhân tạo, có khả năng chống nước và đàn hồi cao, kết hợp với nệm cao su tự nhiên mang đến tình ái tối đa khi ngồi. Yên trước có thể mở ra dễ dàng để chứa bình khắc quy , trong khi Yên sau được gắn cố định và có thể chịu tải lên đến 80kg, rất phù hợp để bỏ thêm một người lớn.
        Xe Đạp Điện Tailg JS50 sở hữu động cơ 800W, đây là dòng động cơ mạnh mẽ nhất được sử dụng cho các dòng xe đạp điện hiện nay. Động cơ này được sản xuất theo tiêu chuẩn Châu Âu , đảm bảo độ bền cao và hiệu suất hoạt động vượt trội. Đặc biệt, động cơ này có khả năng chống nước hoàn hảo, giúp bạn có tâm trí sử dụng ngay cả trong điều kiện thời tiết mưa gió. Được đặt tại tâm bánh xe, động cơ giúp xe tăng tốc nhanh chóng nhờ cơ chế vận hành trực tiếp, giảm thiểu hao phí năng lượng và tăng hiệu quả sử dụng tối đa.
        Tailg JS50 là lựa chọn tuyệt vời cho những người yêu thích tiện nghi, an toàn và hiệu suất cao. Hãy trải nghiệm chiếc xe đạp điện này để tận hưởng cảm giác chuyển động nhẹ nhàng, nhanh chóng và đầy đủ!`,
        specs: {
            "Kích thước xe": "	1675mm x 665mm x 1080mm",
            "Tốc độ tối đa": "60km/giờ",
            "Quãng đường": "0 – 100km/ 1 lần sạc",
            "Trọng lượng": "97kg",
            "Chiều cao yên": "710 mm",
            "Phanh": "Phanh đĩa",
            "Thời gian sạc": "10 tiếng",
            "Lốp": "Liền mạch săm"

        }
    },
    { 
        id: 13, 
        name: "Xe đạp điện TAILG JY33", 
        price: 10500000, 
        img: "assets/img/TAILGJY33.jpg", 
        battery: "Ắc quy 48V",
        range: "60km",
        brand: "tailg",
        desc: `Thiết kế lấy cảm hứng từ hoạt hình mang đến năng lượng tươi trẻ, tăng cường sự thú vị và dễ nhận diện.
        Lựa chọn màu sắc nổi bật phù hợp với nhiều phong cách cá nhân khác nhau.
        Chiều cao yên 720mm phù hợp với người dùng có nhiều chiều cao khác nhau.
        Thân xe nhẹ và khả năng xử lý linh hoạt giúp bất kỳ ai, kể cả người dùng có vóc dáng nhỏ, đều có thể điều khiển một cách dễ dàng.
        Yên xe cho hai người cho phép bạn dễ dàng chở theo bạn bè.
        Tốc độ tối đa 30 km/h, lý tưởng cho việc đi lại trong thành phố và di chuyển trong khuôn viên trường.
        Trang bị phanh tang trống trước và sau giúp đảm bảo khả năng dừng xe tin cậy trong những tình huống bất ngờ.
        Lốp chống trượt đảm bảo sự ổn định ngay cả trên những bề mặt trơn trượt.
        Cơ sở bánh xe 1010mm và cấu trúc khung xe vững chắc mang lại trải nghiệm lái xe ổn định và đáng tin cậy.`,
        specs: {
            "Kích thước xe": "1675mm x 665mm x 1080mm",
            "Tốc độ tối đa": "30Km/h",
            "Quãng đường": "55-60km/ 1 lần sạc",
            "Trọng lượng": "43kg",
            "Chiều cao yên": "720 mm",
            "Phanh": "Phanh đĩa",
            "Thời gian sạc": "6-8h",
            "Lốp": "Liền săm"

        } 
    },
    { 
        id: 14, 
        name: "Xe đạp điện NIJIA SWIFT 2 Yên", 
        price: 12900000, 
        img: "assets/img/NIJIASWIFT2.jpg", 
        battery: "Ắc quy 48V",
        range: "70km",
        brand: "nijia",
        desc: "" 
    },
    { 
        id: 15, 
        name: "Xe đạp điện NIJIA SWIFT 3 Yên", 
        price: 12900000, 
        img: "assets/img/NIJIASWIFT3.jpg", 
        battery: "Ắc quy 48V",
        range: "70km",
        brand: "nijia",
        desc: "" 
    },
    { 
        id: 16, 
        name: "Xe đạp điện NIJIA WINTER", 
        price: 12200000, 
        img: "assets/img/NIJIA_WINTERS.jpg", 
        battery: "Ắc quy 48V",
        range: "70km",
        brand: "nijia",
        desc: "" 
    },
    { 
        id: 17, 
        name: "Xe đạp điện NIJIA WINTER S", 
        price: 12200000, 
        img: "assets/img/NIJIA_WINTERS.jpg", 
        battery: "Ắc quy 48V",
        range: "70km",
        brand: "nijia",
        desc: "" 
    },
    { 
        id: 18, 
        name: "Xe đạp điện Yadea VC Icandy", 
        price: 14000000, 
        img: "assets/img/YADEAVC.jpg", 
        battery: "48V – 22Ah (YADEA TTFAR)",
        range: "60km",
        brand: "yadea",
        desc: `Xe đạp điện YADEA iCANDY là mẫu xe nổi bật trong phân khúc xe đạp điện dành cho học sinh và người dùng cần phương tiện di chuyển gọn nhẹ trong đô thị. Sở hữu thiết kế trẻ trung, nhỏ gọn cùng nhiều màu sắc thời trang, iCANDY mang đến cảm giác hiện đại và dễ sử dụng ngay từ cái nhìn đầu tiên.
        Bên cạnh ngoại hình bắt mắt, YADEA iCANDY còn được trang bị động cơ vận hành ổn định, ắc quy dung lượng 48V – 22Ah cho quãng đường di chuyển lên tới khoảng 60 km sau mỗi lần sạc. Kết hợp cùng các tiện ích như đèn LED chiếu sáng, màn hình hiển thị rõ ràng và hệ thống chống trộm thông minh, mẫu xe này đáp ứng tốt nhu cầu di chuyển hàng ngày một cách tiện lợi và an toàn.
        YADEA iCANDY gây ấn tượng ngay từ cái nhìn đầu tiên nhờ thiết kế nhỏ gọn, hiện đại và phù hợp với phong cách năng động của người trẻ. Tổng thể thân xe được tạo hình với các đường bo tròn mềm mại, mang lại cảm giác thanh lịch nhưng vẫn giữ được nét cá tính. Kiểu dáng gọn gàng giúp xe dễ dàng di chuyển trên các tuyến đường đô thị đông đúc, đồng thời thuận tiện khi dắt xe hoặc quay đầu trong không gian hẹp.
        YADEA iCANDY được trang bị động cơ điện có công suất danh định 240 W, đáp ứng đúng tiêu chuẩn của dòng xe đạp điện. Tuy nhiên, trong quá trình vận hành thực tế, động cơ có thể đạt công suất tối đa lên đến 1000 W, giúp xe tăng tốc mượt mà và di chuyển linh hoạt trong môi trường đô thị.
        YADEA iCANDY được trang bị ắc quy dung lượng 48 V – 22 Ah, kết hợp cùng công nghệ quản lý năng lượng của YADEA giúp tối ưu hiệu suất vận hành. Hệ thống pin này cung cấp nguồn điện ổn định cho động cơ, đồng thời đảm bảo khả năng di chuyển bền bỉ trong suốt quá trình sử dụng.
        Bên cạnh thiết kế trẻ trung và khả năng vận hành ổn định, YADEA iCANDY còn được trang bị nhiều yếu tố an toàn nhằm mang lại sự yên tâm cho người sử dụng trong quá trình di chuyển hàng ngày.
        Trước hết, xe sử dụng hệ thống phanh tang trống cho cả bánh trước và bánh sau. Đây là loại phanh thường được trang bị trên các dòng xe đạp điện nhờ khả năng hoạt động ổn định, dễ kiểm soát và phù hợp với tốc độ di chuyển vừa phải của xe. Hệ thống phanh giúp người lái chủ động giảm tốc và dừng xe an toàn trong nhiều tình huống khác nhau.
        Nhờ sự kết hợp giữa hệ thống phanh ổn định, giảm xóc êm ái và lốp xe an toàn, YADEA iCANDY mang lại trải nghiệm di chuyển chắc chắn và đáng tin cậy cho người sử dụng.`,
        specs: {
            "Động cơ": "240W(công suất danh định) - tối đa 1000W",
            "Thời gian sạc": "4 – 5 giờ",
            "Quãng đường": "Khoảng 60 km / lần sạc ",
            "Trọng lượng": "40 kg",
            "Hệ thống vận hành": "Tự động hoàn toàn",
            "Phanh": "Phanh đĩa trước / Phanh tang trống sau",
            "Hệ thống giảm xóc trước": "Phuộc ống lồng – giảm chấn thủy lực",
            "Hệ thống giảm xóc sau": "Lò xo trụ – giảm chấn thủy lực"

        }
    },
    { 
        id: 19, 
        name: "Xe đạp điện Yadea I-Fun", 
        price: 9990000, 
        img: "assets/img/YADEAIFUN.jpg", 
        battery: "Pin Lithium 48V-12Ah",
        range: "45km",
        brand: "yadea",
        desc: `Yadea iFun là một trong những mẫu xe đạp điện được yêu thích hiện nay, đặc biệt phù hợp với những người trẻ tuổi và những ai ưa thích sự nhỏ gọn, tiện lợi. Với thiết kế tinh tế, màu sắc tươi trẻ cùng nhiều tính năng ưu việt, iFun đã nhanh chóng chiếm được cảm tình của người tiêu dùng.
        YADEA iFUN được thế hiện qua những đường nét mềm mại, tinh tế cùng sự kết hợp hoàn hảo giữa màu sắc đa dạng và thẩm mỹ độc đáo. Với thiết kế nhỏ gọn, xe phù hợp với nhiều phong cách cá nhân, giúp bạn tự tin tỷ lệ trên đường phố.
        Hệ thống đèn pha LED được trang bị công nghệ thấu kính đem lại khả năng chiếu sáng vượt trội. Đèn LED không chỉ đảm bảo tầm nhìn rõ ràng trong mọi điều kiện mà còn tăng thêm tính thẩm mỹ, tô điểm vẻ đẹp hiện đại cho xe.
        Sử dụng công nghệ cuộn dây đồng nguyên chất, động cơ HUB giúp tăng hiệu suất, đảm bảo sự bên bỉ, tiết kiệm và vận hành êm ái. Với tốc độ tối đa 24 km/h và công suất 250W, xe thích hợp cho các chuyến đi trong thành phố.`,
        specs: {
            "Động cơ": "250W - HUB",
            "Vận tốc": "24km/h",
            "Quãng đường": "45 km / 1 lần sạc",
            "Trọng lượng": "40 kg",
            "Khung xe": "Thép hợp kim - Sơn tĩnh điện"
        }
    },
    { 
        id: 20, 
        name: "Xe đạp điện Yadea I6", 
        price: 11800000, 
        img: "assets/img/YADEAI6.jpg", 
        battery: "Ắc quy 48V",
        range: "50km",
        brand: "yadea",
        desc: `Xe đạp điện i6 Yadea có kiểu dáng nhỏ gọn và hiện đại. Chiều dài, rộng, cao của xe lần lượt là 1480 x 685 x 990 mm. Xe có chiều cao yên 700mm và trọng lượng chưa đầy 40 kg.
        Mẫu xe điện này có thiết kế dễ thương với các tone màu chủ đạo là các màu Pastel nhẹ nhàng, trang nhã. Đặc biệt phù học hợp cho các em học sinh nữ sử dụng để đi học, đi chơi.
        Ngoài các trang bị hiện đại mà hầu hết các chiếc xe đạp điện sở hữu, thì xe điện Yadea I6 còn được tích hợp bàn đạp trợ lực dễ dàng tháo rời; giỏ xe trước tiện lợi. Qua đó giúp các em học sinh cấp 1, cấp 2 sử dụng xe dễ dàng và thuận tiện hơn.
        Tổng thể toàn xe có thiết kế tối giản, tinh gọn với các tính năng, tiện ích cần thiết được bố trí một cách hài hòa, dễ dàng thao tác và hơn hết là mang lại tính thẩm mỹ cho chiếc xe.
        Khung xe lộ thiên, dễ dàng sửa chữa và thay thế khi có hư hỏng hoặc sự cố. Bề mặt khung được sơn tĩnh điện nhiều lớp, cùng các màu sơn có độ bền cao, chống oxi hóa và khó phai màu.`,
        specs: {
            "Động cơ": "250W - 3 pha - Không chổi than",
            "Vận tốc": "35 - 40 km/h",
            "Quãng đường": "45 - 50 km / 1 lần sạc",
            "Trọng lượng": "40 kg",
            "Khung xe": "Thép hợp kim - Sơn tĩnh điện"
        }
    },
    { 
        id: 21, 
        name: "Xe đạp điện Yadea I8", 
        price: 13990000, 
        img: "assets/img/YADEAI8.jpg", 
        battery: "Ắc quy Graphene TTFAR 48V - 22Ah",
        range: "65km",
        brand: "yadea",
        desc: `Xe đạp điện Yadea I8 là mẫu xe đạp điện mới vừa được ra mắt năm 2023 của hãng xe điện Yadea. Xe được thiết kế với kiểu dáng nhỏ gọn, trẻ trung, màu sắc trang nhã. Rất phù hợp cho các em học sinh cấp 1 (lớp 4, 5), học sinh cấp 2, đặc biệt là các bé gái.
        Xe đạp điện I8 Yadea có thiết kế nhỏ gọn, với kích thước theo thông tin của hãng cung cấp về chiều dài, chiều rộng, chiều cao lần lượt là 1450mm x 670mm x 910mm. Chiều cao yên xe 750mm và khoảng sáng gầm xe là 120mm.
        Khung và thân xe sở hữu thiết kế đặc biệt, chắc chắn, mang lại sự khỏe khoắn và cứng cáp cho chiếc xe. Thân xe được sơn các gam màu Pastel nhẹ nhàng, tinh tế, giúp xe trông sang trọng và đẹp mắt hơn.
        Xe điện I8 Yadea có 6 màu sắc tùy chọn là màu trắng, hồng, xanh ngọc, xanh da trời, màu kem và màu xám. Bề mặt được sơn nhiều lớp và có thêm lớp sơn bóng giúp bảo vệ màu sơn tốt hơn, lớp sơn khó phai màu.
        Yên xe tách rời với yên sau có thêm phần đệm lưng, tránh hiện tượng ngả người về phía sau khi xe tăng tốc.  Mang lại trải nghiệm lái xe an toàn và tiện lợi.
        Bên cạnh đó thì các chi tiết như bộ đèn, đồng hồ, hệ thống phanh, bộ giảm xóc, giỏ xe, ... cũng được bố trí hài hòa. Vừa giúp người dễ thao tác, điều khiển xe, vừa tăng tính thẩm mỹ cho tổng thể xe điện I8.`,
        specs: {
            "Động cơ": "250W - 3 pha - Không chổi than",
            "Vận tốc": "25km km/h",
            "Quãng đường": "65km/lần sạc",
            "Trọng lượng": "68 kg",
            "Công suất cực đại": "Max 700W",
            "Chiều cao yên xe": "750mm"

        }
    },
    { 
        id: 22, 
        name: "Xe đạp điện Yadea I5", 
        price: 11500000, 
        img: "assets/img/YADEAI5.jpg", 
        battery: "Ắc quy TIANNENG",
        range: "65km",
        brand: "yadea",
        desc: `Xe đạp điện Yadea I5 là mẫu xe đạp điện nhỏ gọn và là một trong những sản phẩm nổi bật và thu hút sự quan tâm của người tiêu dùng trong phân khúc xe đạp điện hiện nay.
        Đây là một chiếc xe đạp điện đa năng, được thiết kế với nhiều tính năng tiện ích và công nghệ tiên tiến. Kiểu dáng xe đơn giản, nhỏ nhắn, bền đẹp và dễ dàng điều khiển.
        Thiết kế của xe điện Yadea I5 là sự kết hợp giữa phong cách hiện đại và tinh tế. Xe được thiết kế với động cơ công suất cao, khung xe thông dụng bền chắc và nhiều tính năng tiện ích, đáp ứng nhu cầu di chuyển của người dùng.
        Xe Yadea I5 có kích thước nhỏ gọn, khung xe I5 được thiết kế với kích thước dài x rộng x cao lần lượt là 1440×680×1000 mm. Tổng trọng lượng của xe bao gồm cả pin chỉ tầm khoảng 40Kg.
        Yên xe có lối thiết kế 2 yên tách rời và được làm từ chất liệu có độ đàn hồi cao, chống bong tróc da, giúp người dùng ngồi thoải mái.
        Các chi tiết của mẫu xe đạp điện Yadea I5 được thiết kế một cách tinh tế và chú trọng đến tính thẩm mỹ. Khung xe cũng làm từ chất liệu cao cấp là hợp kim nhôm, với đường nét thanh lịch và cứng cáp, tạo nên sự ấn tượng mạnh mẽ cho người nhìn.
        `,
        specs: {
            "Kích thước": "1440×680×1000",
            "Vận tốc": "25km km/h",
            "Quãng đường": "65km/lần sạc",
            "Trọng lượng": "41 kg",
            "Công suất": "250W",
            "Thời gian sạc": "8-10 tiếng"

        }
    },
    { 
        id: 23, 
        name: "Xe đạp điện Yadea IGO", 
        price: 13000000, 
        img: "assets/img/YADEAIGO.jpg", 
        battery: "Ắc quy 48V",
        range: "50km",
        brand: "yadea",
        desc: `Xe máy điện Yadea Igo là một trong những mẫu xe đạp điện đa năng và hiện đại nhất trên thị trường hiện nay, được sản xuất bởi hãng xe điện Yadea - một trong những thương hiệu xe điện hàng đầu thế giới. 
        Với thiết kế đẹp mắt, chất lượng tốt và khả năng vận hành ấn tượng, Igo là sự lựa chọn hoàn hảo cho những người muốn sở hữu một chiếc xe đạp điện đa năng, tiện lợi và thời trang.
        Mẫu xe đạp điện Yadea Igo được thiết kế với kiểu dáng hiện đại, phong cách thể thao, khung xe bằng kim loại siêu bền, nhẹ và cứng cáp, giúp người dùng dễ dàng di chuyển trên mọi địa hình.
        Đèn pha LED của Igo được thiết kế với kích thước lớn hơn, với dải đèn định vị bao quanh đèn LED chính. Giúp tăng cường ánh sáng và cải thiện khả năng chiếu sáng tốt, đảm bảo an toàn cho người sử dụng khi di chuyển vào ban đêm hay trong điều kiện ánh sáng kém.
        Giỏ xe của Yadea Igo được làm bằng chất liệu chắc chắn, bền đẹp và chịu được tải trọng nặng. Kích thước của giỏ cũng được thiết kế phù hợp với khung xe, không quá to hay quá nhỏ, giúp người sử dụng dễ dàng đựng các vật dụng cá nhân như chai nước, túi xách, bình giữ nhiệt hay những vật dụng khác.
        Xe đạp điện Yadea Igo có thiết kế phần yên xe với 2 yên tách biệt rõ ràng cho người ngồi trước và người ngồi sau được thoải mái nhất.
        Với tiêu chí gọn và nhẹ, chiều cao của xe Igo không quá cao, chỉ cao yên xe chỉ 550mm. Chiều cao này là cực kỳ phù hợp cho những người có chiều cao trung bình 1m50 như các bà nội trợ và các em học sinh cấp 2, cấp 3.`,
        specs: {
            "Kích thước": "1550×650×1040mm",
            "Vận tốc": "25km km/h",
            "Loại lốp": "Lốp không săm",
            "Trọng lượng": "40kg",
            "Công suất định danh": "210W",
            "Loại động cơ": "	Động cơ một chiều không chổi than",
            "Tốc độ": "25km/h"

        }
    },
    { 
        id: 24, 
        name: "Xe đạp điện Osakar X8", 
        price: 13900000, 
        img: "assets/img/osakar_x8.jpg", 
        battery: "48V - 20Ah",
        range: "70km",
        brand: "osakar",
        desc: `Xe đạp điện Osakar X8 là một trong những dòng xe được yêu thích nhất nhờ thiết kế nhỏ gọn, thanh thoát và tích hợp hàng loạt tính năng thông minh. Không chỉ đáp ứng nhu cầu di chuyển tiện lợi, Osakar X8 còn ghi điểm nhờ kiểu dáng hiện đại, phù hợp với mọi đối tượng từ học sinh, sinh viên đến người lớn tuổi.
        Osakar X8 sở hữu diện mạo thanh thoát, với kích thước tổng thể 1545 x 645 x 990 mm. Thiết kế gọn gàng này giúp xe dễ dàng di chuyển trên mọi cung đường, từ phố xá đông đúc đến ngõ hẹp. Phần khung xe chắc chắn, phối màu hài hòa mang lại vẻ ngoài hiện đại và trẻ trung, phù hợp với nhiều phong cách khác nhau. Đây được coi là mẫu xe "quốc dân" lý tưởng cho cả gia đình.
        Xe đạp điện Osakar X8 được trang bị khối động cơ mạnh mẽ với công suất lên đến 1000W, đạt tiêu chuẩn chống nước IP67, cho phép xe vận hành an toàn trong điều kiện ngập nước sâu 0,5m trong vòng 30 phút.
        Ngoài ra, xe còn có chế độ Parking - Chế độ khóa động cơ khi đỗ xe giúp đảm bảo an toàn tuyệt đối, tránh tình trạng trượt tay ga gây nguy hiểm. Đây là tính năng hữu ích, đặc biệt khi xe sử dụng trong khu vực đông người.
        Osakar X8 không chỉ là một phương tiện di chuyển, mà còn là người bạn đồng hành mang đến trải nghiệm thoải mái, an toàn và hiện đại. Từ thiết kế tinh tế đến các tính năng vượt trội, mẫu xe đạp điện này xứng đáng trở thành sự lựa chọn hàng đầu cho mọi gia đình Việt Nam.`,
        specs: {
            "Kích thước": "1545 x 645 x 990 mm",
            "Vận tốc": "38 km/h",
            "Hệ thống treo": "Giảm sóc thuỷ lực",
            "Trọng lượng": "75 Kg",
            "Hệ thống phanh": "Phanh tang trống",
            "Công suất động cơ": "500W",
            "Quãng đường": "50 - 70 km"

        } 
    },
];

const searchInput = document.getElementById('main-search');
const resultsBox = document.getElementById('search-results');

// 2. Lắng nghe sự kiện gõ phím
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    
    if (query.length > 0) {
        // Lọc sản phẩm có tên chứa từ khóa tìm kiếm
        const filtered = products.filter(item => 
            item.name.toLowerCase().includes(query)
        );
        
        displayResults(filtered);
    } else {
        resultsBox.classList.add('d-none'); // Ẩn nếu ô nhập trống
    }
});

// 3. Hàm hiển thị kết quả ra giao diện
function displayResults(list) {
    if (list.length === 0) {
        resultsBox.innerHTML = '<div class="list-group-item text-muted">Không tìm thấy xe nào...</div>';
    } else {
        const html = list.map(item => `
            <a href="${item.link}" class="list-group-item list-group-item-action d-flex align-items-center">
                <i class="bi bi-bicycle me-2 text-success"></i>
                <span>${item.name}</span>
            </a>
        `).join('');
        resultsBox.innerHTML = html;
    }
    resultsBox.classList.remove('d-none');
}
function displayResults(list) {
    const html = list.map(item => `
        <a href="product-detail.html?id=${item.id}" class="list-group-item list-group-item-action">
            <span>${item.name}</span>
        </a>
    `).join('');
    resultsBox.innerHTML = html;
    resultsBox.classList.remove('d-none');
}

// 4. Đóng kết quả khi bấm ra ngoài
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
        resultsBox.classList.add('d-none');
    }
});
