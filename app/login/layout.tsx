
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In | MediCare",
  description:
    "Log in to MediCare to continue your healthcare journey. Access your account and manage your healthcare experience.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
