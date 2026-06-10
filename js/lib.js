const Products = [
    {
        id:"1",
        nameProducts:"AO BA OM",
        price:"250",
        description:"Là nơi mát nhất ở Trà Vinh",
        image:"../assets/image/ao-ba-om.jpg",
        linkProduct:"page7.html"
    },
     {
        id:"2",
        nameProducts:"Thap Vĩnh Hưng",
        price:"250",
        description:"di tích lịch sử",
        image:"../assets/image/thap-vinh-hung.jpg",
        linkProduct:"page 5.html"
    }, 
     {
        id:"3",

        nameProducts:"Thap Vĩnh Hưng",
        price:"250",
        description:"di tích lịch sử",
        image:"../assets/image/thap-vinh-hung.jpg",
        linkProduct:"page 5.html"
    }, 
     {
        id:"4",
        nameProducts:"Thap Vĩnh Hưng",
        price:"250",
        description:"di tích lịch sử",
        image:"../assets/image/thap-vinh-hung.jpg",
        linkProduct:"page 5.html"
    }, 
];

function creataItem(obj) {

    const listProducts = document.getElementById("product-list");

    const item = document.createElement("div");
    item.className="col"
    item.setAttribute("class","item card-img-top");

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
    linkProduct.setAttribute("href", obj.linkProduct);
    linkProduct.setAttribute("class","btn btn-info");

    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // ✔ THIẾU DÒNG NÀY
    listProducts.appendChild(item);
}

 
window.onload = function () {
    Products.forEach(product => {
        creataItem(product);
    });
};