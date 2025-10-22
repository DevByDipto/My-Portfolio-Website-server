-- CreateTable
CREATE TABLE "aboutMe" (
    "id" SERIAL NOT NULL,
    "discription" TEXT NOT NULL,
    "Technologies" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aboutMe_pkey" PRIMARY KEY ("id")
);
