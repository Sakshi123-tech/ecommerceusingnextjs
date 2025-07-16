'use client';

import dynamic from "next/dynamic";
import React, { Suspense } from "react";


const HomeClient = dynamic(() => import("@/components/HomeClient"), {
  ssr: false,
  loading: () => <p className="text-center p-8">Loading...</p>,
});

export default function HomePage() {
  return (
    <Suspense fallback={<p className="text-center p-8">Loading page...</p>}>
      <HomeClient />
    </Suspense>
  );
}
