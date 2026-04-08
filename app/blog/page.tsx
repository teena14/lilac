import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "understanding-anxiety",
    category: "Anxiety",
    date: "March 12, 2025",
    title: "Understanding Anxiety: Why Your Nervous System Isn't Broken",
    excerpt:
      "Anxiety is one of the most common reasons people seek therapy—and one of the most misunderstood. Here's what's actually happening in your body and mind.",
    readTime: "5 min read",
    image: "/faq.jpeg",
  },
  {
    slug: "burnout-vs-stress",
    category: "Burnout",
    date: "February 24, 2025",
    title: "Burnout vs. Stress: How to Tell the Difference",
    excerpt:
      "Stress and burnout can feel similar on the surface—exhaustion, irritability, difficulty concentrating. But they have different roots and different paths forward.",
    readTime: "4 min read",
    image: "/fulfilling.jpeg",
  },
  {
    slug: "starting-therapy",
    category: "Therapy",
    date: "January 30, 2025",
    title: "What to Expect in Your First Therapy Session",
    excerpt:
      "Starting therapy can feel like a big step. Knowing what to expect—and what not to expect—can make it easier to walk through the door.",
    readTime: "6 min read",
    image: "/specialty-1.jpeg",
  },
  {
    slug: "somatic-awareness",
    category: "Trauma",
    date: "January 10, 2025",
    title: "Learning to Listen to Your Body: A Gentle Introduction to Somatic Awareness",
    excerpt:
      "Many of us are taught to push through physical discomfort. But the body often holds clues about what we're carrying emotionally.",
    readTime: "5 min read",
    image: "/not-alone.jpeg",
  },
  {
    slug: "perfectionism-and-anxiety",
    category: "Anxiety",
    date: "December 18, 2024",
    title: "The Hidden Link Between Perfectionism and Anxiety",
    excerpt:
      "High standards aren't the problem. But perfectionism—the fear of falling short—can quietly drive anxiety, procrastination, and a deep sense of not-enoughness.",
    readTime: "4 min read",
    image: "/specialty-2.jpeg",
  },
  {
    slug: "rest-is-not-lazy",
    category: "Burnout",
    date: "November 22, 2024",
    title: "Rest Is Not a Reward: Rethinking Recovery in a Culture of Doing",
    excerpt:
      "We've been taught to earn our rest. But chronic stress and burnout often have their roots in the belief that slowing down is something you have to deserve.",
    readTime: "5 min read",
    image: "/specialty-3.jpeg",
  },
];

export const metadata = {
  title: "Blog – Dr. Maya",
  description:
    "Thoughtful writing on anxiety, trauma, burnout, and the art of slowing down. Written by Dr. Maya, licensed psychologist in Santa Monica, CA.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      <Navbar />

      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-10 md:px-16 pt-12 pb-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[#8a7968] mb-4">
          From the Practice
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-medium leading-tight text-[#2f3a1f]">
          Writing
        </h1>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-10 md:px-16">
        <div className="border-t border-[#2f3a1f] opacity-20" />
      </div>

      {/* Post List */}
      <section className="max-w-6xl mx-auto px-10 md:px-16 pb-16">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="group flex items-start justify-between gap-6 py-7 border-b border-[#2f3a1f] border-opacity-20 cursor-pointer">

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] tracking-[0.18em] uppercase text-[#8a7968]">
                    {post.category}
                  </span>
                  <span className="text-[#2f3a1f] opacity-30 text-xs">·</span>
                  <span className="text-[11px] text-[#2f3a1f] opacity-50">
                    {post.date}
                  </span>
                </div>

                <h2 className="font-heading text-xl md:text-2xl font-medium leading-snug text-[#2f3a1f] mb-3 group-hover:opacity-60 transition-opacity duration-300">
                  {post.title}
                </h2>

                <p className="text-sm leading-relaxed text-[#2f3a1f] opacity-55 hidden sm:block">
                  {post.excerpt}
                </p>

                <span className="inline-block mt-5 text-xs tracking-widest uppercase text-[#2f3a1f] opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                  Read → {post.readTime}
                </span>
              </div>

              {/* Thumbnail */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

            </article>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
