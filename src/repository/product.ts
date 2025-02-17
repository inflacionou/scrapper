import prisma from "."
import { Prisma } from "@prisma/client"

export async function getProducts() {
  return await prisma.product.findMany()
}

export async function getProduct(id: string) {
  return await prisma.product.findFirst({
    where: {
      id
    }
  })
}
