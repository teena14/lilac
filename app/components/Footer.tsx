export default function Footer() {
  return (
    <footer className="bg-[#f7f4ef] text-[#2f3a1f]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-24">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="space-y-4 max-w-sm">
            <h3 className="font-heading text-lg font-medium">Lilac Template</h3>
            <p className="text-base">
              123 Example Road<br />
              Minneapolis, MN
            </p>
            <p className="text-base underline underline-offset-4">
              email@example.com
            </p>
            <p className="text-base underline underline-offset-4">
              (555) 555-5555
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-medium">Hours</h3>
              <p className="text-base">
                Monday – Friday<br />
                10am – 6pm
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-lg font-medium">Find</h3>
              <ul className="space-y-2 text-base underline underline-offset-4">
                <li>Home</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2f3a1f] bg-[#E5E6E1] px-6 md:px-16 py-12 text-center space-y-4 text-base">
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
