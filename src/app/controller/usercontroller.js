import prisma from "@/app/lib/prisma";

export const createUser = async (data) => {
  console.log(data);
  return await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role || "USER",
    },
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
};
