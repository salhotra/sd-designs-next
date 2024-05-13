import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const leadEnquiries = await prisma.leadEnquiry.findMany();
      res.status(200).json(leadEnquiries);
    } catch (error) {
      res.status(500).json({ message: "Error fetching lead enquiries" });
    }
  }

  if (req.method === "POST") {
    const { firstName, lastName, email, phone } = req.body;
    try {
      const createdLeadEnquiry = await prisma.leadEnquiry.create({
        data: {
          firstName,
          lastName,
          email,
          phone,
        },
      });
      res.status(201).json(createdLeadEnquiry);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error creating lead enquiries" });
    }
  }
}
