import { addNewProduct } from "./scraper/addNewProduct"

const url = "https://mercado.carrefour.com.br/picanha-bovina-congelada-swift-mais-aproximadamente-1500g-28344w-283444/p#crfimt=home|mercado|thumb|Ver%C3%A3o_cortesbovinos_1p_14-02-a-16-02|1"
const url2 = "https://mercado.carrefour.com.br/arroz-branco-carrefour-classic-olimpiadas-5kg-3433471/p"

const main = async () => {
  const product = await addNewProduct(url2)
  console.log(product)
}

main()
