import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Store submission locally (file-based placeholder)
    const quotesPath = path.join(process.cwd(), 'src', 'data', 'quotes.json');

    let quotes = [];
    try {
      const existing = await fs.readFile(quotesPath, 'utf-8');
      quotes = JSON.parse(existing);
    } catch {
      // File doesn't exist yet — start fresh
    }

    quotes.push({
      id: Date.now(),
      ...data,
    });

    await fs.writeFile(quotesPath, JSON.stringify(quotes, null, 2));

    return NextResponse.json({ success: true, message: 'Quote request received' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process quote request' }, { status: 500 });
  }
}
