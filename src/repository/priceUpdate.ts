import prisma from "."
import { Prisma } from "@prisma/client"


export async function addPriceUpdate(input: Omit<Prisma.PriceUpdateCreateInput, "product">, productId: string) {
  try {
    await prisma.priceUpdate.create({
      data: {
        ...input,
        product: {
          connect: {
            id: productId
          }
        }
      }
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
