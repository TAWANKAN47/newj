
//Element Selector: ".home-slider" 
//ระบุ HTML element ที่จะถูกแปลงเป็น Swiper instance โดยสมมติว่ามี HTML element ที่มี class "home-slider" ซึ่งจะถูกแปลงเป็น slider.

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,//Space Between Slides: spaceBetween: 30 กำหนดระยะห่าง (ในหน่วยพิกเซล) ระหว่างแต่ละ slide ใน slider.
  centeredSlides: true,//Centered Slides: centeredSlides: true จะทำให้ slide ที่ active อยู่ตรงกลาง.
  
  autoplay: {//autoplay: true เปิดใช้งาน autoplay สำหรับ slider.
    delay: 3500,//delay: 3500 กำหนดความล่าช้า (ในหน่วยมิลลิวินาที) ระหว่างการเปลี่ยน slide.
    disableOnInteraction: false,//disableOnInteraction: false ช่วยให้ autoplay ยังคงทำงานเมื่อผู้ใช้มีการกระทำกับ slider.
  },


  pagination: {
    el: ".swiper-pagination",//el: ".swiper-pagination" ระบุ HTML element ที่จะใช้เป็น container ของ pagination.
    clickable: true,//clickable: true อนุญาตให้ผู้ใช้คลิกที่ pagination bullets เพื่อไปยัง slide ที่เกี่ยวข้อง.
  },
  loop: true,//loop: true เปิดใช้งานการวนลูป ซึ่งหมายถึง slider จะกลับไปที่ slide แรกหลังจากมาถึง slide สุดท้ายและ ng นไปเรื่อย ๆ.
  // Additional options for smoother transitions
  speed: 800, //ปรับความเร็วของการเปลี่ยน slide (ในหน่วยมิลลิวินาที).
  effect: "slide", //effect: "slide" ระบุเอฟเฟกต์การเปลี่ยน slide อื่น ๆ ที่ลองใช้ เช่น "fade", "cube", "coverflow" เป็นต้น.
  preloadImages: true, //preloadImages: true โหลดรูปภาพล่วงหน้าเพื่อทำให้การเปลี่ยน slide เป็นไปได้ด้วยความราบรื่น.
  updateOnWindowResize: true, //updateOnWindowResize: true อัปเดต Swiper เมื่อหน้าต่างปรับขนาดเพื่อให้ได้ความตอบสนองที่ดีขึ้น. 
  easing: "ease",//easing: "ease" ระบุฟังก์ชัน easing สำหรับการเปลี่ยน slide. 
});
