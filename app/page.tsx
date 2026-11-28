import Link from "next/link";
import MobileMenu from "./MobileMenu";
import ContactForm from "./ContactForm";
import StructuredData from "./structured-data";

const treatments = [
  {
    icon: "♡",
    title: "Skin problems",
    description: "Get help with acne, rashes and other common skin conditions.",
    color: "bg-[#f4e8df]",
  },
  {
    icon: "✳",
    title: "Allergies",
    description: "Support for seasonal allergies and everyday allergy symptoms.",
    color: "bg-[#e4eee4]",
  },
  {
    icon: "☾",
    title: "Sleep problems",
    description: "Explore support for sleep difficulties and related concerns.",
    color: "bg-[#e9e5f1]",
  },
  {
    icon: "✚",
    title: "General health",
    description: "Get guidance for common health questions and concerns.",
    color: "bg-[#e3eeee]",
  },
  {
    icon: "⌁",
    title: "Stomach problems",
    description: "Learn more about common digestive health concerns.",
    color: "bg-[#f3edda]",
  },
  {
    icon: "⌕",
    title: "Find a doctor",
    description: "Explore our doctor directory and discover a specialist.",
    color: "bg-[#e8eee7]",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Start by choosing your health concern or the type of care you are looking for.",
  },
  {
    number: "02",
    title: "Find the right care",
    description:
      "Explore available care options and healthcare professionals.",
  },
  {
    number: "03",
    title: "Take your next step",
    description:
      "Review your options and continue with the care journey that suits you.",
  },
];

