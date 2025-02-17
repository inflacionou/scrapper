import { Product } from "@prisma/client";
import { getPage, parseProduct, parsePriceUpdate } from "./parser";
import { addPriceUpdate } from "../repository/priceUpdate";

export async function addNewProduct(url: string) {
  const page = await getPage(url)
  const product = await parseProduct(page, url)

  // store in db
  // TODO: store in db
  //

  const priceUpdate = await parsePriceUpdate(page, product!.productUrl)
  console.log(priceUpdate, product)
}

export async function addNewPriceUpdate(product: Product) {
  const page = await getPage(product.productUrl)
  const priceUpdate = await parsePriceUpdate(page, product.id)

  if (!priceUpdate) return null;

  const response = await addPriceUpdate(priceUpdate, product.id)
  if (response) {
    console.log("added new priceUpdate")
    return;
  }

  console.log("cant store priceUpdate")
}
