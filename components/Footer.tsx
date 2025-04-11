"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  
  // Don't show footer on video player page
  if (pathname === '/player') return null;

  return (
    <footer className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              Secure Video Player is developed by Ryan Shelby, focusing on privacy and security in video playback.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Developer</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Ryan Shelby</li>
              <li>
                <a
                  href="https://github.com/MdSagorMunshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Secure Video Player.<br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}