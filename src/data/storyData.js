import { sub } from "three/src/nodes/math/OperatorNode.js";

export const storyData = {
  intro_title: {
    id: "intro_title",
    type: "cover",
    title: `"Rút ruột" dân số vàng:
    Chiếc bẫy nhân lực dưới vỏ bọc kinh tế nền tảng`,
    bg: "https://res.cloudinary.com/dizimfqyz/video/upload/v1777833286/intro_1_my1zhf.mp4",
    next: "intro_sapo",
  },

  intro_sapo: {
    id: "intro_sapo",
    type: "text",
    text: `Trong giai đoạn dân số vàng, lực lượng lao động trẻ được xem là động lực của nền kinh tế. Song thực tế, nhiều người đang rời xa khu vực sản xuất và nghiên cứu để chuyển sang các công việc linh hoạt trên nền tảng số. Sự dịch chuyển này mở ra cơ hội mới, nhưng cũng đặt ra thách thức về vấn đề tiêu hao sức lao động thể chất và gián tiếp tạo ra một gánh nặng an sinh xã hội khổng lồ trong những thập kỷ tới, khi hàng triệu người lao động bước vào tuổi già mà không có lương hưu.`,
    bg: "/pictures/intro_2.jpg",
    prev: "intro_title",
    next: "act1_cover",
  },

  act1_cover: {
    id: "act1_cover",
    type: "cover",
    chapter: "Hồi 1",
    title: `Cạm bẫy tự do: 
    Lời nói dối mang tên “làm chủ thời gian”`,
    bg: "https://res.cloudinary.com/dizimfqyz/video/upload/v1777833026/1_1_knqnha.mp4",
    prev: "intro_sapo",
    next: "act1_sapo",
  },

  act1_sapo: {
    id: "act1_sapo",
    type: "text",
    text: `Đêm muộn tại một tuyến phố đông đúc, Hoàng Văn Thắng (23 tuổi) tranh thủ ăn vội suất cơm hộp trước khi tiếp tục nhận đơn hàng mới từ ứng dụng. Bắt đầu làm giao hàng công nghệ từ những năm đầu đại học, Thắng lựa chọn công việc này với kỳ vọng “làm chủ thời gian” và tạo thu nhập nhanh theo từng đơn hàng. Trên màn hình điện thoại, thu nhập liên tục được cập nhật, với tổng mức có thể đạt khoảng 10–12 triệu đồng mỗi tháng. 

  Tuy nhiên, sự linh hoạt về thời gian không đồng nghĩa với việc giảm áp lực lao động. Để duy trì mức thu nhập này, nhiều tài xế phải làm việc với cường độ cao, trung bình khoảng 75,6 giờ mỗi tuần - một con số vượt xa chuẩn lao động thông thường là 48 giờ mỗi tuần. Đi kèm với đó là việc thiếu các chế độ an sinh cơ bản như bảo hiểm xã hội, trợ cấp ốm đau hay bảo hiểm tai nạn, khiến người lao động phải tự chi trả cho các rủi ro phát sinh.`,
    bg: "/pictures/1_2.jpg",
    prev: "act1_cover",
    next: "act1_income_flip",
  },

  act1_income_flip: {
    id: "act1_income_flip",
    type: "stats",
    title: "Đằng sau con số 15-20 triệu/tháng là gì?",
    subtitle: "Nhấn để xem chi tiết",
    stats: [
      { label: "Thu nhập", value: "15-20 triệu/tháng" },
      { label: "Quỹ hưu trí", value: "0đ" },
      { label: "Trợ cấp ốm đau", value: "0đ" },
      { label: "Bảo hiểm tai nạn", value: "Tự túc" },
    ],
    bg: "https://img.pikbest.com/wp/202346/appeal-techstyle-income-graph-in-3d-a-high-tech-grid-background-enhances-the-visual_9729591.jpg!w700wp",
    prev: "act1_sapo",
    next: "act1_stat",
  },

  act1_stat: {
    id: "act1_stat",
    type: "text",
    text: `Theo số liệu thống kê năm 2025, thu nhập bình quân của lao động khu vực thành thị đạt khoảng 10,1 triệu đồng mỗi tháng. So với mặt bằng chung, thu nhập từ công việc giao hàng không có nhiều chênh lệch, trong khi yêu cầu về thời gian và điều kiện làm việc lại khắt khe hơn.
     
  Thực tế này cho thấy khoảng cách giữa kỳ vọng "làm chủ thời gian" và điều kiện làm việc thực tế, đồng thời phản ánh xu hướng một bộ phận lao động trẻ, trong đó có sinh viên các ngành kỹ thuật và công nghệ, lựa chọn làm việc ngoài chuyên môn.`,
    bg: "/pictures/1_4.jpg",
    prev: "act1_income_flip",
    next: "act1_chat",
  },

  act1_chat: {
    id: "act1_chat",
    type: "chat",
    subtitle: "Nhấp chuột vào các câu hỏi dưới đây để lắng nghe chia sẻ từ Thắng.",
    character: "Thắng, 23 tuổi",
    role: "Cựu sinh viên ngành xây dựng",
    questions: [
      {
        id: 1,
        text: "Bạn chạy xe có mệt không?",
        answer: "Mệt rã rời chứ. Ngồi trên yên xe liên tục 12-14 tiếng mỗi ngày, bất kể nắng cháy da hay mưa xối xả ở cái đất này xem. Nhiều hôm về đến phòng trọ, mình chỉ kịp cởi bộ đồng phục là đổ gục xuống giường, chẳng buồn ăn uống gì luôn. Mình đang chạy đều đều để có tiền trang trải cuộc sống nên lưng dạo này cũng đau nhức, phổi thì lúc nào cũng thấy nặng nề vì hít đủ loại khói bụi"
      },
      {
        id: 2,
        text: "Hãy chia sẻ về các mà các app quản lý các bạn trong quá trình làm việc ?",
        answer: "Thường thì khi mà khác hủy chuyến của chúng mình thì không sao nhưng gặp phải các tình huống khó xử như tai nạn, mưa, ngập hay như mình làm giao đồ ăn mà không thể nào tìm được quán hay thời gian chạy mà tắc quá chúng mình hủy cũng sẽ ảnh hướng khá nhiều lên công việc vì thường nếu không hoàn thành thì cũng mình sẽ dễ bị tụt hạng và giảm hiệu suất cá nhân và có khi là bị khóa app 30 đến 40p hoặc thậm chí là khóa luôn tài khoản nếu như bị hủy nhiều lần trong một ngày. Nhiều khi mình cũng muốn nghỉ ngơi một chút nhưng mà không dám vì sợ ảnh hưởng đến thu nhập và hiệu suất cá nhân của mình"
      },
      {
        id: 3,
        text: "Tại sao bạn lại chọn làm nghề này thay vì ngành học của mình?",
        answer: "Chạy xe thì vất vả thật nhưng có tiền tươi ngay, tháng cố gắng chạy cũng được 10-12 triệu để trang trải cuộc sống. Chứ bây giờ ra công trình làm cả tháng lương khỏi điểm được có 8 triệu mà còn không được thải mái thời gian. Hơn nữa mình cũng cẩm thấy bản thân không đủ đam mê để theo công việc trở thành một kỹ sư xây dựng"
      },
      {
        id: 4,
        text: "Thu nhập của bạn có đủ dùng không?",
        answer: "Nhìn qua thì có vẻ ổn nhưng sẽ chỉ khi mình sống 1 mình, mỗi tháng mình kiếm được khoảng 7-12 triệu đồng (tùy tháng). Sau khi trừ tiền xăng, bảo dưỡng xe và tiền ăn uống dọc đường, số tiền thực mang về chẳng còn bao nhiêu để tích lũy, để được lương khoảng 12 triệu trở lên thì mình chạy cũng khá vất vả rồi. Mình cũng không dám nghĩ đến chuyện tiết kiệm hay đóng bảo hiểm xã hội gì cả, vì thu nhập này chỉ đủ để trang trải cuộc sống hàng ngày thôi."
      }
    ],
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnP80o1v_fjZgUhp-bLIbtJ9JHUkEwco_JfQ&s",
    prev: "act1_stat",
    next: "act2_cover"
  },

  act2_cover: {
    id: "act2_cover",
    type: "cover",
    chapter: "Hồi 2",
    title: "Tuổi xế chiều chới với: Những cuốc xe ngoài vùng an sinh",
    bg: "/pictures/2_1.jpg",
    prev: "act1_chat",
    next: "act2_interview",
  },

  act2_interview: {
    id: "act2_interview",
    type: "text",
    text: `Ở một góc khác của thành phố, ông Khương 54 tuổi vẫn duy trì công việc chạy xe công nghệ mỗi ngày. Ông từng là công nhân cơ khí trong gần 20 năm trước khi nhà máy đóng cửa và buộc phải chuyển sang công việc hiện tại. “Làm lâu thành quen, giờ cũng khó tìm công việc khác”, ông nói.

  Không hợp đồng lao động, không bảo hiểm, cũng không có tích lũy hưu trí, trường hợp của ông Lâm phản ánh thực tế của một bộ phận lao động chuyển dịch sang khu vực nền tảng sau khi rời thị trường lao động chính thức.`,
    bg: "/pictures/2_2.jpg",
    prev: "act2_cover",
    next: "act2_interview_2",
  },

  act2_interview_2: {
    id: "act2_interview_2",
    type: "video",
    src: "https://res.cloudinary.com/dizimfqyz/video/upload/v1777833396/2_3_jyeq6m.mp4",
    bg: "https://marketplace.canva.com/AOkVY/MAHCzrAOkVY/1/tl/canva-abstract-white-light-streaks-background-MAHCzrAOkVY.jpg",
    prev: "act2_interview",
    next: "act2_stat",
  },

  act2_stat: {
    id: "act2_stat",
    type: "text",
    text: `Trong mô hình lao động nền tảng, nhiều người không được định danh là “người lao động” nên không thuộc phạm vi bảo vệ của các chính sách an sinh như bảo hiểm xã hội, bảo hiểm y tế hay chế độ hưu trí. Dù Luật Bảo hiểm xã hội 2024 đã mở rộng một số cơ chế tham gia tự nguyện nhưng việc tiếp cận vẫn còn hạn chế với nhóm có thu nhập không ổn định.

  Theo thống kê của Tổng Liên đoàn Lao động Việt Nam, trong khoảng 200.000 tài xế công nghệ trên cả nước, chỉ khoảng 7% tham gia bảo hiểm xã hội và chủ yếu dưới hình thức tự nguyện. Điều này cho thấy phần lớn lao động trong lĩnh vực này chưa có nền tảng an sinh dài hạn. Bên cạnh đó, nhiều chi phí và rủi ro liên quan đến tai nạn, sức khỏe hay vận hành đều được chuyển sang phía người lao động. Khi không có các cơ chế bảo vệ chính thức hoặc tích lũy hưu trí, họ phải tự tìm cách để đảm bảo cho tương lai của mình.

  Trong bối cảnh dân số vàng đang dần khép lại, thực trạng này đặt ra rủi ro dài hạn. Khi lực lượng lao động hiện nay bước vào tuổi nghỉ hưu, việc thiếu tích lũy tài chính và bảo hiểm có thể làm gia tăng áp lực lên hệ thống an sinh, đặc biệt trong lĩnh vực y tế và trợ cấp xã hội.`,
    bg: "/pictures/2_3.jpg",
    prev: "act2_interview_2",
    next: "act2_interview_3",
  },

  act2_interview_3: {
    id: "act2_interview_3",
    type: "video",
    src: "https://res.cloudinary.com/dizimfqyz/video/upload/v1777834258/2_5_h6vjlm.mp4",
    bg: "https://marketplace.canva.com/AOkVY/MAHCzrAOkVY/1/tl/canva-abstract-white-light-streaks-background-MAHCzrAOkVY.jpg",
    prev: "act2_stat",
    next: "act2_timeline",
  },

  act2_timeline: {
    id: "act2_timeline",
    type: "timeline",
    title: "Đặc điểm từng nhóm tuổi",
    subtitle: "Nhấn vào từng nhóm tuổi để đọc chi tiết, nhấn đủ cả 3 ô để xem kết luận cuối cùng.",
    timeline: [
      {
        age: "20-30",
        heading: "Thanh xuân rực rỡ",
        text: "Kinh tế nền tảng trở thành “nam châm” hút lao động trẻ nhờ thu nhập nhanh, trả theo từng đơn hàng. Dòng tiền tức thì khiến nhiều người ưu tiên lợi ích trước mắt, trì hoãn đầu tư cho kỹ năng, kinh nghiệm và bảo hiểm xã hội. Những lựa chọn hợp lý trong ngắn hạn bắt đầu đặt nền cho rủi ro dài hạn.",
      },
      {
        age: "45-50",
        heading: "Bẫy nghề nghiệp",
        text: "Khi bước vào trung niên, hệ quả dần lộ rõ. Tính chất công việc lặp lại, ít tích lũy giá trị khiến kỹ năng không được nâng cao, thậm chí suy giảm so với yêu cầu thị trường. Người lao động vì thế khó chuyển đổi nghề, bị động trong các công việc năng suất thấp, thu nhập bấp bênh.",
      },
      {
        age: "60+",
        heading: "Lưới an sinh thủng",
        text: "Ở tuổi xế chiều, những thiếu hụt tích tụ trở thành cú sốc an sinh. Việc không tham gia đầy đủ bảo hiểm xã hội khiến nhiều người không có lương hưu ổn định, trong khi khả năng lao động suy giảm. Gánh nặng vì thế chuyển sang gia đình và hệ thống an sinh.",
      },
    ],
    bg: "https://image.luatvietnam.vn/uploaded/twebp/images/original/2023/04/28/an-sinh-xa-hoi-la-gi_2804082701.jpg",
    prev: "act2_interview_3",
    next: "act2_bhxh",
  },

  act2_bhxh: {
    id: "act2_bhxh",
    type: "text",
    text: `Ông Nguyễn Ngọc Quý - Trưởng phòng kinh doanh 2 thuộc Tổng công ty bảo hiểm BIDV - Công ty bảo hiểm BIDV Hồng Hà:

  "Dưới góc nhìn của một người làm nghề bảo hiểm, tôi nhận ra khi các bạn trẻ đang dốc hết sức mình để làm việc, ngày đêm bám đường nhưng lại gần như bỏ quên thứ để bảo vệ chính mình. Trong khi đó, rủi ro thì chẳng chừa một ai; chỉ cần một biến cố bất ngờ xảy ra là bao nhiêu nỗ lực, tích góp bấy lâu đều có thể tan thành mây khói trong phút chốc. Với những người lao động lớn tuổi, sau nhiều năm bám trụ trên mặt đường, cơ thể bắt đầu lên tiếng với những chứng bệnh nghề nghiệp về xương khớp hay hô hấp. Đến lúc này mới cuống cuồng đi tìm sự bảo vệ từ bảo hiểm thì thường đã quá muộn. Phí bảo hiểm lúc đó không chỉ đắt đỏ mà nhiều khi các đơn vị cũng không thể nhận bảo vệ được nữa vì tình trạng sức khỏe đã suy giảm quá nhiều. Nếu không có sự chuẩn bị và tích lũy an sinh từ sớm, gánh nặng về  già không chỉ đè nặng lên vai mỗi cá nhân mà còn kéo theo cả gia đình và xã hội phải cùng lo liệu."`,
    bg: "/pictures/2_5.jpg",
    prev: "act2_timeline",
    next: "act2_driver_sim",
  },

  act2_driver_sim: {
    id: "act2_driver_sim",
    type: "driverSim",
    title: "Trình mô phỏng thu nhập và rủi ro an sinh",
    text: "Thử kéo số giờ làm mỗi ngày để thấy thu nhập ngắn hạn đi kèm những rủi ro an sinh dài hạn.",
    bg: "https://1office.vn/wp-content/uploads/2021/10/rui-ro-tai-chinh-la-gi.jpg",
    prev: "act2_bhxh",
    next: "act3_cover",
  },

  act3_cover: {
    id: "act3_cover",
    type: "cover",
    chapter: "Hồi 3",
    title: 'Khi thuật toán "vắt kiệt" tài xế',
    text: `Các ứng dụng gọi xe và giao hàng được vận hành trên dữ liệu và các quy luật về tâm lý con người. Hệ thống này không nhằm bảo vệ người lao động mà được lập trình để tối ưu hóa lợi nhuận và giảm thời gian di chuyển xuống mức thấp nhất. Ở môi trường này, tính linh hoạt trong công việc lại đi kèm với mức độ kiểm soát từ hệ thống thuật toán.

  Một cơ chế phổ biến là thiết kế công việc theo dạng “mục tiêu - phần thưởng”. Ứng dụng liên tục đưa ra các mốc thưởng theo số đơn hoặc thời gian hoạt động như một trò chơi có nhiều phần quà hấp dẫn để khuyến khích người lao động làm thêm để đạt ngưỡng. Đây là một cách tác động vào tâm lý. Khi thấy sắp đạt được mục tiêu, não người lao động nảy sinh cảm giác hưng phấn và mong đợi. Vì sợ mất tiền thưởng khi đã ở rất gần, họ có thể bỏ qua những nhu cầu cá nhân để hoàn thành. Họ không làm chủ thời gian của mình mà phải chạy theo các mục tiêu do ứng dụng đặt ra. `,
    bg: "/pictures/3_1.jpg",
    prev: "act2_driver_sim",
    next: "act3_algorithm_trap",
  },

  act3_algorithm_trap: {
    id: "act3_algorithm_trap",
    subtitle: `Cuốc xe cuối cùng liệu có suôn sẻ? 
    Xem trọn vẹn video hành trình để mở khóa kết quả.`,
    type: "algorithmTrap",
    bg: "https://i.pinimg.com/736x/47/0d/8b/470d8b593cb2c3cbb900d46d120a78ca.jpg",
    prev: "act3_cover",
    next: "act3_pressure",
  },

  act3_pressure: {
    id: "act3_pressure",
    type: "text",
    text: `Thông tin về đơn hàng thường chỉ được cung cấp đầy đủ sau khi tài xế chấp nhận. Việc thiếu thông tin này khiến họ khó từ chối và buộc phải làm việc trong điều kiện kẹt xe hoặc thời tiết xấu để giữ vững các chỉ số hiệu suất hoạt động cần thiết. Hệ thống điều phối hàng ngàn người để tối ưu hóa lợi nhuận, nhưng lại gây tốn kém xăng dầu và thời gian chờ đợi cho từng cá nhân.

  Trong mô hình này, phần lớn chi phí vận hành được chuyển sang người lao động. Tài xế tự trang bị phương tiện, chi trả nhiên liệu và bảo trì, đồng thời đối mặt trực tiếp với rủi ro tai nạn và sức khỏe. Để đảm bảo thu nhập, nhiều người phải làm việc với cường độ cao, khoảng 75,6 giờ mỗi tuần, tức là nhiều hơn một nửa so với mức làm việc của các nghề nghiệp khác.

  Mỗi giờ chạy xe ngoài nắng hay ăn vội trên đường phố đầy bụi khiến sức khỏe suy yếu rất nhanh. Những số tiền thu được mỗi ngày thực chất là việc tiêu dùng trước sức khỏe và tuổi thọ sau này. Theo các báo cáo y tế, tài xế thường mắc các bệnh lâu dài về đường hô hấp vì khói bụi, đau xương khớp do tư thế ngồi lâu, cùng các vấn đề về tiêu hóa, tiết niệu và tim mạch. Khi người lao động đổ bệnh, các công ty ứng dụng không chịu trách nhiệm chi trả vì không có hợp đồng lao động chính thức. Khi đó, người lao động phải tự bỏ tiền chữa bệnh và xã hội phải gánh chịu chi phí chăm sóc rất lớn trong tương lai.`,
    bg: "/pictures/3_3.jpg",
    prev: "act3_algorithm_trap",
    next: "act3_stat",
  },

  act3_stat: {
    id: "act3_stat",
    type: "picture",
    src: "/pictures/3_4.jpg",
    bg: "https://www.shutterstock.com/image-vector/futuristic-connected-molecular-hexagons-healthcare-600nw-2669371459.jpg",
    prev: "act3_pressure",
    next: "act4_law_slider",
  },

  act4_law_slider: {
    id: "act4_law_slider",
    type: "cover",
    chapter: "Hồi 4",
    title: "Vá lỗ hổng pháp lý",
    bg: "/pictures/4_1.jpg",
    prev: "act3_stat",
    next: "act4_sapo",
  },

  act4_sapo: {
    id: "act4_sapo",
    type: "text",
    text: `Trong nhiều năm, các nền tảng công nghệ định danh tài xế và người giao hàng là “đối tác độc lập” thay vì ký hợp đồng lao động chính thức, để không phải thực hiện các quy định về bảo hiểm.Việc này khiến người lao động thiếu sự bảo vệ pháp lý, phải tự chi trả hoàn toàn các chi phí khi ốm đau, gặp tai nạn và không có lương hưu khi về già.

  Tuy nhiên, từ ngày 1/7/2025, Luật Bảo hiểm xã hội đặt ra một khung pháp lý mới. Theo đó, những người làm việc có thu nhập và chịu sự điều hành kể cả thông qua ứng dụng thuộc diện phải tham gia bảo hiểm xã hội bắt buộc.

  Trách nhiệm tài chính hiện nay được phân chia cụ thể để đảm bảo quyền lợi cho người lao động. Tổng mức đóng bảo hiểm xã hội là 32% quỹ tiền lương, trong đó các công ty ứng dụng có trách nhiệm đóng 21,5% cho các quỹ hưu trí, bảo hiểm y tế, thai sản và tai nạn lao động. Người lao động đóng góp 10,5% còn lại. 

  Việc mở rộng diện tham gia được kỳ vọng giúp lao động nền tảng từng bước tiếp cận các quyền lợi an sinh cơ bản, thay vì chỉ phụ thuộc vào nguồn thu nhập ngắn hạn như trước.`,
    bg: "/pictures/4_2.jpg",
    prev: "act4_law_slider",
    next: "act4_donut",
  },

  act4_donut: {
    id: "act4_donut",
    type: "donut",
    title: "Tỷ lệ đóng bảo hiểm bắt buộc",
    bg: "https://i2.wp.com/oicvn.com/wp-content/uploads/2017/12/PC-INSURANCE-WEB-BANNER-BACKGROUND-3-crpped-1400x482.jpg?fit=1200%2C413&ssl=1",
    prev: "act4_sapo",
    next: "act4_global",
  },

  act4_global: {
    id: "act4_global",
    type: "choices",
    title: "Bài học từ thế giới",
    text: "Bạn muốn xem kinh nghiệm từ quốc gia nào trước? (EU, Singapore, Trung Quốc)",
    choices: [
      { label: "Singapore", target: "act4_singapore" },
      { label: "Trung Quốc", target: "act4_china" },
      { label: "EU", target: "act4_eu" },
    ],
    bg: "https://ben.com.vn/tin-tuc/wp-content/uploads/2021/10/hinh-nen-3d-vu-tru-huyen-ao_optimized.jpg",

    prev: "act4_donut",
  },

  act4_singapore: {
    id: "act4_singapore",
    type: "cover",
    title: "Singapore",
    text: `Singapore ban hành Đạo luật Lao động nền tảng vào tháng 9/2024 nhằm tăng cường bảo vệ nhóm lao động trong lĩnh vực gọi xe và giao hàng. Theo quy định, các nền tảng phải đóng góp vào Quỹ Dự phòng Trung ương (CPF) cho tài xế, trước mắt áp dụng với nhóm dưới 30 tuổi, với tỷ lệ tương đương lao động chính thức. 

  CPF là cơ chế tiết kiệm bắt buộc do nhà nước quản lý, trong đó cả người lao động và doanh nghiệp cùng đóng góp để phục vụ các nhu cầu dài hạn như hưu trí, y tế và nhà ở. Đáng chú ý, khoản tích lũy này được bảo vệ pháp lý chặt chẽ, không bị xử lý ngay cả trong trường hợp người lao động gặp rủi ro tài chính, qua đó đảm bảo một “điểm tựa tối thiểu” khi về già.

  Để giảm tác động đến thu nhập trước mắt, Chính phủ Singapore triển khai chương trình hỗ trợ chuyển đổi. Với những người có thu nhập ròng từ 3.000 SGD/tháng trở xuống, Nhà nước hỗ trợ một phần tương ứng với khoản đóng góp vào CPF trong giai đoạn đầu.`,
    bg: "https://resource.kinhtedothi.vn/2024/04/11/fdfdre.jpg",
    prev: "act4_global",
    next: "act5_future",
  },

  act4_china: {
    id: "act4_china",
    type: "cover",
    title: "Trung Quốc",
    text: `Trước sự phát triển nhanh của kinh tế nền tảng, Trung Quốc lựa chọn cách tiếp cận siết chặt quản lý nhằm hạn chế rủi ro đối với người lao động. Trọng tâm là ngăn chặn việc các nền tảng tối ưu hóa lợi nhuận bằng cách gia tăng cường độ làm việc và chuyển rủi ro sang phía tài xế.

  Theo đó, các doanh nghiệp công nghệ bị yêu cầu điều chỉnh thuật toán, bảo đảm thời gian nghỉ ngơi hợp lý thay vì thúc ép hoạt động liên tục. Đồng thời, họ phải tham gia bảo hiểm tai nạn nghề nghiệp cho tài xế; trong trường hợp xảy ra sự cố, doanh nghiệp có trách nhiệm chi trả chi phí y tế và bồi thường liên quan.

  Một điểm đáng chú ý là yêu cầu về minh bạch. Các nền tảng phải công khai nguyên tắc vận hành của thuật toán, tham vấn ý kiến đại diện người lao động và chịu sự giám sát của cơ quan quản lý.

  Bên cạnh đó, điều kiện làm việc cũng được đặt lại tiêu chuẩn, từ thời gian nghỉ, an toàn lao động đến cơ chế tiếp nhận và giải quyết khiếu nại. Việc tăng cường giám sát mô hình vận hành cốt lõi được xem là công cụ nhằm hạn chế tình trạng tối ưu hóa lợi nhuận bằng cách ngoại hóa rủi ro sang người lao động.`,
    bg: "https://i.ex-cdn.com/nhadautu.vn/files/content/2020/12/27/5419_kinh-te-trung-quoc-4_acsq-0209.jpg",
    prev: "act4_global",
    next: "act5_future",
  },

  act4_eu: {
    id: "act4_eu",
    type: "cover",
    title: "EU",
    text: `Tại Liên minh Châu Âu (EU), sau hơn mười năm các ứng dụng công nghệ phát triển mạnh mẽ và thay đổi thị trường, quy định pháp luật đã có bước ngoặt quan trọng đối với nghề tài xế và giao hàng. 

  Hiện nay, những người làm việc thông qua ứng dụng tại khu vực này chính thức được công nhận là người lao động thay vì là đối tác tự do. Việc này giúp họ được hưởng đầy đủ các quyền lợi cơ bản như mức lương tối thiểu, chế độ nghỉ phép và bảo hiểm y tế giống như nhân viên tại các công ty truyền thống.

  Điểm thay đổi lớn nhất nằm ở việc chuyển giao nghĩa vụ chứng minh cho doanh nghiệp. Nếu các hãng công nghệ muốn gọi tài xế là đối tác, họ có trách nhiệm phải tự đưa ra các bằng chứng cụ thể để khẳng định rằng hãng hoàn toàn không trực tiếp giám sát, không áp đặt mức lương hay can thiệp vào hành vi làm việc của người lao động. 

  Đây là sự điều chỉnh mang tính lịch sử nhằm ngăn chặn việc các công ty sử dụng danh xưng đối tác để né tránh trách nhiệm an sinh. Điều này khẳng định một quy luật tất yếu: khi một công nghệ mới xuất hiện và thay đổi hoàn toàn cách thức tổ chức lao động ở quy mô lớn, luật pháp bắt buộc phải thay đổi để bảo vệ con người và thích ứng với thực tế xã hội.`,
    bg: "https://media.istockphoto.com/id/491391396/vi/anh/venezia.jpg?s=612x612&w=0&k=20&c=zKobMgS-AjIP95Htdb9LGK7-9Qq6w5TstM6iOLDnDK8=",
    prev: "act4_global",
    next: "act5_future",
  },

  act5_future: {
    id: "act5_future",
    type: "cover",
    chapter: "Hồi 5",
    title: "Tương lai nào khi hàng triệu người già không có lương hưu?",
    bg: "https://res.cloudinary.com/dizimfqyz/video/upload/v1777834380/5_1_lqyypv.mp4",
    prev: "act4_global",
    next: "act5_solution",
  },

  act5_solution: {
    id: "act5_solution",
    type: "text",
    text: `Tính đến đầu năm 2026, tỷ lệ thanh niên từ 15 đến 24 tuổi không có việc làm đã tăng lên mức 8,86%. Đáng chú ý, cả nước hiện có gần 1,6 triệu người trẻ thuộc nhóm không đi học, không đi làm và không tham gia đào tạo nghề. Nhóm này chiếm 11,4% tổng số thanh niên tại Việt Nam. Nếu lực lượng lao động trẻ tuổi này tiếp tục chỉ làm các công việc tự do thay vì học tập và phát triển chuyên môn lâu dài, Việt Nam sẽ lãng phí nguồn lực lớn nhất của thời kỳ có nhiều người trong độ tuổi lao động.

  Các số liệu thực tế cho thấy, nếu một người nhận được 8,6 triệu đồng mỗi tháng từ việc chạy xe ở hiện tại, họ đang đánh đổi một khoản quyền lợi rất lớn về sau. Cụ thể, người lao động này sẽ bị thâm hụt hàng chục triệu đồng tiền bảo hiểm xã hội và bảo hiểm y tế trong dài hạn. Khi hàng trăm ngàn tài xế công nghệ bước vào tuổi nghỉ hưu với sức khỏe suy giảm do làm việc quá sức mà không có tiền tích lũy, họ sẽ không có nguồn thu nhập để tự nuôi bản thân.

  Khi đó, nhà nước sẽ phải chi trả toàn bộ kinh phí chăm sóc y tế và trợ cấp cho những người già này. Điều này gây ra áp lực rất lớn cho ngân sách quốc gia. Nếu các quy định pháp luật không can thiệp kịp thời để buộc các công ty công nghệ cùng đóng bảo hiểm cho người lao động, xã hội sẽ phải đối mặt với tình trạng khó khăn lớn về an sinh trong vài thập kỷ tới. Những thay đổi về luật pháp ngay từ bây giờ là việc làm cần thiết để bảo đảm tương lai bền vững cho thế hệ trẻ`,
    bg: "/pictures/5_2.jpg",
    prev: "act5_future",
  },
};