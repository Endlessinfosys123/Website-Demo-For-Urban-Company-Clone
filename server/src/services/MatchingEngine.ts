import { PrismaClient, Booking, Partner } from '@prisma/client';

const prisma = new PrismaClient();

class MatchingEngine {
  async findBestPartner(booking: any): Promise<string | null> {
    // 1. Get all active & approved partners in the city
    const partners = await prisma.partner.findMany({
      where: {
        isActive: true,
        kycStatus: 'APPROVED',
        cities: { some: { id: booking.cityId } },
        categories: { some: { id: booking.service.categoryId } }
      }
    });

    if (partners.length === 0) return null;

    // 2. Filter by availability (Simplified for now)
    // In a real app, check PartnerSlot for the scheduledAt time
    const availablePartners = partners.filter(p => p.isOnline);

    if (availablePartners.length === 0) return null;

    // 3. Scoring (Simplified logic)
    // Distance (40%), Rating (30%), Completion Rate (20%), Load Balance (10%)
    const scoredPartners = availablePartners.map(p => {
      let score = 0;
      score += Number(p.rating) * 3; // Rating weight
      score += Number(p.completionRate) * 0.2; // Completion weight
      // More scoring logic here (e.g. distance using lat/lng)
      return { id: p.id, score };
    });

    scoredPartners.sort((a, b) => b.score - a.score);

    // Return the top partner ID
    return scoredPartners[0].id;
  }
}

export default new MatchingEngine();
