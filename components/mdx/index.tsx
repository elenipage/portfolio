import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element -- MDX body images are arbitrary remote URLs, not next/image compatible
    <img {...props} alt={props.alt ?? ""} className="rounded-lg border border-border" />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-accent-rose pl-4 italic text-muted"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-surface-2 px-1.5 py-0.5 text-[0.9em]" {...props} />
  ),
};
