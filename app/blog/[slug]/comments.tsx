import React from "react"

export default function BlogComments() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-2">Comments</h2>
      <script src="https://giscus.app/client.js"
        data-repo="DartonStaker/green-street-elite"
        data-repo-id="R_kgDOOloAgw"
        data-category="General"
        data-category-id="DIC_kwDOOloAg84Cp1_5"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="noborder_light"
        data-lang="en"
        crossOrigin="anonymous"
        async />
      <div className="giscus" />
    </section>
  )
} 