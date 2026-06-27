export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-black text-white mb-4 tracking-tight">ShriTech</h2>
          <p className="text-sm leading-relaxed mb-6">
            Empowering your digital footprint with next-generation hosting, domains, and web tools.
          </p>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} ShriTech. All rights reserved.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/domains" className="hover:text-white transition-colors">Domain Names</a></li>
            <li><a href="/hosting" className="hover:text-white transition-colors">Cloud Hosting</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Business Email</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SSL Certificates</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-white font-bold mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            <li><a href="#" className="hover:text-white transition-colors">support@shritech.com</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}