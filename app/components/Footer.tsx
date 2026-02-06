export default function Footer() {
  return (
    <footer className="bg-[#f7f4ef] text-[#2f3a1f]">
{/* TOP FOOTER */}
<div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
  <div className="flex flex-col lg:flex-row justify-between gap-16">

    {/* LEFT COLUMN */}
    <div className="space-y-4 max-w-sm">
      <h3 className="text-lg font-medium">Lilac Template</h3>
      <p className="text-sm">
        123 Example Road<br />
        Minneapolis, MN
      </p>
      <p className="text-sm underline underline-offset-4">
        email@example.com
      </p>
      <p className="text-sm underline underline-offset-4">
        (555) 555-5555
      </p>
    </div>

    {/* RIGHT GROUP (Hours + Find) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">

      {/* HOURS */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Hours</h3>
        <p className="text-sm">
          Monday – Friday<br />
          10am – 6pm
        </p>
      </div>

      {/* FIND */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Find</h3>
        <ul className="space-y-2 text-sm underline underline-offset-4">
          <li>Home</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>

    </div>

  </div>
</div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#2f3a1f] px-6 lg:px-16 py-12 text-center space-y-4 text-sm">
        <div className="flex flex-wrap justify-center gap-6 underline underline-offset-4">
          <span>Privacy &amp; Cookies Policy</span>
          <span>Good Faith Estimate</span>
          <span>Website Terms &amp; Conditions</span>
          <span>Disclaimer</span>
        </div>

        <p>
          Website Template Credits: <span className="underline underline-offset-4">Go Bloom Creative</span>
        </p>

        <p>
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </div>
    </footer>
  );
}
