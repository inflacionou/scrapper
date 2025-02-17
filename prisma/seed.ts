import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const products = await prisma.product.createMany({
    data: [
      {
        name: "Picanha Bovina Congelada Swift Mais Aproximadamente 1500g",
        productUrl: "https://mercado.carrefour.com.br/picanha-bovina-congelada-swift-mais-aproximadamente-1500g-28344w-283444/p#crfimt=home|mercado|thumb|Ver%C3%A3o_cortesbovinos_1p_14-02-a-16-02|1",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/68536171/picanha-bov-cong-swift-mais-kg-1.jpg?v=637948048723430000"
      },
      {
        name: "Arroz Branco Prato Fino Tipo 1 - 5kg",
        productUrl: "https://mercado.carrefour.com.br/arroz-branco-prato-fino-tipo-1-5kg-906417/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/193571/906417_1.jpg?v=637272430399600000"
      }
    ]
  })

  console.log("seeded!")
}

seed()
