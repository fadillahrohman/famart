const product = [
    {
        id: 0,
        image: 'image/buah-pisang.png',
        title: 'Pisang - 500gram',
        price: 14500,
    },
    {
        id: 1,
        image: 'image/buah-melon.png',
        title: 'Melon - 1buah',
        price: 30000,
    },
    {
        id: 2,
        image: 'image/buah-jeruk_santang.jpg',
        title: 'Jeruk Santang - 500gram',
        price: 20999,
    },
    {
        id: 2,
        image: 'image/buah-pir.png',
        title: 'Pir - 500gram',
        price: 17000,
    },
    {
        id: 3,
        image: 'image/sayur-bayam.png',
        title: 'Bayam',
        price: 5000,
    },
    {
        id: 4,
        image: 'image/sayur-sawi_putih.png',
        title: 'Sawi Putih',
        price: 5500,
    },
    {
        id: 5,
        image: 'image/sayur-cabai_merah.png',
        title: 'Cabai Merah - 100gram',
        price: 7500,
    },
    {
        id: 6,
        image: 'image/sayur-bawang_merah.png',
        title: 'Bawang Merah - 100gram',
        price: 9500,
    },
    {
        id: 7,
        image: 'image/sayur-bawang_putih.png',
        title: 'Bawang Putih - 100gram',
        price: 7000,
    },
    {
        id: 8,
        image: 'image/sayur-kentang.png',
        title: 'Kentang - 500gram',
        price: 14000,
    },
    {
        id: 9,
        image: 'image/sayur-wortel.png',
        title: 'Wortel - 250gram',
        price: 11700,
    },
    {
        id: 10,
        image: 'image/sayur-tomat.png',
        title: 'Tomat - 250gram',
        price: 10500,
    },
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>+ Keranjang</button>"+
        `</div>
        </div>`
    )
}).join('')


var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Keranjang Kamu Kosong";
        document.getElementById("total").innerHTML = "Rp "+0+"";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp "+total;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rp ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}


const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase(); 
    
    const filteredProducts = product.filter(item => item.title.toLowerCase().includes(searchValue));
    
    document.getElementById('root').innerHTML = filteredProducts.map(item => {
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${item.image}></img>
                </div>
                <div class='bottom'>
                    <p>${item.title}</p>
                    <h2>Rp ${item.price}.00</h2>
                    <button onclick='addtocart(${item.id})'>+ Keranjang</button>
                </div>
            </div>`
        );
    }).join('');
});




// Klik Keranjang Muncul Sidebar
document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.querySelector('.cart');
    const sidebar = document.querySelector('.sidebar');

    // Toggle sidebar saat ikon keranjang diklik
    cartIcon.addEventListener('click', function(event) {
        event.stopPropagation(); 
        sidebar.classList.toggle('open');
    });
});


// Navbar - Humburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}