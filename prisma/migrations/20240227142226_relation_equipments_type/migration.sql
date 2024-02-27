-- AddForeignKey
ALTER TABLE "equipments" ADD CONSTRAINT "equipments_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
