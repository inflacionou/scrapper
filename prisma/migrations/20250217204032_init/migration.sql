-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "productUrl" TEXT NOT NULL,
    "productImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceUpdate" (
    "updateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DECIMAL(65,30) NOT NULL,
    "pricePerKilo" DECIMAL(65,30) NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "PriceUpdate_pkey" PRIMARY KEY ("updateTime","price")
);

-- CreateTable
CREATE TABLE "RequestProduct" (
    "id" SERIAL NOT NULL,
    "productUrl" TEXT NOT NULL,

    CONSTRAINT "RequestProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PriceUpdate" ADD CONSTRAINT "PriceUpdate_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
