import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user1",
  //       email: "user1@gmail.com",
  //       role: UserRole.user,
  //     },
  //   });

  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "this is user 1 bio",
  //       userId: 1,
  //     },
  //   });

  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: "App Development",
  //     },
  //   });

  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "My Frist posts",
  //       content: "This is my first post",
  //       authorId: 1,
  //       postCategory: {
  //         create: {
  //           categoryId: 1,

  //           // category : {
  //           //     connect : {
  //           //         id: 1
  //           //     }
  //           // }
  //         },
  //       },
  //     },
  //     include: {
  //       postCategory: true,
  //     },
  //   });

  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "My Frist posts",
  //       content: "This is my first post",
  //       authorId: 1,
  //       postCategory: {
  //         create: [
  //           {
  //             categoryId: 1,
  //           },
  //           {
  //             categoryId: 2,
  //           },
  //         ],
  //       },
  //     },
  //     include: {
  //       postCategory: true,
  //     },
  //   });

  console.log("create successfully");
};

main();
