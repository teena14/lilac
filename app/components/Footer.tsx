export default function Footer() {
  return (
    <footer className="bg-[#f7f4ef] text-[#2f3a1f]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-24">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="space-y-4 max-w-sm">
            <h3 className="font-heading text-lg font-medium">Reach Out</h3>
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

          <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-medium">Hours</h3>
              <p className="text-base">
                Monday – Friday<br />
                10am – 6pm
              </p>
            </div>

            <div className="space-y-4 max-w-[260px]">
              <h3 className="font-heading text-lg font-medium">Before Reaching Out</h3>
              <p className="text-base leading-relaxed">
                I offer a free 20-minute phone consultation to see if we're a good fit. Share a little about what brings you here — no pressure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2f3a1f] bg-[#E5E6E1] px-6 md:px-16 py-12 text-center space-y-4 text-base">
        <p>
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </div>
    </footer>
  );
}
