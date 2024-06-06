// Create products and store it in local storerage

let producst = JSON.parse(localStorage.getItem("products")) 
    ?JSON.parse(localStorage.getItem("products"))
    :localStorage.setItem('products', JSON.stringify(
        [
            {   
                id:1,
                productName: "bubbles",
                catergory: "character",
                description: "super hero",
                amount: 20000.89,
                img_url: "https://chelsea-julie.github.io/all-images/images/bubbles.png"
              },
              {
                id:2,
                productName: "buttercup",
                catergory: "character",
                description: "super hero",
                amount: 20000.89,
                img_url: "https://chelsea-julie.github.io/all-images/images/buttercup.png"
              },
              {
                id:3,
                productName: "awodwa",
                catergory: "person",
                description: "aspiring developer",
                amount: 20000.89,
                img_url: "https://chelsea-julie.github.io/all-images/images/awodwa.png"
              },
              {
                id:4,
                productName: "daniel",
                catergory: "person",
                description: "long",
                amount: 20000.89,
                img_url: "https://chelsea-julie.github.io/all-images/images/daniel.png"
              },
              {
                id:5,
                productName: "nizaam",
                catergory: "nice",
                description: "aspiring developer",
                amount: 20000.89,
                img_url: "https://chelsea-julie.github.io/all-images/images/doofensmirts.png"
              }
        ]
    ))

function recentProduct() {
        let reverse = producst.reverse().slice(0, producst.length)
        console.log(reverse);
}

recentProduct()


    