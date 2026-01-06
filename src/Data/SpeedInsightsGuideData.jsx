export const speedInsightsContent = {
  title: "Getting started with Speed Insights",
  introduction: "This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.",
  
  prerequisites: [
    {
      title: "A Vercel account",
      description: "If you don't have one, you can sign up for free."
    },
    {
      title: "A Vercel project",
      description: "If you don't have one, you can create a new project."
    },
    {
      title: "The Vercel CLI installed",
      description: "Install using your package manager of choice.",
      commands: {
        pnpm: "pnpm i vercel",
        yarn: "yarn i vercel",
        npm: "npm i vercel",
        bun: "bun i vercel"
      }
    }
  ],

  steps: [
    {
      id: 1,
      title: "Enable Speed Insights in Vercel",
      description: "On the Vercel dashboard, select your Project followed by the Speed Insights tab. Then, select Enable from the dialog.",
      note: "Enabling Speed Insights will add new routes (scoped at /_vercel/speed-insights/*) after your next deployment."
    },
    {
      id: 2,
      title: "Add @vercel/speed-insights to your project",
      description: "Using the package manager of your choice, add the @vercel/speed-insights package to your project.",
      frameworks: ['nextjs', 'nextjs-app', 'sveltekit', 'remix', 'create-react-app', 'nuxt', 'vue', 'other', 'astro'],
      commands: {
        pnpm: "pnpm i @vercel/speed-insights",
        yarn: "yarn i @vercel/speed-insights",
        npm: "npm i @vercel/speed-insights",
        bun: "bun i @vercel/speed-insights"
      },
      note: "For HTML implementation, there is no need to install the @vercel/speed-insights package."
    },
    {
      id: 3,
      title: "Add the SpeedInsights component to your app",
      description: "Add the component to your application based on your framework.",
      frameworks: {
        nextjs: {
          description: "The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with Next.js.",
          files: [
            {
              name: "pages/_app.tsx",
              language: "tsx",
              code: `import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`
            },
            {
              name: "pages/_app.jsx",
              language: "jsx",
              code: `import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`
            }
          ],
          legacy: {
            description: "For versions of Next.js older than 13.5, import from @vercel/speed-insights/react",
            files: [
              {
                name: "pages/example-component.tsx",
                language: "tsx",
                code: `import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouter } from "next/router";

export default function Layout() {
  const router = useRouter();

  return <SpeedInsights route={router.pathname} />;
}`
              }
            ]
          }
        },
        "nextjs-app": {
          description: "The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with Next.js.",
          files: [
            {
              name: "app/layout.tsx",
              language: "tsx",
              code: `import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`
            }
          ]
        },
        "create-react-app": {
          description: "The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with React.",
          files: [
            {
              name: "App.tsx",
              language: "tsx",
              code: `import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}`
            }
          ]
        },
        remix: {
          description: "The SpeedInsights component is a wrapper around the tracking script, offering a seamless integration with Remix.",
          files: [
            {
              name: "app/root.tsx",
              language: "tsx",
              code: `import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <SpeedInsights />
      </body>
    </html>
  );
}`
            }
          ]
        },
        sveltekit: {
          description: "Add the function to your root layout file.",
          files: [
            {
              name: "src/routes/+layout.ts",
              language: "ts",
              code: `import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`
            }
          ]
        },
        vue: {
          description: "The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with Vue.",
          files: [
            {
              name: "src/App.vue",
              language: "vue",
              code: `<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`
            }
          ]
        },
        nuxt: {
          description: "The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with Nuxt.",
          files: [
            {
              name: "layouts/default.vue",
              language: "vue",
              code: `<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`
            }
          ]
        },
        other: {
          description: "Import the injectSpeedInsights function from the package. This should only be called once in your app, and must run in the client.",
          files: [
            {
              name: "main.ts",
              language: "ts",
              code: `import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();`
            }
          ]
        },
        astro: {
          description: "Speed Insights is available for both static and SSR Astro apps.",
          files: [
            {
              name: "BaseHead.astro",
              language: "astro",
              code: `---
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<SpeedInsights />`
            }
          ]
        },
        html: {
          description: "Add the script tag to your site before the closing body tag.",
          files: [
            {
              name: "index.html",
              language: "html",
              code: `<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"><\/script>`
            }
          ]
        }
      }
    },
    {
      id: 4,
      title: "Deploy your app to Vercel",
      description: "You can deploy your app to Vercel's global CDN by running the following command from your terminal:",
      command: "vercel deploy",
      alternativeMethod: "Alternatively, you can connect your project's git repository, which will enable Vercel to deploy your latest pushes and merges to main.",
      note: "Once your app is deployed, it's ready to begin tracking performance metrics. If everything is set up correctly, you should be able to find the /_vercel/speed-insights/script.js script inside the body tag of your page."
    },
    {
      id: 5,
      title: "View your data in the dashboard",
      description: "Once your app is deployed, and users have visited your site, you can view the data in the dashboard.",
      steps: [
        "Go to your dashboard",
        "Select your project",
        "Click the Speed Insights tab",
        "After a few days of visitors, you'll be able to start exploring your metrics"
      ]
    }
  ],

  nextSteps: [
    {
      title: "Learn how to use the @vercel/speed-insights package",
      link: "/docs/speed-insights/package"
    },
    {
      title: "Learn about metrics",
      link: "/docs/speed-insights/metrics"
    },
    {
      title: "Read about privacy and compliance",
      link: "/docs/speed-insights/privacy-policy"
    },
    {
      title: "Explore pricing",
      link: "/docs/speed-insights/limits-and-pricing"
    },
    {
      title: "Troubleshooting",
      link: "/docs/speed-insights/troubleshooting"
    }
  ]
};
