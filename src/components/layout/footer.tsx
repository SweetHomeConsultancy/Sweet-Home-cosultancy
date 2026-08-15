import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-gray pt-16 pb-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white/10 p-1.5 rounded-sm">
              <Image 
                src="/logo.png" 
                alt="SWEET HOME Logo" 
                width={40} 
                height={40}
                className="w-10 h-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl tracking-widest text-white">
                SWEET HOME
              </span>
              <span className="text-[0.6rem] tracking-[0.2em] text-brand-gray/60 uppercase mt-1">
                Design &bull; Inspire &bull; Build
              </span>
            </div>
          </Link>
          <p className="text-brand-gray/80 text-sm mt-4 max-w-sm">
            Premium Architecture, Interior Design, Construction and Project Management in Kolkata.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link href="#" className="text-brand-gray/80 hover:text-brand-accent transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
            <Link href="#" className="text-brand-gray/80 hover:text-brand-accent transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </Link>
            <Link href="#" className="text-brand-gray/80 hover:text-brand-accent transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
            </Link>
            <Link href="#" className="text-brand-gray/80 hover:text-brand-accent transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-heading font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-brand-gray/80 text-sm">
            <li><Link href="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-brand-accent transition-colors">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-heading font-semibold text-lg mb-2">Services</h4>
          <ul className="flex flex-col gap-2 text-brand-gray/80 text-sm">
            <li><Link href="/services#architecture" className="hover:text-brand-accent transition-colors">Architectural Design</Link></li>
            <li><Link href="/services#interior" className="hover:text-brand-accent transition-colors">Interior Design</Link></li>
            <li><Link href="/services#construction" className="hover:text-brand-accent transition-colors">Construction</Link></li>
            <li><Link href="/services#management" className="hover:text-brand-accent transition-colors">Project Management</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-heading font-semibold text-lg mb-2">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-brand-gray/80 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
              <span>75, G. C. Road, Titagarh (Near Safdar Palace), Kolkata-700119, West Bengal</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-accent shrink-0" />
              <span>9007567100 / 9477809100</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-accent shrink-0" />
              <a href="mailto:alam.tanweer007@gmail.com" className="hover:text-brand-accent transition-colors">alam.tanweer007@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom pt-8 border-t border-brand-gray/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-gray/60">
        <p>&copy; {currentYear} SWEET HOME. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
