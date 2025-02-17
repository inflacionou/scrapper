-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- AlterTable
ALTER TABLE "RequestProduct" ADD COLUMN     "status" "RequestStatus" NOT NULL DEFAULT 'PENDING';
