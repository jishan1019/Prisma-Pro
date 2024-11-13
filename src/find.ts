import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const getAllPosts = await prisma.post.findMany();

  //   const findFirst = await prisma.post.findFirstOrThrow({
  //     where: {
  //       id: 1,
  //     },
  //   });

  const findUnique = await prisma.post.findUnique({
    where: {
      id: 1,
    },
  });

  console.log(findUnique);
};

main();
