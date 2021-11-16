
    function addToCart(productName,quantity) {

        console.log("sepete eklendi -" + "-->" + productName + 
        " ,Adet" + "-->" + quantity);
    }



    addToCart(" Elma",10)
    addToCart(" Yumurta",34)
    addToCart(" Karpuz",63)  

    let sayHello = () =>{
        console.log("Hello World!");
    }

    sayHello();
/////////////////////////////////////////bu iki function oluşturma arasında fark nedir araştır
    let sayHello2 = function() {
        console.log("Hello World 2!");
    }

    sayHello2();



    function addToCart2(productName, quantity, Unitprice) {
        
    }

    addToCart2("ford",1,500000)
    addToCart2("mitsubishi",1,300000)
    addToCart2("Mercedes",1,700000)


    /////////////////////////////////////////////////////////////
    let product1 = {productName: "ford", quantity: 1, Unitprice: 500000}

    function addToCart3(product) {
        console.log("Ürün : " + product.productName)
        console.log("Adet : " + product.quantity)
        console.log("Fiyat : " + product.Unitprice)
    }

    addToCart3(product1)
    ///////////////////////////////////////////////////////

    let product2 = {productName: "ford", quantity: 1, Unitprice: 500000}
    let product3 = {productName: "ford", quantity: 1, Unitprice: 500000}
    product2=product3
    product2.productName = "Mercedes"
    console.log(product3.productName)

    function addToCart4(products) {
        console.log(products)
    }

    let products = [
        {productName: "ford", quantity: 1, Unitprice: 500000},
        {productName: "Mercedes", quantity: 1, Unitprice: 500000},
        {productName: "Mitsubishi", quantity: 1, Unitprice: 500000}
    ]

    addToCart4(products)

    function add(...numbers) {   //rest operatörü
        let total = 0;
        for (let i = 0; i < numbers.length; i++) {
            total = total + numbers[i]
            
        }
        console.log(total)
    }

    add(20, 30)
    add(20, 30, 59) 
    add(20, 30, 34, 76)