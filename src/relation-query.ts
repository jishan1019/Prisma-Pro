import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //fluent api mean post get by user id
  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     })
  //     .post();

  //populate
  //   const result = await prisma.user.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //     include: {
  //       post: true,
  //     },
  //   });

  // const relationalFields = await prisma.user.findMany({
  //   include: {
  //     post: {
  //       where: {
  //         published: true,
  //       },
  //     },
  //   },
  // });

  // console.dir(relationalFields, { depth: Infinity });
  




  

main();
