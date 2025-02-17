import { z } from "zod"

const productSchema = z.object({
  id: z.optional(z.string()),
  name: z.string(),
  productUrl: z.string(),
  productImage: z.optional(z.string())
})

const priceUpdateSchema = z.object({
  price: z.number(),
  pricePerKilo: z.number(),
  productId: z.string()
})

type Product = z.infer<typeof productSchema>
type PriceUpdate = z.infer<typeof priceUpdateSchema>

export { productSchema, priceUpdateSchema, Product, PriceUpdate }
