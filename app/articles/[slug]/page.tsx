
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

type Article = {
  category: string;
  title: string;
  subtitle: string;
  image: string;
  readTime: string;
  sections: ArticleSection[];
};

const articles: Record<string, Article> = {
  wellness: {
    category: "WELLNESS",
    title: "Small steps towards a healthier everyday life",
    subtitle:
      "Simple habits can make a meaningful difference to how you feel every day.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=85",
    readTime: "5 min read",
    sections: [
      {
        heading: "Small changes can have a big impact",
        paragraphs: [
          "Living a healthier life does not mean changing everything at once. Often, the smallest adjustments to your daily routine can make a meaningful difference over time.",
          "Taking a short walk, drinking enough water or getting some fresh air can be simple ways to start building healthier habits.",
        ],
      },
      {
        heading: "Create a routine that works for you",
        paragraphs: [
          "Healthy routines should fit into your everyday life. Instead of setting unrealistic goals, focus on small steps that feel manageable and sustainable.",
          "Consistency is often more important than perfection. Give yourself time to develop new habits and remember that progress does not always happen in a straight line.",
        ],
      },
      {
        heading: "Make time for yourself",
        paragraphs: [
          "Taking care of your wellbeing also means making time to rest. A few quiet moments during the day can help you slow down and reconnect with yourself.",
          "Whether it is reading, spending time outside or simply taking a break, find activities that help you feel relaxed and refreshed.",
        ],
      },
    ],
  },

  health: {
    category: "HEALTH",
    title: "Understanding your body's signals",
    subtitle:
      "Paying attention to changes in your body is an important part of looking after your health.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=85",
    readTime: "4 min read",
    sections: [
      {
        heading: "Your body communicates with you",
        paragraphs: [
          "Our bodies constantly give us information about how we are feeling. Changes in energy, sleep, appetite or physical comfort can sometimes be signs that something needs attention.",
          "Learning to recognize these signals can help you understand your needs and make more informed decisions about your health.",
        ],
      },
      {
        heading: "Pay attention to changes",
        paragraphs: [
          "Not every change is a reason for concern. However, symptoms that persist, become more intense or affect your everyday life should not be ignored.",
          "Keeping track of how you feel and when symptoms occur can help you describe your experiences more clearly when speaking with a healthcare professional.",
        ],
      },
      {
        heading: "When to seek professional advice",
        paragraphs: [
          "If you are concerned about a symptom or notice a change that does not improve, consider contacting a qualified healthcare professional.",
          "Getting advice early can help you better understand what is happening and determine whether further assessment or treatment is needed.",
        ],
      },
    ],
  },

  lifestyle: {
    category: "LIFESTYLE",
    title: "Making time for your wellbeing",
    subtitle:
      "A balanced routine can help you create more space for your physical and mental health.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=85",
    readTime: "5 min read",
    sections: [
      {
        heading: "Wellbeing deserves a place in your day",
        paragraphs: [
          "Busy schedules can make it difficult to find time for yourself. Work, responsibilities and everyday tasks often take priority, leaving little space to relax and recharge.",
          "Making wellbeing part of your routine does not need to require hours of free time. Small moments throughout the day can be just as valuable.",
        ],
      },
      {
        heading: "Find your balance",
        paragraphs: [
          "A balanced lifestyle looks different for everyone. For some, it means staying active. For others, it means getting enough sleep, spending time with loved ones or learning to slow down.",
          "Try to notice which activities help you feel more balanced and make room for them whenever possible.",
        ],
      },
      {
        heading: "Give yourself permission to rest",
        paragraphs: [
          "Rest is an important part of taking care of yourself. You do not always have to be productive, and taking a break does not mean you are falling behind.",
          "Allowing yourself time to recharge can help you approach your everyday responsibilities with more energy and a clearer mind.",
        ],
      },
    ],
  },
};

// Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return {
      title: "Article Not Found | MediCare",
      description: "The requested MediCare article could not be found.",
    };
  }

  return {
    title: `${article.title} | MediCare`,
    description: article.subtitle,
    openGraph: {
      title: `${article.title} | MediCare`,
      description: article.subtitle,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#183d36]">
      {/* Header */}
      <header className="border-b border-[#eae9e2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#174e43] text-lg font-bold text-white">
              M
            </span>
            <span className="text-2xl font-bold tracking-tight">
              MediCare<span className="text-[#df805c">.</span>
            </span>
          </Link>

          <Link
            href="/#articles"
            className="text-sm font-medium text-[#63756d] transition hover:text-[#d97855]"
          >
            ← Back to articles
          </Link>
        </div>
      </header>

      {/* Article Hero */}
      <section className="px-6 pb-12 pt-14 lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97855]">
            {article.category}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#788279]">
            {article.subtitle}
          </p>

          <div className="mt-6 text-sm text-[#9aa198]">
            MediCare Editorial · {article.readTime}
          </div>

          <div
            className="mt-10 aspect-[16/9] overflow-hidden rounded-[2rem] bg-cover bg-center"
            style={{ backgroundImage: `url('${article.image}')` }}
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9aa198]">
              In this article
            </p>

            <nav className="mt-5 space-y-4">
              {article.sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="block text-sm leading-6 text-[#788279] transition hover:text-[#d97855]"
                >
                  {section.heading}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main text */}
          <article className="min-w-0">
            <div className="space-y-12">
              {article.sections.map((section, index) => (
                <section
                  key={index}
                  id={`section-${index}`}
                  className="scroll-mt-28"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-[#183d36] sm:text-3xl">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-base leading-8 text-[#68756d]"
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-14 rounded-2xl bg-[#f0f1e9] p-6">
              <p className="text-sm font-semibold text-[#31584d]">
                Disclaimer
              </p>
              <p className="mt-2 text-sm leading-7 text-[#788279]">
                This article is intended for general informational purposes
                only and does not replace professional medical advice,
                diagnosis or treatment.
              </p>
            </div>

            {/* Back */}
            <div className="mt-12 border-t border-[#e5e5d9] pt-8">
              <Link
                href="/#articles"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#31584d] transition hover:text-[#d97855]"
              >
                <span>←</span>
                <span>Back to all articles</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#eae9e2] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <Link href="/" className="text-lg font-bold">
            MediCare<span className="text-[#df805c">.</span>
          </Link>

          <p className="text-sm text-[#9aa198]">
            © 2026 MediCare. Portfolio concept.
          </p>
        </div>
      </footer>
    </main>
  );
}
