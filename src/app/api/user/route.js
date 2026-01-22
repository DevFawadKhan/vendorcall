import { NextResponse } from "next/server";
import { createUser, getAllUsers } from "@/app/controller/usercontroller.js";

export async function POST(req) {
  try {
    console.log("GET /api/user caled");
    const body = await req.json();
    console.log("body", body);
    const user = await createUser(body);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    console.log("GET /api/user called");
    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
