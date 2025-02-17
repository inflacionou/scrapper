import prisma from "."
import { Prisma } from "@prisma/client"

export async function getProducts() {
  return await prisma.product.findMany({
    include: {
      prices: {
        orderBy: {
          updateTime: 'desc'
        },
        take: 1
      }
    }
  })
}

export async function getProduct(id: string) {
  return await prisma.product.findFirst({
    where: {
      id
    }
  })
}
