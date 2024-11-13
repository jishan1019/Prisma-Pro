import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const deleteOne = await prisma.post.delete({
    where: {
      id: 6,
    },
  });

  console.log(deleteOne);
};

main();
