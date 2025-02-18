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
      },
      {
        name: "Café em Grãos Expresso Pilão 1 Kg",
        productUrl: "https://mercado.carrefour.com.br/cafe-em-graos-expresso-pilao-1-kg-4505107/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/203004/4505107_1.jpg?v=637272452058730000"
      },
      {
        name: "Feijão Preto Carrefour 1 Kg",
        productUrl: "https://mercado.carrefour.com.br/feijao-preto-carrefour-1-kg-5668255/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/128444744/feijao-preto-carrefour-1-kg-1.jpg?v=638283330125370000"
      },
      {
        name: "Achocolatado Em Pó Original Toddy Pote 750g",
        productUrl: "https://mercado.carrefour.com.br/achocolatado-em-po-original-toddy-pote-750g-6554717/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/181150683/achocolatado-em-po-original-toddy-pote-750g-1.jpg?v=638688296021000000"
      },
      {
        name: "Açúcar Refinado União 1kg",
        productUrl: "https://mercado.carrefour.com.br/acucar-refinado-uniao-1kg-197564/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/110671124/acucar-refinado-uniao-1kg-1.jpg?v=638182056322230000"
      },
      {
        name: "Biscoito Recheado Trakinas Chocolate 126g",
        productUrl: "https://mercado.carrefour.com.br/biscoito-recheado-trakinas-chocolate-126g-5727464/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/133956646/biscoito-recheado-trakinas-chocolate-126g-1.jpg?v=638348918882770000"
      },
      {
        name: "Caldo Knorr Galinha 114g 12 cubos",
        productUrl: "https://mercado.carrefour.com.br/caldo-knorr-galinha-114g-12-cubos-8138265/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/133416821/8138265_1.jpg?v=638339271378530000"
      },
      {
        name: "Biscoito Salgado Cream Cracker Integral Piraquê 215g",
        productUrl: "https://mercado.carrefour.com.br/biscoito-salgado-cream-cracker-integral-piraque-215g-3179591/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/137979846/bisc-int-piraque-cream-cracker-115g-1.jpg?v=638442190964100000"
      },
      {
        name: "Farofa de Mandioca Sabor Bacon Yoki 200g",
        productUrl: "https://mercado.carrefour.com.br/farofa-de-mandioca-sabor-bacon-yoki-200g-3507386/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/179664812/farofa-mandioca-yoki-bacon-200g-1.jpg?v=638676134752300000"
      },
      {
        name: "Fubá Mimoso Yoki 500g",
        productUrl: "https://mercado.carrefour.com.br/fuba-mimoso-yoki-500g-200867/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/110523142/fuba-yoki-mimoso-500g-1.jpg?v=638181314136070000"
      },
      {
        name: "Leite Integral Lider 1 L",
        productUrl: "https://mercado.carrefour.com.br/leite-integral-lider-1-l-8150516/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/200866/8150516_1.jpg?v=637272447157430000"
      },
      {
        name: "Macarrão de Sêmola com Ovos Espaguete Nº 8 500 g",
        productUrl: "https://mercado.carrefour.com.br/macarrao-de-semola-com-ovos-espaguete-n-8-500-g-9809805/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/101111065/macarrao-de-semola-com-ovos-espaguete-nº-8-500-g-1.jpg?v=638118862455030000"
      },
      {
        name: "Maionese Hellmann's Tradicional 500g",
        productUrl: "https://mercado.carrefour.com.br/maionese-hellmanns-tradicional-500g-200913/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/129037924/maionese-hellmann-s-tradicional-500g-1.jpg?v=638289283884930000"
      },
      {
        name: "Maionese Hellmann's Tradicional 500g",
        productUrl: "https://mercado.carrefour.com.br/maionese-hellmanns-tradicional-500g-200913/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/129037924/maionese-hellmann-s-tradicional-500g-1.jpg?v=638289283884930000"
      },
      {
        name: "Molho de Tomate Tradicional Tarantella Sachê 300 g",
        productUrl: "https://mercado.carrefour.com.br/molho-de-tomate-tradicional-tarantella-sache-300-g-6610781/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/55791910/molho-de-tomate-tradicional-tarantella-300g-1.jpg?v=637892513894200000"
      },
      {
        name: "Óleo Composto de Soja e Oliva Ervas Finas Maria Garrafa 500ml",
        productUrl: "https://mercado.carrefour.com.br/oleo-composto-de-soja-e-oliva-ervas-finas-maria-garrafa-500ml-5025729/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/9270729/oleo-composto-de-soja-e-oliva-ervas-finas-maria-garrafa-500ml-1.jpg?v=637368938977200000"
      },
      {
        name: "Sal Refinado Iodado Branco Lebre 1Kg",
        productUrl: "https://mercado.carrefour.com.br/sal-refinado-iodado-branco-lebre-1kg-300268/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/196264/300268_1.jpg?v=637272437335270000"
      },
      {
        name: "Sardinha em Óleo Gomes da Costa 125g",
        productUrl: "https://mercado.carrefour.com.br/sardinha-em-oleo-gomes-da-costa-125g-7772831/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/25851174/7772831_1.jpg?v=637720887599530000"
      },
      {
        name: "Seleta de Legumes Quero Lata 170g",
        productUrl: "https://mercado.carrefour.com.br/seleta-de-legumes-quero-lata-170g-5871832/p",
        productImage: "https://carrefourbrfood.vtexassets.com/arquivos/ids/182301497/5871832_1.jpg.jpg?v=638719410884430000"
      }
    ]
  })

  console.log("seeded!")
}

seed()
