import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    // Serve the PDF.js worker file with correct headers
    const workerPath = path.join(process.cwd(), "public", "pdf.worker.min.js");

    if (fs.existsSync(workerPath)) {
      const workerContent = fs.readFileSync(workerPath);

      return new NextResponse(workerContent, {
        headers: {
          "Content-Type": "application/javascript",
          "Cache-Control": "public, max-age=31536000, immutable",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } else {
      return NextResponse.json(
        { error: "Worker file not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error serving PDF worker:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
