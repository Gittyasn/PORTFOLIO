"use client";

import * as React from "react";
import dynamic from "next/dynamic";

interface MdxWrapperProps {
  slug: string;
}

export function MdxWrapper({ slug }: MdxWrapperProps) {
  // Dynamically import the MDX file within the client component boundary
  const Content = dynamic(() => import(`@/content/blog/${slug}.mdx`), {
    loading: () => (
      <div className="animate-pulse py-8 text-center text-muted-foreground text-sm">
        Loading article content...
      </div>
    ),
    ssr: false, // Disable SSR for this dynamic import to guarantee it compiles on client runtime
  });

  return <Content />;
}
