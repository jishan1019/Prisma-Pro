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

  //batch transection
  const [userData, updatedData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
};

main();
