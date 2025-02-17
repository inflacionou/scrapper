import { addNewProduct } from "./scraper/addNewProduct"
import { getProducts } from "./repository/product"
import { isToday } from "date-fns"

const main = async () => {
  const products = await getProducts()

  products.forEach((product) => {
    const lastUpdate = product.prices[0]
    if (!lastUpdate || !isToday(lastUpdate.updateTime)) {
      // TODO: update price 

      console.log("need update")
    }
  })
}

main()
