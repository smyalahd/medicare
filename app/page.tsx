
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import ContactForm from "./ContactForm";

const services = [
  {
    number: "01",
    icon: "✚",
    title: "Online Consultations",
    description:
      "Connect with healthcare professionals through convenient digital consultations.",
    link: "#contact",
    action: "Learn more",
  },
  {
    number: "02",
    icon: "♡",
    title: "Personal Health",
    description:
      "Keep your health journey organized with accessible and connected services.",
    link: "#about",
    action: "Learn more",
  },
  {
    number: "03",
    icon: "⌕",
    title: "Find Specialists",
    description:
      "Discover healthcare professionals and explore the care you need.",
    link: "/doctors",
    action: "Find a Doctor",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbfa] text-[#153b3b]">

      {/* Navigation */}
      <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087f73] text-xl font-bold text-white">
            M
          </span>

          <span className="text-2xl font-bold tracking-tight">
            MediCare<span className="text-[#087f73]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 text-sm font-medium text-[#597371] md:flex">
          <Link href="#home" className="transition hover:text-[#087f73]">
            Home
          </Link>

          <Link href="/doctors" className="transition hover:text-[#087f73]">
            Doctors
          </Link>

          <Link href="#services" className="transition hover:text-[#087f73]">
            Services
          </Link>

          <Link href="#about" className="transition hover:text-[#087f73]">
            About
          </Link>

          <Link href="#contact" className="transition hover:text-[#087f73]">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileMenu />

        {/* Desktop CTA */}
        <Link
          href="/doctors"
          className="hidden rounded-full bg-[#087f73] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#06675e] md:inline-flex"
        >
          Find a Doctor <span className="ml-2">↗</span>
        </Link>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-12 lg:grid-cols-2 lg:px-10 lg:pb-32 lg:pt-20"
      >
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d9ebe6] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#087f73]">
            <span className="h-2 w-2 rounded-full bg-[#24ad91]" />
            The future of digital healthcare
          </div>

          <h1 className="max-w-2xl text-5xl font-bold leading-[1.12] tracking-tight text-[#153b3b] md:text-7xl">
            Better healthcare.
            <span className="block text-[#087f73]">
              Better connected.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-[#718581]">
            Your health deserves a simpler experience. Discover
            connected healthcare services designed around your
            needs and your everyday life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/doctors"
              className="rounded-full bg-[#087f73] px-8 py-4 font-semibold text-white shadow-lg shadow-[#087f73]/15 transition hover:-translate-y-1 hover:bg-[#06675e]"
            >
              Find a Doctor <span className="ml-2">→</span>
            </Link>

            <Link
              href="#about"
              className="rounded-full border border-[#d8e5e1] bg-white px-8 py-4 font-semibold text-[#315b56] transition hover:border-[#087f73]"
            >
              Discover MediCare
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-10 border-t border-[#e3ece8] pt-8">
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="mt-1 text-sm text-[#82938e]">
                Digital accessibility
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">1 place</p>
              <p className="mt-1 text-sm text-[#82938e]">
                Connected services
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">You</p>
              <p className="mt-1 text-sm text-[#82938e]">
                Always at the center
              </p>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#dcefe9] blur-3xl" />

          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[#e1eeeb] blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#dcece6] p-3 shadow-2xl shadow-[#244c42]/10">
            <div
              className="relative min-h-[440px] overflow-hidden rounded-[1.5rem] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent 45%, rgba(12,48,43,.65) 100%), url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85')",
              }}
            >
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#087f73] backdrop-blur">
                Healthcare, reimagined
              </div>

              <div className="absolute bottom-7 left-7 right-7 text-white">
                <p className="text-sm font-medium text-white/80">
                  A more connected experience
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Care that puts you first.
                </h2>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-5 rounded-2xl border border-[#e5eeea] bg-white p-5 shadow-xl sm:-left-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5f4ef] text-xl text-[#087f73]">
                ✓
              </div>

              <div>
                <p className="text-sm font-bold text-[#153b3b]">
                  Patient-centered
                </p>

                <p className="mt-1 text-xs text-[#82938e]">
                  Designed around your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#087f73]">
                What we offer
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Healthcare, made easier.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#82938e]">
              Explore a connected approach to healthcare that
              brings useful services and information together.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-[#e6efeb] bg-[#f8fbfa] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#b8ded2] hover:shadow-xl hover:shadow-[#153b3b]/5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e1f1eb] text-3xl text-[#087f73]">
                    {service.icon}
                  </span>

                  <span className="text-sm font-semibold text-[#b2c4bd]">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#82938e]">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#087f73] transition group-hover:gap-4"
                >
                  {service.action} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2rem] bg-[#e9f3ef] p-8 md:p-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#087f73]">
              About MediCare
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Technology with a human touch.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#647d75]">
              We believe healthcare should feel connected,
              accessible, and easy to navigate. MediCare is a
              digital healthcare platform concept built around
              a simple idea: technology should make the
              healthcare experience better for people.
            </p>

            <Link
              href="/doctors"
              className="mt-8 inline-flex items-center gap-3 font-bold text-[#087f73]"
            >
              Find our doctors <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#123d39] px-6 py-16 text-center text-white md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-[#8ed5c0]">
            Get in touch
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-bold md:text-5xl">
            We'd love to hear from you.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-[#c0d7d0]">
            Have a question or need more information?
            Send us a message and get in touch with MediCare.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e3ece8] bg-white px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link href="/" className="text-xl font-bold">
            MediCare<span className="text-[#087f73]">.</span>
          </Link>

          <p className="text-sm text-[#82938e]">
            © 2026 MediCare. Independent portfolio project.
          </p>

          <p className="text-xs text-[#a0afaa]">
            A digital healthcare concept.
          </p>
        </div>
      </footer>
    </main>
  );
}
