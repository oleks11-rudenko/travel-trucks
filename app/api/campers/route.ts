import { NextRequest, NextResponse } from 'next/server';
import { isAxiosError } from 'axios';
import { api } from '../api';

export async function GET(request: NextRequest) {
  try {
    const searchParams = Object.fromEntries(request.nextUrl.searchParams.entries());
    const response = await api('/campers', {
      params: { page: 1, ...searchParams, limit: 4 },
    });
    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return NextResponse.json({ total: 0, items: [] }, { status: 200 });
      }
      const status = error.response?.status || 500;
      return NextResponse.json({ error: error.message, details: error.response?.data }, { status });
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
