import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

// the reason this is working for us is because we did not add any restriction for authenticated users to be able to load songs but this way even if you change that is going to work without authenticated users

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({
        req,
        res
    });

    await supabase.auth.getSession();
    return res;

}