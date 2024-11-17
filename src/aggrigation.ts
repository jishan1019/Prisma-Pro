import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.user.aggregate({
  //     _avg: {
  //       age: true,
  //     },
  //   });

  //   const result = await prisma.user.aggregate({
  //     _sum: {
  //       age: true,
  //     },
  //   });

  //   const result = await prisma.user.aggregate({
  //     _count: {
  //       age: true,
  //     },
  //   });

  //   const countData = await prisma.user.count();

  const result = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  console.log(result);
};

main();
