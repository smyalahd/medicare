
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | MediCare",
  description:
    "Create your MediCare account and take the next step in your healthcare journey.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
