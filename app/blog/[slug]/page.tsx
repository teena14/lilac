import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  {
    category: string;
    date: string;
    title: string;
    readTime: string;
    image: string;
    body: string[];
  }
> = {
  "understanding-anxiety": {
    category: "Anxiety",
    date: "March 12, 2025",
    title: "Understanding Anxiety: Why Your Nervous System Isn't Broken",
    readTime: "5 min read",
    image: "/faq.jpeg",
    body: [
      "Anxiety is one of the most common reasons people seek therapy—and one of the most misunderstood. Somewhere along the way, many of us picked up the idea that feeling anxious means something is wrong with us. That we are weak, or broken, or simply 'too much.'",
      "But here's what's actually happening: your nervous system is working exactly as it was designed to. The anxiety response—the tight chest, the racing thoughts, the sense of dread—is your body's threat-detection system doing its job. It evolved over thousands of years to keep you safe.",
      "The problem isn't that anxiety exists. The problem is that this system can become overly sensitive—firing in situations that aren't actually dangerous, or staying activated long after a stressor has passed.",
      "When that happens, everyday situations can start to feel like emergencies. A difficult email, a social gathering, a long to-do list—all of it can send your system into the same alert state as a genuine threat.",
      "Understanding this distinction matters, because it changes how we approach healing. You're not trying to eliminate anxiety. You're learning to gently recalibrate a system that has been working overtime.",
      "Therapy can help you recognize what your nervous system is responding to, understand the patterns that keep anxiety activated, and gradually build a sense of safety in your own body and mind. It's slow work sometimes—but it is possible, and it doesn't require you to be different than you are.",
    ],
  },
  "burnout-vs-stress": {
    category: "Burnout",
    date: "February 24, 2025",
    title: "Burnout vs. Stress: How to Tell the Difference (and Why It Matters)",
    readTime: "4 min read",
    image: "/fulfilling.jpeg",
    body: [
      "Stress and burnout can look similar on the surface: exhaustion, difficulty concentrating, irritability, the sense that everything feels like too much. But they have different roots—and different paths forward.",
      "Stress, broadly speaking, is a response to external pressure. There's too much to do, too little time, too many competing demands. Stress is uncomfortable, but it usually has a shape to it. It peaks and it recedes. When the stressor eases, the stress tends to ease with it.",
      "Burnout is something different. It's what happens when stress has been sustained for too long without adequate recovery. Over time, the resources you draw on—your energy, your sense of meaning, your ability to care—begin to deplete. You don't just feel tired. You feel empty.",
      "People experiencing burnout often describe a flattening of emotion: things that once mattered stop feeling meaningful. Work that used to feel purposeful becomes mechanical. Relationships that once felt nourishing begin to feel like obligations.",
      "This matters therapeutically because burnout doesn't respond the same way stress does. A vacation or a weekend off won't fix it. Burnout usually requires a longer rebuilding—one that addresses not just rest, but the underlying patterns that led there.",
      "If you're not sure which you're experiencing, therapy can be a useful place to explore that. Not every kind of exhaustion means the same thing—and knowing the difference can help you figure out what kind of support you actually need.",
    ],
  },
  "starting-therapy": {
    category: "Therapy",
    date: "January 30, 2025",
    title: "What to Expect in Your First Therapy Session",
    readTime: "6 min read",
    image: "/specialty-1.jpeg",
    body: [
      "Starting therapy can feel like a leap into the unknown. What will I be asked? Will I have to talk about things I'm not ready for? What if I don't know what to say?",
      "These are completely normal questions—and they're worth addressing before you walk through the door.",
      "In most first sessions, your therapist will spend time getting to know you. They'll ask about what brought you in, a bit about your background, and what you're hoping to get out of therapy. You don't need to have polished answers. You don't even need to be sure what you want. The first session is really about beginning—not arriving.",
      "You are also not obligated to share anything you're not ready to share. A good therapist will follow your lead. They're not there to extract information from you; they're there to help you feel safe enough to explore what you're carrying, at your own pace.",
      "It's also worth knowing that you might leave the first session without feeling dramatically better—and that's okay. The first session is about orientation, not resolution. Often the most meaningful shifts happen gradually, over time, as trust builds.",
      "One thing many people find helpful is to bring low expectations into that first conversation. Not low expectations of the process—but low expectations of yourself. You don't have to be articulate. You don't have to have it figured out. You just have to show up.",
      "That's enough to begin.",
    ],
  },
  "somatic-awareness": {
    category: "Trauma",
    date: "January 10, 2025",
    title: "Learning to Listen to Your Body: A Gentle Introduction to Somatic Awareness",
    readTime: "5 min read",
    image: "/not-alone.jpeg",
    body: [
      "Many of us are taught, from a very young age, to override physical signals. Push through the tiredness. Ignore the knot in your stomach. Get back to work.",
      "Over time, this disconnection from the body can become habitual—and for people who have experienced trauma or sustained stress, it often becomes a kind of armor. Staying in your head feels safer than staying in your body.",
      "Somatic awareness is, simply put, the practice of noticing what's happening in your body with curiosity rather than judgment. A tightness in your chest during a difficult conversation. A heaviness in your shoulders at the end of the week. The way your breath changes when you're asked to do something that frightens you.",
      "These sensations aren't random. They're often the body's way of communicating something the mind hasn't caught up to yet.",
      "Learning to tune in doesn't have to be dramatic or mystical. It can start very small—noticing, once a day, where you feel tension or ease in your body. Not trying to change it. Just noticing.",
      "In therapy, we sometimes work with the body as a source of information. Not as something to be fixed, but as something that has its own kind of wisdom—one that can become a useful guide in the healing process.",
    ],
  },
  "perfectionism-and-anxiety": {
    category: "Anxiety",
    date: "December 18, 2024",
    title: "The Hidden Link Between Perfectionism and Anxiety",
    readTime: "4 min read",
    image: "/specialty-2.jpeg",
    body: [
      "Perfectionism is often mistaken for conscientiousness. Having high standards, caring about your work, wanting to do things well—these are generally seen as admirable qualities.",
      "But perfectionism, as a psychological pattern, is something subtler and more painful. It's not about standards. It's about fear. Specifically, it's the fear that falling short of some ideal will result in rejection, failure, or the loss of someone's approval—including your own.",
      "This fear can drive anxiety in ways that aren't always obvious. Procrastination, for example, is often a perfectionism response: if you don't start, you can't fail. Overworking is another: if you can stay ahead of potential criticism by working hard enough, you'll be safe.",
      "The exhausting thing about perfectionism is that it keeps the goalposts moving. There's always something that could be better, something that fell short, something you should have done differently. It rarely lands in 'enough.'",
      "In therapy, we often look underneath the perfectionism: what is it protecting against? What story does it tell about what will happen if you get something wrong? Those questions, explored slowly and gently, can begin to loosen the grip.",
      "The goal isn't to stop caring. It's to let your efforts come from a steadier place—one that doesn't depend on being perfect to feel okay.",
    ],
  },
  "rest-is-not-lazy": {
    category: "Burnout",
    date: "November 22, 2024",
    title: "Rest Is Not a Reward: Rethinking Recovery in a Culture of Doing",
    readTime: "5 min read",
    image: "/specialty-3.jpeg",
    body: [
      "We live in a culture that treats rest as something you earn. You can relax once the work is done. You can take a break once you've exceeded expectations. You deserve to slow down—but only after you've proven it.",
      "For many high-achieving, conscientious people, this belief runs so deep it feels like fact. And it creates a quiet trap: because the work is never truly done, the rest never quite feels justified.",
      "This is one of the roots of burnout—not just overwork, but the belief system that makes overwork feel like the only option. If rest is a reward, and you haven't earned it, slowing down doesn't feel restorative. It feels dangerous.",
      "What chronic stress and burnout research makes clear is that rest isn't just nice to have. It's biologically necessary. The nervous system requires periods of genuine downregulation to function well. Without them, the body stays in a state of low-level activation that slowly erodes everything from sleep to immune function to emotional capacity.",
      "Rethinking rest—treating it not as a luxury but as a basic requirement—can be some of the most quietly radical work we do in therapy. It often involves looking at what it means to 'deserve' care, and where that story came from.",
      "You don't have to earn the right to rest. That was never actually the deal. It just might take some time to feel that way.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: `${post.title} – Dr. Maya`,
    description: post.body[0].slice(0, 155),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      {/* Article Header */}
      <section className="px-6 md:px-16 pt-16 pb-12 max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/blog"
            className="text-xs tracking-widest uppercase text-[#6B5B4F] hover:underline underline-offset-4"
          >
            ← Blog
          </Link>
          <span className="text-xs text-[#2f3a1f] opacity-40">·</span>
          <span className="text-xs tracking-widest uppercase text-[#6B5B4F]">
            {post.category}
          </span>
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-medium leading-snug mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-[#2f3a1f] opacity-60">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2f3a1f] mx-6 md:mx-16" />

      {/* Hero Image */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>


      {/* Article Body */}
      <section className="px-6 md:px-16 py-16 max-w-3xl mx-auto">
        <div className="space-y-6">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-[#2f3a1f]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author note */}
        <div className="mt-16 pt-10 border-t border-[#2f3a1f]">
          <p className="text-sm text-[#2f3a1f] opacity-60 leading-relaxed">
            Written by <span className="opacity-100 font-medium">Dr. Maya</span>, a licensed
            psychologist offering therapy for anxiety, trauma, and burnout in Santa Monica,
            California, and via telehealth across California.
          </p>
          <div className="mt-6">
            <Link href="/blog">
              <span className="text-sm tracking-wide border border-[#2f3a1f] px-6 py-2 hover:bg-[#2f3a1f] hover:text-white transition inline-block">
                ← Back to Blog
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#E9DEC8] py-20">
        <div className="max-w-2xl mx-auto px-6 md:px-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">
            Something here resonate?
          </h2>
          <p className="text-base leading-relaxed mb-8 text-[#2f3a1f] opacity-70">
            If you're curious about what therapy might look like for you, a free consultation
            is a low-pressure place to begin.
          </p>
          <div className="flex justify-center">
            <button className="border border-[#2f3a1f] px-8 py-3 text-base tracking-wide hover:bg-[#2f3a1f] hover:text-white transition">
              BOOK A FREE CONSULT →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
