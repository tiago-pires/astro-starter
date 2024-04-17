import { Icon } from "@iconify/react";
import site from "../data/site.ts";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {site.socialLinks.map((social) => (
        <a href="#" key={social.label}>
          <span className="sr-only">{social.label}</span>
          <Icon icon={`fa6-brands:${social.icon}`} className="size-6"></Icon>
        </a>
      ))}
    </div>
  );
}
