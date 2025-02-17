import puppeteer, { Page } from "puppeteer"
import { Product, productSchema, priceUpdateSchema, PriceUpdate } from "../types/product"

function maskKilo(value: string): string {
  const regex = /^\d+(\.\d+)?$/;

  if (regex.test(value)) {
    return (parseFloat(value) * 1000).toString()
  }

  return value;
}


function extractKilogramByName(name: string | null): number | null {
  if (!name) return 0

  const regex = /\b(\d+(\.\d+)?)\s*(kg|Kg|g)\b/g

  const matches = name.match(regex)

  // no one options matched
  if (matches === null) return null

  let weight = matches[0]

  if (weight.endsWith("Kg") || weight.endsWith("kg")) {
    const v = weight.replace("kg", "").replace("Kg", "")
    return Number(maskKilo(v))
  }

  const v = weight.replace("g", "")
  return Number(maskKilo(v))
}

function extractPrice(price: string | null): number {
  if (!price) return 0

  const value = price.slice(2)

  return Number(value.replace(',', ""))
}

export async function getPage(url: string) {
  const browser = await puppeteer.launch({
    headless: true
  })
  const page = await browser.newPage()
  await page.goto(url)
  return page
}

export async function parseProduct(page: Page, url: string): Promise<Product | null> {
  // get product data
  const productName = await page.$eval('h2.text-base.md\\:text-\\[20px\\].mb-3.text-text', el => el.textContent);
  const priceStr = await page.$eval('span.text-2xl.font-bold.text-default', el => el.textContent);
  const imageUrl = await page.$eval(
    'img.object-contain.w-full.h-full.cursor-zoom-in.max-h-pdp-gallery',
    (img) => img.getAttribute('src')
  );

  const object: Product = {
    name: productName || "",
    productUrl: url,
    productImage: imageUrl || undefined
  }

  if (productSchema.parse(object)) {
    console.log("valid object")
    return object
  } else {
    console.log("invalid object")
    return null
  }
}

export async function parsePriceUpdate(page: Page, productId: string): Promise<PriceUpdate | null> {
  const productName = await page.$eval('h2.text-base.md\\:text-\\[20px\\].mb-3.text-text', el => el.textContent);
  const priceStr = await page.$eval('span.text-2xl.font-bold.text-default', el => el.textContent);
  const price = extractPrice(priceStr)

  const kilograms = extractKilogramByName(productName)

  const object: PriceUpdate = {
    price: price,
    pricePerKilo: kilograms !== null ? price / (kilograms / 1000) : 0,
    productId
  }

  if (priceUpdateSchema.parse(object)) {
    console.log("valid object");
    return object
  } else {
    console.log("invalid object")
    return null
  }
}




