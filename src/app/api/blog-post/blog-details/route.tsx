import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

// Dynamic export to control rendering mode
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const blogID = url.searchParams.get("blogID");

    if (!blogID) {
      return NextResponse.json({
        success: false,
        message: "Missing or invalid 'blogID' parameter",
      });
    }

    const blogDetails = await prisma.post.findUnique({
      where: {
        id: Number(blogID),
      },
    });

    if (blogDetails) {
      return NextResponse.json({
        success: true,
        data: blogDetails,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch the blog details! Please try again",
      });
    }
  } catch (e) {
    console.error(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
