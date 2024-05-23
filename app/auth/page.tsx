import { redirect } from "next/navigation";
import React from "react";

function AuthPage() {
  redirect("/auth/login");
}

export default AuthPage;
