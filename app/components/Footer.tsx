export default function Footer() {
  return (
    <footer className="px-6 lg:px-16 py-16 text-sm">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h4 className="font-medium mb-4">Lilac Template</h4>
          <p>123 Example Road<br />Minneapolis, MN</p>
        </div>

        <div>
          <h4 className="font-medium mb-4">Hours</h4>
          <p>Monday – Friday<br />10am – 6pm</p>
        </div>

        <div>
          <h4 className="font-medium mb-4">Find</h4>
          <p>Home<br />Contact<br />Blog</p>
        </div>
      </div>

      <p className="text-center mt-16 text-xs opacity-60">
        © 2024 Your Business Name Here, LLC.
      </p>
    </footer>
  );
}
