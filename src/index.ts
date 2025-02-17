import { addNewProduct, addNewPriceUpdate } from "./scraper/addNewProduct"
import { getProducts } from "./repository/product"
import { isToday } from "date-fns"

const main = async () => {
  const products = await getProducts()

  products.forEach(async (product) => {
    const lastUpdate = product.prices[0]
    if (!lastUpdate || !isToday(lastUpdate.updateTime)) {
      await addNewPriceUpdate(product)
    }
  })
}

main()
