import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-10 md:py-12 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        
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
            <li><Link href="/domains" className="hover:text-white transition-colors">Domain Names</Link></li>
            <li><Link href="/hosting" className="hover:text-white transition-colors">Cloud Hosting</Link></li>
            <li><Link href="/email" className="hover:text-white transition-colors">Business Email</Link></li>
            <li><Link href="/seo" className="hover:text-white transition-colors">SEO Tools</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><span className="text-zinc-400">About Us</span></li>
            <li><span className="text-zinc-400">Careers</span></li>
            <li><span className="text-zinc-400">Blog</span></li>
            <li><span className="text-zinc-400">Contact</span></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-white font-bold mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li><span className="text-zinc-400">Help Center</span></li>
            <li><span className="text-zinc-400">System Status</span></li>
            <li><a href="mailto:support@shritech.com" className="hover:text-white transition-colors">support@shritech.com</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
