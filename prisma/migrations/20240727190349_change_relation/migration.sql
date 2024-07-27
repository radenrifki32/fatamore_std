-- DropForeignKey
ALTER TABLE "UserCurrency" DROP CONSTRAINT "UserCurrency_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserCurrency" ADD CONSTRAINT "UserCurrency_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("externalId") ON DELETE RESTRICT ON UPDATE CASCADE;
