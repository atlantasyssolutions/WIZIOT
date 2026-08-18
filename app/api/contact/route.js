import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, fleetSize, industry, demoType, notes } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    console.log('[WizIOT Lead Received]:', {
      name,
      email,
      company,
      phone,
      fleetSize,
      industry,
      demoType,
      notes,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Demo inquiry received successfully.',
    });
  } catch (error) {
    console.error('[API Contact Error]:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
