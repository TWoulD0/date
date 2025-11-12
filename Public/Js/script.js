  const themeBtn = document.querySelector(".theme_btn");
  const indicatorBar = document.querySelector(".scroll-indicator-bar");
  const navBar = document.querySelector(".nav-bar");
  const navItemsA = document.querySelectorAll(".nav-items a");
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");
  const langIcon = document.querySelector(".lang_icon");
  const langMenu = document.querySelector(".lang_menu");
  const sections = document.querySelectorAll(".section");
  const productImage = document.querySelectorAll(".product_img");
  const productBox = document.querySelectorAll(".product_box");
  const productDots = document.querySelectorAll(".products_dots ul li");
  const cartIcon = document.querySelector("#cart_icon");
  const cart = document.querySelector(".cart");
  const closeCart = document.querySelector("#close_cart");
  const contactForm = document.querySelector(".contact-form");
  let ct_name = document.getElementById("name");
  let ct_email = document.getElementById("email");
  let ct_subject = document.getElementById("subject");
  let ct_message = document.getElementById("message");

  function updateActiveNavLinks() {
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const id = current.getAttribute("id");

      const navLink = document.querySelector(`.nav-items a[href="#${id}"]`);
  
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  }


  // Dark/Light
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark_theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved_theme", getCurrentTheme());
    localStorage.setItem("saved_icon", getCurrentIcon());
  })

  const getCurrentTheme = () => document.body.classList.contains("dark_theme") ? "dark" : "light";
  const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

  const savedTheme = localStorage.getItem("saved_theme");
  const savedIcon = localStorage.getItem("saved_icon");

  if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark_theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
  }


  window.addEventListener("scroll", () => {
    updateActiveNavLinks();
    indicatorBarFunct();
  });

  window.addEventListener("load", () => {
    navBar.style.transform = "translateY(0)";
    themeBtn.style.transform = "translateY(0)";
    updateActiveNavLinks();
  });

  function indicatorBarFunct() {
    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;

    indicatorBar.style.width = scrollValue + "%";
  }

  langIcon.addEventListener("click", () => {
    if (langMenu.style.display === "block") {
      langMenu.style.display = "none";
      langMenu.style.display = "none";
    } else {
      langMenu.style.display = "block";
    }
  });

  // Define translations for different languages
  const translations = {
    en: {
      //nav
      home : "home",
      products : "Products",
      about : "About",
      contact : "Contact",

      //cart
      cart_title : "Your Cart",
      total_title : "Total",
      btn_buy : "Pay Now",
      quote1 : "START YOUR DAY",
      quote2 : "WITH DATES",

      //sections
      products_section : "Products",
      about_section : "About Us",
      contact_section : "Contact Us",

      //products
      product_cart : "Add To Cart",
      product_name1 : "Product 1",
      product_desc1 : "Description 1",
      product_name2 : "Product 2",
      product_desc2 : "Description 2",
      product_name3 : "Product 3",
      product_desc3 : "Description 3",
      product_name4 : "Product 4",
      product_desc4 : "Description 4",

      //about
      about_title : "Title",
      about_desc : "Description",

      //contact
      phone : "Phone",
      email : "Email Address",
      address : "Official Address",
      submit : "Send Message",

      //footer
      rights : "© 2023 by TWoulD. All rights reserved.",
      
    },
    fr: {
      //nav
      home : "Accueil",
      products : "Produits",
      about: "À propos",
      contact : "Contact",

      //cart
      cart_title: "Votre panier",
      total_title: "Total",
      btn_buy: "Payer maintenant",
      quote1: "COMMENCEZ VOTRE JOURNÉE",
      quote2: "AVEC DES DATTES",

      //sections
      products_section: "Produits",
      about_section: "À propos de nous",
      contact_section: "Contactez-nous",

      //products
      product_cart: "Ajouter au panier",
      product_name1: "Produit 1",
      product_desc1: "Description 1",
      product_name2: "Produit 2",
      product_desc2: "Description 2",
      product_name3: "Produit 3",
      product_desc3: "Description 3",
      product_name4: "Produit 4",
      product_desc4: "Description 4",

      //about
      about_title: "Titre",
      about_desc: "Description",

      //contact
      phone: "Téléphone",
      email: "Adresse e-mail",
      address: "Adresse officielle",
      submit: "Envoyer le message",

      //footer
      rights: "© 2023 par TWoulD. Tous droits réservés."
      
    },
    ar: {
      //nav
      home : "الصفحة الرئيسية",
      products : "المنتجات",
      about: "معلومات",
      contact : "الاتصال",

      //cart
      cart_title: "سلة التسوق الخاصة بك",
      total_title: "الإجمالي",
      btn_buy: "ادفع الآن",
      quote1: "ابدأ يومك",
      quote2: "بتناول التمور",

      //sections
      products_section: "المنتجات",
      about_section: "معلومات عنا",
      contact_section: "اتصل بنا",

      //products
      product_cart: "إضافة إلى السلة",
      product_name1: "المنتج 1",
      product_desc1: "الوصف 1",
      product_name2: "المنتج 2",
      product_desc2: "الوصف 2",
      product_name3: "المنتج 3",
      product_desc3: "الوصف 3",
      product_name4: "المنتج 4",
      product_desc4: "الوصف 4",

      //about
      about_title: "العنوان",
      about_desc: "الوصف",

      //contact
      phone: "الهاتف",
      email: "عنوان البريد الإلكتروني",
      address: "العنوان الرسمي",
      submit: "إرسال الرسالة",

      //footer
      rights: "© 2023 بواسطة TWoulD. جميع الحقوق محفوظة."
    },
  };

  // Function to update content based on selected language
  function updateContent(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      element.textContent = translations[language][key];
    });
    // Update the selected language
    document.querySelector(".selected_lang span").textContent = language.toUpperCase();

    if (language === "en") {
      document.getElementById("name").placeholder = "Name";
      document.getElementById("email").placeholder = "Email";
      document.getElementById("subject").placeholder = "Subject";
      document.getElementById("message").placeholder = "Message";
    } else if (language === "fr") {
      document.getElementById("name").placeholder = "Nom";
      document.getElementById("email").placeholder = "E-mail";
      document.getElementById("subject").placeholder = "objet";
      document.getElementById("message").placeholder = "Message";
    } else if (language === "ar") {
      document.getElementById("name").placeholder = "الاسم";
      document.getElementById("email").placeholder = "البريد الإلكتروني";
      document.getElementById("subject").placeholder = "الموضوع";
      document.getElementById("message").placeholder = "الرسالة";
    }
  }
  

  // Add click event listeners for all language buttons
  document.querySelector(".en").addEventListener("click", () => {
    updateContent("en"); // Update content for English
    updateSelectedLanguage("en");
  });

  document.querySelector(".ar").addEventListener("click", () => {
    updateContent("ar"); // Update content for Arabic
    updateSelectedLanguage("ar");
  });

  document.querySelector(".fr").addEventListener("click", () => {
    updateContent("fr"); // Update content for French
    updateSelectedLanguage("fr");
  });

  // Add more listeners for other languages as needed

  // Function to update the selected language
  function updateSelectedLanguage(selectedLangClass) {
    const selectedLangElement = document.querySelector(".selected_lang");
    selectedLangElement.className = "selected_lang " + selectedLangClass;
  }


  // Initialize with a default language (e.g., English)
  updateContent("en");
  updateSelectedLanguage("en");



  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });

  navItemsA.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });

  //Open Cart
  cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
  });

  //Close Cart
  closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
  });

  //Contact Form
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = {
      ct_name: ct_name.value,
      ct_email: ct_email.value,
      ct_subject: ct_subject.value,
      ct_message: ct_message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST","/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function(){
      console.log(xhr.responseText);
      if(xhr.responseText == "success"){
        alert("Email sent");
        ct_name.value = "";
        ct_email.value = "";
        ct_subject.value = "";
        ct_message.value = "";
      }else{
        alert("Something went wrong!")
      }
    }

    xhr.send(JSON.stringify(formData));

  });
  
  class Carousel {
    constructor(img, box, dots) {
      this.carouselArray = [...img];
      this.boxArray = [...box];
      this.dotsArray = [...dots];
      this.currentIndex = 0;

      this.carouselArray.forEach((img, index) => {
        img.addEventListener("click", () => {
          this.currentIndex = index === this.carouselArray.length - 1 ? 0 : index + 1;
          this.updateProduct();
        });
      });
    }
  
    updateProduct() {
      const currentBox = this.boxArray[this.currentIndex];
      const currentDot = this.dotsArray[this.currentIndex];
  
      this.boxArray.forEach((box) => {
        box.classList.remove("active_box");
      });
      this.dotsArray.forEach((dot) => {
        dot.classList.remove("active_dot");
      });

      currentBox.classList.add("active_box");
      currentDot.classList.add("active_dot");
    }

    /*
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.carouselArray.length;
        this.updateProduct();
      }, 5000); 
    }
  
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    }
    */
  }
  
  const exampleCarousel = new Carousel(
    productImage,
    productBox,
    productDots
  );
  
  /*
  exampleCarousel.startAutoplay();

  activeBox.addEventListener("mouseenter", () => {
    exampleCarousel.stopAutoplay();
  });
  
  activeBox.addEventListener("mouseleave", () => {
    exampleCarousel.startAutoplay();
  });
  */
  
  productDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      exampleCarousel.currentIndex = index;
      exampleCarousel.updateProduct();
    });
  });

  // Making Add to cart
  // Cart Working Js
  if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
  } else {
    ready();
  }

  // Making Function
  function ready(){
    // Remove Item From Cart
    var removeCartButtons = document.getElementsByClassName("cart_remove");
    for (var i = 0; i < removeCartButtons.length; i++){
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
    }
    // Quantity Change
    var quantityInputs = document.getElementsByClassName("cart_quantity");
    for (var i = 0; i < quantityInputs.length; i++){
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }
    // Add to cart
    var addCart = document.getElementsByClassName("product_cart");
    for (var i = 0; i < addCart.length; i++){
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
    }

    loadCartItems();
  }

  // Remove Cart Item
  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
    saveCartItems();
    updatecartIcon();
  }

  // Quantity Change
  function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
      input.value = 1;
    }
    updatetotal();
    saveCartItems();
    updatecartIcon();
  }


  // Add Cart Function
  function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product_name")[0].innerText;
    var price = shopProducts.getElementsByClassName("product_price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product_img")[0].src;

    addProductToCart(title, price, productImg);
    updatetotal();
    saveCartItems();
    updatecartIcon();
  }

  function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart_box");
    var cartItems = document.getElementsByClassName("cart_content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart_product_title");
    for (var i = 0; i < cartItemsNames.length; i++){
      if (cartItemsNames[i].innerText == title){
        alert("You have already added this item to cart");
        return;
      }
    }
    var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart_img">
    <div class="detail_box">
      <div class="cart_product_title">${title}</div>
      <div class="cart_price">${price}</div>
      <input 
        type="number"
        name=""
        id=""
        value="1"
        class="cart_quantity"
      />
    </div>
    <!-- Remove Item -->
    <i class="uil uil-trash cart_remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
    .getElementsByClassName("cart_remove")[0]
    .addEventListener("click", removeCartItem);
    cartShopBox
    .getElementsByClassName("cart_quantity")[0]
    .addEventListener("change", quantityChanged);

    saveCartItems();
    updatecartIcon();
  }


  //Update Total
  function updatetotal(){
    var cartContent = document.getElementsByClassName("cart_content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart_box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName("cart_price")[0];
      var quantityElement = cartBox.getElementsByClassName("cart_quantity")[0];
      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantity = quantityElement.value;
      total += price * quantity;
    }
    // If price contain some cents
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total_price")[0].innerText = "$" + total;
    // Save Total To LocalStorage
    localStorage.setItem("cartTotal", total);
  }

  // Keep Item in cart when page refresh with localstorage
  function saveCartItems(){
    var cartContent = document.getElementsByClassName("cart_content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart_box");
    var cartItems = [];

    for (var i = 0; i < cartBoxes.length; i++){
      cartBox = cartBoxes[i];
      var titleElement = cartBox.getElementsByClassName("cart_product_title")[0];
      var priceElement = cartBox.getElementsByClassName("cart_price")[0];
      var quantityElement = cartBox.getElementsByClassName("cart_quantity")[0];
      var productImg = cartBox.getElementsByClassName("cart_img")[0].src;

      var item = {
        title: titleElement.innerText,
        price: priceElement.innerText,
        quantity: quantityElement.value,
        productImg : productImg,
      };
      cartItems.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  // Loads In Cart
  function loadCartItems(){
    var cartItems = localStorage.getItem("cartItems");
    if (cartItems){
      cartItems = JSON.parse(cartItems);

      for (var i = 0; i < cartItems.length; i++){
        var item = cartItems[i];
        addProductToCart(item.title, item.price, item.productImg);

        var cartBoxes = document.getElementsByClassName("cart_box");
        var cartBox = cartBoxes[cartBoxes.length - 1];
        var quantityElement = cartBox.getElementsByClassName("cart_quantity")[0];
        quantityElement.value = item.quantity;
      }
    }
    var cartTotal = localStorage.getItem("cartTotal");
    if (cartTotal){
      document.getElementsByClassName("total_price")[0].innerText = "$" + cartTotal;
    }
    updatecartIcon();
  }

  // Quantity In Cart Icon
  function updatecartIcon(){
    var cartBoxes = document.getElementsByClassName("cart_box");
    var quantity = 0;

    for (var i = 0; i < cartBoxes.length; i++){
      var cartBox = cartBoxes[i];
      var quantityElement = cartBox.getElementsByClassName("cart_quantity")[0];
      quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector(".quantity");
    cartIcon.textContent = quantity;
  }

  // Clear Cart Item After Payment
  function clearCart(){
    var cartContent = document.getElementsByClassName("cart_content")[0];
    cartContent.innerHTML = "";
    updatetotal();
    localStorage.removeItem("cartItems");
  }


  ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 50
  });
  
  ScrollReveal().reveal('.home h1', {distance: '200px', origin: 'left'});
  ScrollReveal().reveal('.section-title', {delay: 100, origin: 'top'});
  ScrollReveal().reveal('.contact-form input, .contact-form textarea, .contact-form .btn', {distance: '150px', delay: 50, origin: 'bottom', interval: 300});
  ScrollReveal().reveal('.contact-list li', {delay: 100, origin: 'left', interval: 200});
  ScrollReveal().reveal('.logo h2', {distance: '100px',delay: 200, origin: 'left'});
  ScrollReveal().reveal('.footer-copyright p', {distance: '20px', delay: 100, origin: 'bottom'});
  ScrollReveal().reveal('.follow li', {delay: 300, origin: 'top', interval: 300});
  ScrollReveal().reveal('.about-img img', {distance: '200px', delay: 200, origin: 'left'});
  ScrollReveal().reveal('.about-info h3', {delay: 160, origin: 'right'});
  ScrollReveal().reveal('.about-info p', {delay: 250, origin: 'bottom'});
  ScrollReveal().reveal('.product_name', {delay: 100, origin: 'left'});
  ScrollReveal().reveal('.product_desc', {delay: 250, origin: 'bottom'});
  ScrollReveal().reveal('.product_price', {delay: 150, origin: 'top'});
  ScrollReveal().reveal('.product_cart', {delay: 200, origin: 'left'});
  ScrollReveal().reveal('.product_img, .product_img_shadow', {distance: '200px', delay: 200, origin: 'left'});


