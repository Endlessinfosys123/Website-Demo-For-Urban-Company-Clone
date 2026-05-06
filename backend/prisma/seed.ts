import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient() as any;

async function main() {
  console.log('Seeding data...');

  // 1. Create Cities
  const delhi = await prisma.city.upsert({
    where: { slug: 'delhi' },
    update: {},
    create: { 
      name: 'New Delhi', 
      slug: 'delhi', 
      state: 'Delhi',
      isActive: true 
    },
  });

  const mumbai = await prisma.city.upsert({
    where: { slug: 'mumbai' },
    update: {},
    create: { 
      name: 'Mumbai', 
      slug: 'mumbai', 
      state: 'Maharashtra',
      isActive: true 
    },
  });

  // 2. Create Categories
  const cleaning = await prisma.category.upsert({
    where: { slug: 'cleaning' },
    update: {},
    create: { 
      name: 'Cleaning & Pest Control', 
      slug: 'cleaning', 
      imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400', 
      isActive: true,
      sortOrder: 1
    },
  });

  const bathroomCleaning = await prisma.category.create({
    data: {
      name: 'Bathroom Cleaning',
      slug: 'bathroom-cleaning',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400',
      parentId: cleaning.id,
      isActive: true,
      sortOrder: 1
    }
  });

  // 3. Create Services
  const deepCleaning = await prisma.service.create({
    data: {
      name: 'Deep Home Cleaning',
      slug: 'deep-home-cleaning',
      description: 'Complete home deep cleaning with professional machines.',
      categoryId: cleaning.id,
      cityIds: [delhi.id, mumbai.id],
      isFeatured: true,
      isActive: true,
    }
  });

  // 4. Create Packages
  await prisma.package.createMany({
    data: [
      {
        serviceId: deepCleaning.id,
        name: '1 BHK Deep Cleaning',
        price: 2499,
        description: 'Deep cleaning for 1 Bedroom Hall Kitchen',
        duration: 240, // 4 hours
        isActive: true,
        sortOrder: 1
      },
      {
        serviceId: deepCleaning.id,
        name: '2 BHK Deep Cleaning',
        price: 3499,
        description: 'Deep cleaning for 2 Bedroom Hall Kitchen',
        duration: 360, // 6 hours
        isActive: true,
        sortOrder: 2
      }
    ]
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
