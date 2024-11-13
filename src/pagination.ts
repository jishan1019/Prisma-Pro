import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const ofsetPagination = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });

  //   const cursorPagination = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //     cursor: {
  //       id: 5,
  //     },
  //   });

  const sorting = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      title: "Post 1",
    },
  });

  console.log(sorting);
};

main();
