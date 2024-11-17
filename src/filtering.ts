import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log(e);
});

const main = async () => {
  //   const andFiltering = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           title: {
  //             contains: "title",
  //           },
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  //   const orFiltering = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             contains: "title",
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  //   const notFiltering = await prisma.post.findMany({
  //     where: {
  //       NOT: [
  //         {
  //           title: {
  //             contains: "title",
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  //   const startWithFiltering = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         startsWith: "user",
  //       },
  //     },
  //   });

  //   const endWithFiltering = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: "com",
  //       },
  //     },
  //   });

  const equalFiltering = await prisma.user.findMany({});

  //   console.log(equalFiltering);
};

main();