const articles = [
  {
    category: "WELLNESS",
    title: "Small steps towards a healthier everyday life",
    description:
      "Simple habits can make a meaningful difference to how you feel every day.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "HEALTH",
    title: "Understanding your body's signals",
    description:
      "Learn why paying attention to changes in your body is an important part of wellbeing.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "LIFESTYLE",
    title: "Making time for your wellbeing",
    description:
      "A balanced routine can help you create more space for your physical and mental health.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#183d36]">
      <StructuredData />

      {/* Navigation */}
      <header className="relative z-50 border-b border-[#eae9e2] bg-[#faf9f6]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#174e43] text-lg font-bold text-white">
              M
            </span>
            <span className="text-2xl font-bold tracking-tight">
              MediCare<span className="text-[#a95031]">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#63756d] md:flex">
            <Link href="#treatments" className="transition hover:text-[#174e43]">
              Treatments
            </Link>
            <Link
              href="#how-it-works"
              className="transition hover:text-[#174e43]"
            >
              How it works
            </Link>
            <Link href="#about" className="transition hover:text-[#174e43]">
              About us
            </Link>
            <Link href="#articles" className="transition hover:text-[#174e43]">
              Health & lifestyle
            </Link>
          </nav>

          <MobileMenu />

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/doctors"
              className="text-sm font-semibold text-[#31584d] transition hover:text-[#a95031]"
            >
              Find a doctor
            </Link>

            <Link
              href="/login"
              className="rounded-full border border-[#dcded5] bg-white px-5 py-3 text-sm font-semibold text-[#31584d] transition hover:border-[#174e43] hover:bg-[#f0f1e9]"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="rounded-full bg-[#174e43] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#103d34]"
            >
              Sign up ↗
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-24 pt-10 lg:px-10 lg:pb-32 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Hero content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e5e5d9] bg-white px-4 py-2 text-xs font-semibold text-[#547166] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#a95031]" />
              Healthcare made more personal
            </div>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
              Your health.
              <br />
              <span className="text-[#a95031]">Your journey.</span>
              <br />
              Our care.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#59665e] sm:text-lg">
              Finding the right healthcare shouldn&apos;t feel complicated.
              Discover care, explore treatments and take the next step
              towards feeling better — all in one place.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#treatments"
                className="rounded-full bg-[#174e43] px-8 py-4 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#103d34] hover:shadow-md"
              >
                Explore treatments ↗
              </Link>

              <Link
                href="/doctors"
                className="rounded-full border border-[#dcded5] bg-white px-8 py-4 text-sm font-semibold text-[#31584d] transition duration-300 hover:-translate-y-0.5 hover:border-[#174e43] hover:shadow-sm"
              >
                Meet our doctors
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-[#faf9f6] bg-[#d8b8a4]" />
                <div className="h-10 w-10 rounded-full border-2 border-[#faf9f6] bg-[#b6c9b9]" />
                <div className="h-10 w-10 rounded-full border-2 border-[#faf9f6] bg-[#d7d0bc]" />
              </div>

              <p className="text-sm leading-6 text-[#59665e]">
                <span className="font-semibold text-[#31584d]">
                  Care that starts with you
                </span>
                <br />
                A simpler healthcare experience
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -right-6 -top-8 h-48 w-48 rounded-full bg-[#e8dfc9] blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-[#dce9dc] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-sm">
              <div
                className="relative min-h-[400px] bg-cover bg-center sm:min-h-[520px] lg:min-h-[600px]"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=90')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#173d35]/60 via-[#173d35]/5 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-[#faf9f6]/90 px-4 py-2 text-xs font-semibold text-[#31584d] backdrop-blur sm:left-7 sm:top-7">
                  A new approach to healthcare
                </div>

                <div className="absolute bottom-7 left-6 right-6 text-white sm:bottom-10 sm:left-10 sm:right-10">
                  <p className="text-sm font-medium text-white/80">
                    Care designed around you
                  </p>
                  <h2 className="mt-2 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
                    Feeling better starts with feeling cared for.
                  </h2>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 left-4 max-w-[270px] rounded-2xl border border-[#e9e8df] bg-white p-4 shadow-xl sm:-left-7 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7eee4] text-xl text-[#31584d]">
                  ♡
                </div>
                <div>
                  <p className="text-sm font-bold">Your wellbeing matters</p>
                  <p className="mt-1 text-xs text-[#59665e]">
                    Care with you in mind
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section
        id="treatments"
        className="bg-[#f0f1e9] px-6 py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a95031]">
                Explore healthcare
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                What can we help
                <br className="hidden sm:block" /> you with today?
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#59665e]">
              Explore common health concerns and discover where to start
              on your healthcare journey.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment, index) => (
              <Link
                href="/doctors"
                key={treatment.title}
                className="group relative overflow-hidden rounded-3xl border border-[#e2e4da] bg-[#faf9f6] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c9d3c8] hover:shadow-lg sm:p-8"
              >
                {/* Subtle hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-[#e8eee5]/0 transition duration-300 group-hover:to-[#e8eee5]/50" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${treatment.color} text-2xl transition-transform duration-300 group-hover:scale-105`}
                    >
                      {treatment.icon}
                    </div>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e7df] text-[#31584d] transition-all duration-300 group-hover:border-[#174e43] group-hover:bg-[#174e43] group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#a95031]">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 min-h-[56px] text-sm leading-6 text-[#59665e]">
                    {treatment.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#31584d]">
                    <span className="transition-all duration-300 group-hover:mr-1">
                      Explore care
                    </span>
                    <span className="sr-only">for {treatment.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

  {/* How it works */}
  <section id="how-it-works" className="px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a95031]">
          Simple steps
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Care, without the complexity.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#59665e]">
          Getting started with your health journey should be simple
          and clear.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border-t border-[#dcded5] pt-6"
          >
            <span className="text-sm font-bold text-[#a95031]">
              STEP {step.number}
            </span>
            <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
            <p className="mt-4 leading-7 text-[#59665e]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* About */}
  <section id="about" className="px-6 pb-20 lg:px-10 lg:pb-24">
    <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#174e43] lg:grid-cols-2">
      <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5a48a]">
          The MediCare approach
        </p>
        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
          Healthcare should work around your life.
        </h2>
        <p className="mt-6 leading-8 text-[#d1e0d8]">
          We believe getting healthcare should feel less overwhelming.
          Our vision is to bring care, information and people together
          through a more thoughtful digital experience.
        </p>
        <Link
          href="/doctors"
          className="mt-8 inline-flex w-fit rounded-full bg-[#faf9f6] px-7 py-3.5 text-sm font-semibold text-[#174e43] transition hover:bg-white"
        >
          Meet our doctors ↗
        </Link>
      </div>

      <div
        className="min-h-[350px] bg-cover bg-center lg:min-h-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85')",
        }}
      />
    </div>
  </section>

  {/* Testimonials / Trust */}
  <section className="bg-[#f0f1e9] px-6 py-20 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a95031]">
            A better experience
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Because your health is personal.
          </h2>
          <p className="mt-6 max-w-md leading-7 text-[#59665e]">
            A healthcare experience should be easy to understand,
            approachable and built around the needs of every individual.
          </p>
        </div>

        <div className="rounded-3xl bg-[#faf9f6] p-8 sm:p-10">
          <span className="text-3xl text-[#a95031]">“</span>
          <p className="mt-3 text-xl font-medium leading-8 text-[#31584d]">
            The best healthcare experience is one where you feel
            listened to, understood and supported every step of the way.
          </p>
          <p className="mt-6 text-sm font-semibold text-[#59665e]">
            The MediCare vision
          </p>
          <p className="mt-1 text-xs text-[#59665e]">
            Portfolio concept
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Health Articles */}
  <section id="articles" className="px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a95031]">
            Knowledge & wellbeing
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            A little more about health.
          </h2>
        </div>

        <p className="max-w-md leading-7 text-[#59665e]">
          Inspiration, information and ideas for taking care of yourself.
        </p>
      </div>

      {/* Clickable Article Cards */}
      <div className="mt-12 grid gap-7 md:grid-cols-3">
        {articles.map((article, index) => {
          const slugs = ["wellness", "health", "lifestyle"];

          return (
            <article key={article.title} className="group flex flex-col">
              <Link
                href={`/articles/${slugs[index]}`}
                className="flex flex-1 flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[1.75rem] bg-[#e8e8df]">
                  <div
                    className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#183d36]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute left-4 top-4 rounded-full bg-[#faf9f6]/95 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-[#31584d] backdrop-blur-sm sm:left-5 sm:top-5">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col pt-6">
                  <p className="text-xs font-medium text-[#59665e]">
                    0{index + 1} / Wellbeing
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-[#183d36] transition-colors duration-300 group-hover:text-[#a95031] sm:text-2xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#59665e]">
                    {article.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#31584d]">
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Discover more
                    </span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="px-6 pb-20 lg:px-10 lg:pb-24">
    <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#e8eee5] px-6 py-16 sm:px-12 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a95031]">
            Get in touch
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            We&apos;re here to help.
          </h2>
          <p className="mt-6 max-w-md leading-7 text-[#59665e]">
            Have a question about MediCare or our healthcare concept?
            We&apos;d love to hear from you.
          </p>
        </div>
        <div className="rounded-3xl bg-[#faf9f6] p-5 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-[#e5e5dc] px-6 py-8 lg:px-10">
    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <Link href="/" className="text-xl font-bold">
        MediCare<span className="text-[#a95031]">.</span>
      </Link>

      <div className="flex flex-wrap gap-6 text-sm text-[#59665e]">
        <Link href="#treatments" className="hover:text-[#174e43]">
          Treatments
        </Link>
        <Link href="#how-it-works" className="hover:text-[#174e43]">
          How it works
        </Link>
        <Link href="/doctors" className="hover:text-[#174e43]">
          Doctors
        </Link>
        <Link href="#contact" className="hover:text-[#174e43]">
          Contact
        </Link>
      </div>

      <p className="text-xs text-[#59665e]">
        © 2026 MediCare · Portfolio Demo
      </p>
    </div>
  </footer>
</main>
);
}