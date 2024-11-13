import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const updateOne = await prisma.post.update({
  //     where: {
  //       id: 4,
  //     },
  //     data: {
  //       title: "Updated Post 1",
  //     },
  //   });

  const updateMany = await prisma.post.updateMany({
    where: {
      published: true,
    },
    data: {
      published: false,
    },
  });

  console.log(updateMany);
};

main();
