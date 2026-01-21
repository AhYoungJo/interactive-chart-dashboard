import { NextResponse } from "next/server";
import categoriesData from "@/data/categories.json";
import type { CategoryOption } from "@/types/chart";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 200));

  const categories = categoriesData as CategoryOption[];

  return NextResponse.json(categories);
}
