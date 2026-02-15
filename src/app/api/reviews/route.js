import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const REVIEWS_FILE = path.join(process.cwd(), "data", "reviews.json");

function ensureDataDir() {
  const dir = path.dirname(REVIEWS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(REVIEWS_FILE)) {
    fs.writeFileSync(REVIEWS_FILE, "[]", "utf-8");
  }
}

function getReviews() {
  ensureDataDir();
  try {
    const data = fs.readFileSync(REVIEWS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveReviews(reviews) {
  ensureDataDir();
  fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2), "utf-8");
}

export async function GET() {
  const reviews = getReviews();
  return NextResponse.json(reviews);
}

export async function POST(request) {
  try {
    const { name, rating, text } = await request.json();

    if (!name || !text || !rating) {
      return NextResponse.json(
        { error: "Name, rating, and review text are required." },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5." },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name." },
        { status: 400 }
      );
    }

    if (text.trim().length < 10) {
      return NextResponse.json(
        { error: "Review must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const initials = name
      .trim()
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const colors = ["primary", "accent", "green", "pink", "purple", "cyan"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const review = {
      id: Date.now(),
      initials,
      name: name.trim(),
      rating: parseInt(rating),
      text: text.trim(),
      color,
      date: new Date().toISOString(),
    };

    const reviews = getReviews();
    reviews.unshift(review);
    saveReviews(reviews);

    return NextResponse.json({ message: "Thank you for your review!", review });
  } catch (err) {
    console.error("Review API error:", err);
    return NextResponse.json(
      { error: "Failed to submit review. Please try again later." },
      { status: 500 }
    );
  }
}
