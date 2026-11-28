
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | MediCare",
  description:
    "Reset your MediCare password. Enter your email address to request password recovery.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
