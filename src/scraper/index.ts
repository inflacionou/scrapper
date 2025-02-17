import puppeteer from "puppeteer"

type Product = {
  id: string;
  name: string;
  price: number;
  cod: number;
  pricePerKilo: number;
  productUrl: string
}

export async function parseProduct(product: Product) {
  const browser = await puppeteer.launch({
    headless: true
  })
  const page = await browser.newPage()
  await page.goto(product.productUrl)

  // get product Name
  const productName = await page.$eval('h2.text-base.md\\:text-\\[20px\\].mb-3.text-text', el => el.textContent);
  console.log("producoName", productName)

  // get product Price
  const preco = await page.$eval('span.text-2xl.font-bold.text-default', el => el.textContent);
  console.log('Preço:', preco);

  // get product Price per kilo
  const linkMarca = await page.$eval('a.underline', el => el.href);
  console.log('Link da Marca:', linkMarca);

  // get product cod
  const codigoProduto = await page.$eval('span.text-text-light', el => el.textContent);
  console.log('Código do Produto:', codigoProduto);
} 
