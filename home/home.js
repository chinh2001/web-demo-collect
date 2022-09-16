// data list product page home
const data = [
    {
        id: 1,
        image: "home/image/p1.jpg",
        title: "Portfolio Item Title",
        category: ["Graphic"]
    },
    {
        id: 2,
        image: "home/image/p2.jpg",
        title: "Portfolio Item Title",
        category: ["Video","Audio"]
    },
    {
        id: 3,
        image: "home/image/p3.jpg",
        title: "Portfolio Item Title",
        category: ["Graphic","Video","Audio"]
    },
    {
        id: 4,
        image: "home/image/p4.jpg",
        title: "Portfolio Item Title",
        category: ["Web","Video","Audio"]
    },
    {
        id: 5,
        image: "home/image/p5.jpg",
        title: "Portfolio Item Title",
        category: ["Graphic"]
    },
    {
        id: 6,
        image: "home/image/p6.jpg",
        title: "Portfolio Item Title",
        category: ["Graphic","Video","Audio"]
    },
    {
        id: 7,
        image: "home/image/p7.jpg",
        title: "Portfolio Item Title",
        category: ["Graphic"]
    },
    {
        id: 8,
        image: "home/image/p8.jpg",
        title: "Portfolio Item Title",
        category: ["Video","Audio"]
    },
    {
        id: 9,
        image: "home/image/p9.jpg",
        title: "Portfolio Item Title",
        category: ["Graphic","Video","Audio"]
    }
]

function init() {
    let str = "";
    data.forEach(item => {
        str += `<div class="box_item_product">
        <div class="icon-link-product">
            <a href="#">
                <span class="box-icont-item">
                    <i class="fas fa-search"></i>
                </span>
            </a>
            <a href="#">
                <span class="box-icont-item">
                    <i class="fas fa-link"></i>
                </span>
            </a>
        </div>
        <div class="mist-item-background">
            <img src="${item.image}" alt="product">
        </div>
        <div class="title-product">
            <h3>
                <a href="#">
                    ${item.title}
                    <hr class="line-title">
                </a>
            </h3>
            <span>
                Design, Code
            </span>
        </div>
    </div>`
    })

    const listProductsElement = document.getElementsByClassName("box-list-product");
    listProductsElement[0].innerHTML = str;
}
init();

const listBtnProduct = document.getElementsByClassName("btn-product");
for (let i = 0; i < listBtnProduct.length; i++) {
    const item = listBtnProduct[i];
    item.addEventListener("click", filterProduct);
}

function filterProduct(event){
    // console.log("event==",event.target.textContent);
    const listProduct = document.getElementsByClassName("box_item_product");
    // const 
    const textBtn = event.target.textContent.replace(/\s+/g, '');
//active Btn
    for(let i = 0; i < listBtnProduct.length; i++) {
        listBtnProduct[i].classList.remove('active');
    }
    event.target.classList.add('active');


    for(let i = 0; i < listProduct.length; i++) {
        listProduct[i].classList.remove('active');
        const box = listProduct[i];
        let ft = data[i].category;
        box.style.animation = "";
        box.style.animation = "movemenHide 2s ease-in-out";
        if(textBtn == "All"){
            box.style.display = "block";
            box.style.animation = "movemenTappear 2s ease-in-out";
        }
        else if(ft.includes(textBtn)) {
            box.style.display = "block";
            box.style.animation = "movemenTappear 2s ease-in-out";
        }
        else {
            setTimeout(function() {
                listProduct[i].style.display = "none";
            }, 1500);
            box.style.animation = "movemenHide 2s ease-in-out";
        }
        // box.style.animation = "none";
        // console.log("box===",box);
    }
}