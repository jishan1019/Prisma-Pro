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

  // const updateMany = await prisma.post.updateMany({
  //   where: {
  //     published: true,
  //   },
  //   data: {
  //     published: false,
  //   },
  // });

  const updateOrCreate = await prisma.post.upsert({
    where: {
      id: 7,
    },
    update: {
      title: "this is upsert title",
    },
    create: {
      title: "this is new upset data",
      content: "lorem ipsum dollar amat",
    },
  });

  console.log(updateOrCreate);
};

main();
