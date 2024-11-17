import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "lorem",
      age: 10,
      email: "rr@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 100,
    },
    data: {
      age: 40,
    },
  });

  //interactive transection
  const result = await prisma.$transaction(async (txClient) => {
    const allUser = await txClient.user.findMany();

    const allPost = await txClient.post.findMany();

    const updateUser = await txClient.user.update({
      where: {
        id: 5,
      },
      data: {
        age: 3,
      },
    });

    return {
      allPost,
      allUser,
      updateUser,
    };
  });

  console.log(result);
};

main();
