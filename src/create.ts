import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Post 1",
        content: "Content for Post 1",
        published: true,
        authorName: "Author 1",
      },
      {
        title: "Post 2",
        content: "Content for Post 1",
        published: true,
        authorName: "Author 1",
      },
      {
        title: "Post 3",
        content: "Content for Post 1",
        published: true,
        authorName: "Author 1",
      },
    ],
  });

  console.log(createMany);
};

main();
