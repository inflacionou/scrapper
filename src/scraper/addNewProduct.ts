import { getPage, parseProduct, parsePriceUpdate } from "./parser";

export async function addNewProduct(url: string) {
  const page = await getPage(url)
  const product = await parseProduct(page, url)

  // store in db
  // TODO: store in db
  //

  const priceUpdate = await parsePriceUpdate(page, product!.productUrl)
  console.log(priceUpdate, product)
}
