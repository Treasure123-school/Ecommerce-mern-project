import Logo from "@/components/layout/Header/Logo";
import { footerLinks, socialMedia } from "@/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-secondary-dark text-background">
      <div className="max-container grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16">
        <div>
          <div className="inline-flex rounded-lg bg-background px-2 [&_img]:h-12 [&_img]:w-12">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
            Good food, thoughtfully selected. Find everyday favorites and fresh inspiration for your table.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socialMedia.map((social) => (
              <a key={social.alt} href={social.link || "#contact-us"} aria-label={social.alt} className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10">
                <img src={social.src} alt="" className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading font-bold">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li><Link className="transition-colors hover:text-accent-light" to="/">Home</Link></li>
            <li><Link className="transition-colors hover:text-accent-light" to="/">Shop products</Link></li>
            <li><Link className="transition-colors hover:text-accent-light" to="/cart">Your cart</Link></li>
          </ul>
        </div>

        {footerLinks.map((item) => (
          <div key={item.title}>
            <h2 className="font-heading font-bold">{item.title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {item.links.map((linkItem) => (
                <li key={linkItem.link}>
                  <a className="break-words transition-colors hover:text-accent-light" href={linkItem.link}>{linkItem.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/15">
        <div className="max-container py-4 text-xs text-white/60">© {new Date().getFullYear()} Fresh Market. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer