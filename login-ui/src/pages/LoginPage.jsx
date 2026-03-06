import React from "react";
import { AuthLayout } from "@/layouts";
import { LoginForm, BrandPanel } from "@/components/login";

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
      <BrandPanel />
    </AuthLayout>
  );
};

export default LoginPage;
