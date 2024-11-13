import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "Resct 19 Come with 24 lts version",
      content:
        "Node.js comes with 24 lts version, which is more stable and secure.",
      published: false,
      authorName: "John Doe",
    },
  });

  console.log(result);
};

main();
