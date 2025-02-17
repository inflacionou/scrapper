import puppeteer from "puppeteer"

const url = "https://mercado.carrefour.com.br/picanha-bovina-congelada-swift-mais-aproximadamente-1500g-28344w-283444/p#crfimt=home|mercado|thumb|Ver%C3%A3o_cortesbovinos_1p_14-02-a-16-02|1"
const url2 = "https://mercado.carrefour.com.br/arroz-branco-carrefour-classic-olimpiadas-5kg-3433471/p"

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true
  })
  const page = await browser.newPage()
  await page.goto(url2)

  const productName = await page.$eval('h2.text-base.md\\:text-\\[20px\\].mb-3.text-text', el => el.textContent);
  console.log("producoName", productName)

  const preco = await page.$eval('span.text-2xl.font-bold.text-default', el => el.textContent);
  console.log('Preço:', preco);

  const linkMarca = await page.$eval('a.underline', el => el.href);
  console.log('Link da Marca:', linkMarca);

  const codigoProduto = await page.$eval('span.text-text-light', el => el.textContent);
  console.log('Código do Produto:', codigoProduto);
}

main()
