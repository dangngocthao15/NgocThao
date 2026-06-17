const productColors = {
    "1": "#ffedd5", // Ao Bà Om
    "2": "#dbeafe", // Tháp Vĩnh Hưng
    "3": "#fce7f3", // Phố Cổ Huế
    "4": "#dcfce7", // Đền Hùng Vương
    "5": "hsl(160, 97%, 88%)",  // Đền thờ Bác
    "6":"hsl(160,87%,68%) "
};
const Products = [
    {
        id:"1",
        nameProducts:"AO BA OM",
        price:"250/1 chuyến đi",
        description:"Là nơi mát nhất ở Trà Vinh",
        image:"../assets/image/ao-ba-om.jpg",
        linkProduct:"page 8.html",
    },
     {
        id:"2",
        nameProducts:"Thap Vĩnh Hưng",
        price:"250/1 chuyến đi",
        description:"Khu nổi tiếng ở Bạc liêu",
        image:"../assets/image/thap-vinh-hung.jpg",
        linkProduct: "https://dsvh.gov.vn/thap-vinh-hung-tinh-bac-lieu-22173"
        
    }, 
     {
        id:"3",

        nameProducts:"Phố Cổ Huế",
        price:"250/1 chuyến đi",
        description:"du lịch nổi tiếng",
        image:"../assets/image/pho do hue .jpg",
        linkProduct:"page 5.html"
    }, 
     {
        id:"4",
        nameProducts:"Đền Hùng Vương",
        price:"250/1 chuyến đi",
        description:"di tích lịch sử",
        image:"../assets/image/kinh-nghiem-di-den-hung.jpg",
        linkProduct:"page 5.html"
        
    }, 
     {
                id: "5",
                nameProducts: "Đền Thờ Bác",
                price: "250/1 chuyến đi",
                description: "Nơi du lịch ở trà vinh",
                image: "../assets/image/den tho bac .jpg"
            },
            {
                id: "6",
                nameProducts: "Chùa Một Cột",
                price: "250/1 chuyến đi",
                description: "Nổi tiếng ở Việt Nam",
                image: "../assets/image/nhipsonghanoi.hanoimoi.com.vn-uploads-images-tuandiep-2022-07-31-_chua-mot-cot.jpg"
            },
];

function creataItem(obj) {

    const listProducts = document.getElementById("product-list");

    const item = document.createElement("div");
   item.setAttribute("class", "col");

const card = document.createElement("div");
    card.setAttribute("class", "card h-100 text-center p-3");
    card.style.backgroundColor = productColors[obj.id] || "white";
card.style.borderRadius = "12px";
card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class","image");


    const img = document.createElement("img");
img.src = obj.image;
    img.setAttribute("src",obj.image);
    img.setAttribute("alt",obj.nameProducts);
    img.setAttribute("style","width:100%;max-width:150px");

    containerImage.appendChild(img);

    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class","info card-body");

    const nameProduct = document.createElement("h2");
    nameProduct.innerHTML = obj.nameProducts;
    nameProduct.setAttribute("class","card-title text-danger");

    const price = document.createElement("p");
    price.innerHTML = obj.price;

    const description = document.createElement("p");
    description.innerHTML = obj.description;

   const linkProduct = document.createElement("a");
linkProduct.innerHTML = "xem chi tiết";
// SỬA THÀNH DÒNG NÀY: Lấy trực tiếp linkProduct riêng của từng địa điểm
linkProduct.setAttribute("href", "../html/chi-tiet.html?id=" + obj.id); 
linkProduct.setAttribute("class","btn btn-info");
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);
 
  card.appendChild(containerImage);
card.appendChild(containerInfo);

// đưa card vào item (khung ngoài)
item.appendChild(card);

// đưa item vào list
listProducts.appendChild(item);;
}

 
window.onload = function () {

    const listProducts = document.getElementById("product-list");

    listProducts.style.display = "grid";
    listProducts.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr))";
    listProducts.style.gap = "20px";

    Products.forEach(product => {
        creataItem(product);
    });
};