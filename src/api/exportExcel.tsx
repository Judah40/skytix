// pages/api/exportExcel.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import ExcelJS from 'exceljs';
import fetch from 'node-fetch';
import stream from 'stream';
import { promisify } from 'util';

const pipeline = promisify(stream.pipeline);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    // Assuming URLs are sent in the request body
    const { imageUrls } = req.body as { imageUrls: string[] };

    for (const [index, imageUrl] of imageUrls.entries()) {
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
      
      const imageBuffer = await response.buffer();

      // Add image to the workbook
      const imageId = workbook.addImage({
        buffer: imageBuffer,
        extension: 'png',  // Assuming the image is in PNG format; adjust as needed
      });

      // Calculate cell position for each image
      const cell = `A${index + 1}`;
      worksheet.addImage(imageId, `${cell}:${cell}`);
    }

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="images.xlsx"');

    await workbook.xlsx.write(res);
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating Excel file with images' });
  }
};
