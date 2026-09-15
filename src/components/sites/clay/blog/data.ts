import { BlogPost, BlogCategory } from "./types";

export const blogCategories: { label: BlogCategory; icon: string; description: string }[] = [
  {
    label: "Clay Announcements",
    icon: "📢",
    description: "Product updates, feature launches, and company milestones from Clay."
  },
  {
    label: "Case Studies",
    icon: "📰",
    description: "Real stories and verified revenue results from leading GTM teams."
  },
  {
    label: "Thought Leadership",
    icon: "💡",
    description: "Deep dives on GTM engineering, AI agent architectures, and market analysis."
  },
  {
    label: "Outbound Plays",
    icon: "📦",
    description: "Tactical guides, table templates, and step-by-step pipeline plays."
  }
];

export const blogPosts: BlogPost[] = [
  {
    "id": "blog-1",
    "slug": "build-custom-gtm-tooling-on-clay",
    "title": "Build custom GTM tooling on Clay",
    "excerpt": "Build on Clay from any coding agent. Write custom tools, orchestrate revenue data across tools in real time, and scale workflows automatically.",
    "category": "Clay Announcements",
    "date": "Sep 15, 2026",
    "readTime": "6 min read",
    "authors": [
      {
        "name": "Mary Katherine Hanley",
        "role": "Product Marketing",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      },
      {
        "name": "Matthew Quan",
        "role": "Engineering Lead",
        "avatar": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/69b8459022264d37d85eed75_sales%20demo.avif"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": true,
    "tableOfContents": [
      {
        "id": "whats-new",
        "title": "What's new"
      },
      {
        "id": "build-custom-rep-tools",
        "title": "Build custom rep tools on Clay's infrastructure"
      },
      {
        "id": "automated-monitoring",
        "title": "Automated monitoring and self-healing systems"
      },
      {
        "id": "see-whats-running",
        "title": "See what's running, not just what shipped"
      },
      {
        "id": "governance-overhead",
        "title": "Governance without the overhead"
      },
      {
        "id": "get-started",
        "title": "Get started"
      }
    ],
    "contentSections": [
      {
        "id": "whats-new",
        "heading": "What's new",
        "body": "Modern GTM teams spend too much time wiring brittle integrations and writing bespoke glue scripts. Today, we're releasing the Clay CLI & Developer Toolkit, giving developers and GTM engineers direct access to Clay's data engine, table execution runtime, and webhook orchestration layer.",
        "codeSnippet": "// Install Clay CLI or configure agent plugin\nnpx @clay/cli init --project my-gtm-play\n\n// Trigger automated enrichment on new signup webhook\nconst table = await clay.tables.get('tbl_enterprise_inbound');\nawait table.addRow({\n  email: 'prospect@acme.com',\n  enrichmentPillars: ['firmographics', 'technographics', 'waterfall_phone']\n});"
      },
      {
        "id": "build-custom-rep-tools",
        "heading": "Build custom rep tools on Clay's infrastructure",
        "body": "Instead of building a separate microservice to fetch data from LinkedIn, Apollo, Clearbit, and ZoomInfo, you can expose Clay table views as functions. Reps trigger them from Slack, Salesforce, or your custom internal portal, with all waterfalls and credit optimizations handled transparently.",
        "callout": "GTM engineers at OpenAI and Anthropic build internal Slack bots backed by Clay tables to automate 100% of pre-call research in under 30 seconds."
      },
      {
        "id": "automated-monitoring",
        "heading": "Automated monitoring and self-healing systems",
        "body": "Clay tables now support scheduled cron runs, trigger webhooks, and retry policies. When third-party APIs fail or rate limit, Clay automatically falls back to secondary vendors in your waterfall pipeline without dropping a single lead."
      },
      {
        "id": "see-whats-running",
        "heading": "See what's running, not just what shipped",
        "body": "With real-time run logs, audit trails, and execution telemetry, you can see every API request, cost per row, and delivery status across your entire sales and marketing stack."
      },
      {
        "id": "governance-overhead",
        "heading": "Governance without the overhead",
        "body": "Enterprise permissioning, RBAC, credit allocations per workspace, and single sign-on (SSO) ensure that large teams can scale GTM engineering without compromising data privacy or API budget caps."
      },
      {
        "id": "get-started",
        "heading": "Get started",
        "body": "The new Clay developer tooling is live for all Pro and Enterprise workspaces today. Check out our documentation and GitHub examples to deploy your first custom GTM integration."
      }
    ]
  },
  {
    "id": "blog-2",
    "slug": "series-d",
    "title": "Clay raises $115M to be the AI growth engine for every company",
    "excerpt": "Clay has raised $115M in Series D funding at a $7.1B valuation, following 4x revenue growth in 2025. More than 17k customers, including 80% of the Forbes AI50, use Clay as their infrastructure for growth.",
    "category": "Clay Announcements",
    "date": "Sep 9, 2026",
    "readTime": "4 min read",
    "authors": [
      {
        "name": "Kareem Amin",
        "role": "Co-Founder & CEO",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa83101c8a2a044b628f10b_Clay_Startups_9%3A29%3A26_thumnb.png.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa83101c8a2a044b628f10b_Clay_Startups_9%3A29%3A26_thumnb.png.png",
    "isFeatured": true,
    "tableOfContents": [
      {
        "id": "the-next-chapter",
        "title": "The Next Chapter of GTM Engineering"
      },
      {
        "id": "growth-at-scale",
        "title": "Growth at Scale: 17k+ Customers"
      },
      {
        "id": "what-were-building",
        "title": "What We're Building Next"
      }
    ],
    "contentSections": [
      {
        "id": "the-next-chapter",
        "heading": "The Next Chapter of GTM Engineering",
        "body": "We founded Clay with a simple premise: Go-to-Market is the largest un-engineered surface in business. Over the past four years, we have seen an entirely new profession emerge — the GTM Engineer — who uses data orchestration, agentic AI, and programmatic execution to build revenue engines that compound over time."
      },
      {
        "id": "growth-at-scale",
        "heading": "Growth at Scale: 17k+ Customers",
        "body": "Today, companies like OpenAI, Anthropic, Ramp, Stripe, Canva, ElevenLabs, and Siemens rely on Clay to power their outbound pipeline, automated inbound qualification, and dynamic ad audience synchronization.",
        "callout": "Over 80% of the Forbes AI 50 now run their core go-to-market motions on Clay's orchestration layer."
      },
      {
        "id": "what-were-building",
        "heading": "What We're Building Next",
        "body": "This new round of capital will accelerate our investments in agentic workflow orchestration, developer primitives, and enterprise infrastructure to support billions of records."
      }
    ]
  },
  {
    "id": "blog-3",
    "slug": "cold-outbound-enterprise-accounts",
    "title": "How Clay Runs Cold Outbound to Enterprise Accounts",
    "excerpt": "Clay GTM engineer Sabrina Glaser cut 85 minutes of account research down to five with four agents, and now the entire sales team runs her play.",
    "category": "Outbound Plays",
    "date": "Sep 10, 2026",
    "readTime": "7 min read",
    "authors": [
      {
        "name": "Sabrina Glaser",
        "role": "GTM Engineer",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      },
      {
        "name": "Bruno Estrella",
        "role": "Head of Marketing",
        "avatar": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/69b8459022264d37d85eed75_sales%20demo.avif"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa2d197037ff21bd87da083_top1%25_4_maven_thumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa2d197037ff21bd87da083_top1%25_4_maven_thumb.png",
    "isFeatured": true,
    "tableOfContents": [
      {
        "id": "the-manual-research-bottleneck",
        "title": "The manual research bottleneck"
      },
      {
        "id": "the-four-agent-architecture",
        "title": "The four-agent research architecture"
      },
      {
        "id": "results-and-metrics",
        "title": "Results: 3.4x reply rates"
      }
    ],
    "contentSections": [
      {
        "id": "the-manual-research-bottleneck",
        "heading": "The manual research bottleneck",
        "body": "Before Clay, researching a Fortune 500 account required an SDR or AE to scour 10-K filings, executive podcast interviews, hiring boards, and tech stack detection tools. It took 85 minutes per account on average."
      },
      {
        "id": "the-four-agent-architecture",
        "heading": "The four-agent research architecture",
        "body": "We built four specialized Claygents:\n1. 10-K Fiscal Priority Agent: extracts top 3 board-level initiatives.\n2. Hiring Velocity Agent: scans job posts for mentions of specific CRM and data tools.\n3. Executive Quote Agent: finds recent podcast snippets from the VP of Sales.\n4. Value Proposition Tailorer: synthesizes findings into a 2-paragraph personalized brief.",
        "codeSnippet": "// Claygent prompt structure\n{\n  \"role\": \"system\",\n  \"prompt\": \"Find the top revenue bottlenecks mentioned in {{company.name}}'s latest Q2 earnings call transcript.\"\n}"
      },
      {
        "id": "results-and-metrics",
        "heading": "Results: 3.4x reply rates",
        "body": "By replacing generic templates with hyper-specific account intelligence, our enterprise SDR team increased meeting conversion rates by 340% while freeing up 20+ hours per rep each week."
      }
    ]
  },
  {
    "id": "blog-4",
    "slug": "top-1-clay-osman-sheikhnureldin",
    "title": "Top 1%: Inside GTM Engineering at the GTM Company",
    "excerpt": "Osman Sheikhnureldin, Clay’s Head of GTM Engineering, on compound problems, hacky MVPs, and building systems that improve as they run.",
    "category": "Thought Leadership",
    "date": "Sep 5, 2026",
    "readTime": "8 min read",
    "authors": [
      {
        "name": "Osman Sheikhnureldin",
        "role": "Head of GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "isFeatured": true,
    "tableOfContents": [
      {
        "id": "mindset-of-a-gtm-engineer",
        "title": "The Mindset of a GTM Engineer"
      },
      {
        "id": "compounding-revenue-systems",
        "title": "Compounding Revenue Systems"
      }
    ],
    "contentSections": [
      {
        "id": "mindset-of-a-gtm-engineer",
        "heading": "The Mindset of a GTM Engineer",
        "body": "A GTM Engineer does not simply write scripts or automate emails; they treat the go-to-market function as a distributed software architecture. Every prospect touchpoint is an event, every data source is an API, and every outbound cadence is a state machine."
      },
      {
        "id": "compounding-revenue-systems",
        "heading": "Compounding Revenue Systems",
        "body": "The goal is to build loops where data generated today automatically enriches and improves campaigns tomorrow."
      }
    ]
  },
  {
    "id": "blog-5",
    "slug": "sendoso-case-study",
    "title": "How Sendoso Scaled Outbound Pipeline 2.5x with Clay & AI Research",
    "excerpt": "Sendoso transformed their direct mail and SDR prospecting motion by combining buyer intent signals with automated gifting workflows in Clay.",
    "category": "Case Studies",
    "date": "Aug 28, 2026",
    "readTime": "5 min read",
    "authors": [
      {
        "name": "Clay Editorial Team",
        "role": "Case Studies Lead"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa04326d1c7aaecf91b6f69_ClaudeSMBthumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa04326d1c7aaecf91b6f69_ClaudeSMBthumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "challenge",
        "title": "The Challenge"
      },
      {
        "id": "solution",
        "title": "The Solution"
      },
      {
        "id": "impact",
        "title": "Business Impact"
      }
    ],
    "contentSections": [
      {
        "id": "challenge",
        "heading": "The Challenge",
        "body": "Sendoso needed a way to trigger timely corporate gifting campaigns right when high-value accounts exhibited buying signals like new VP hires or funding announcements."
      },
      {
        "id": "solution",
        "heading": "The Solution",
        "body": "Using Clay's signal tracking and waterfall enrichment, Sendoso created automated workflows that identify verified executive addresses and route gift approval requests to account owners."
      },
      {
        "id": "impact",
        "heading": "Business Impact",
        "body": "The new automated pipeline delivered a 250% increase in outbound pipeline generated from target tier-1 accounts."
      }
    ]
  },
  {
    "id": "blog-6",
    "slug": "clay-email-sequencer",
    "title": "Run more timely and targeted cold outbound campaigns with the Clay Sequencer",
    "excerpt": "Clay Sequencer brings lead sourcing, enrichment, and sequencing into one tool, so every email sends on current data. Now generally available in Clay.",
    "category": "Outbound Plays",
    "date": "Aug 24, 2026",
    "readTime": "8 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Clay Sequencer brings lead sourcing, enrichment, and sequencing into one tool, so every email sends on current data. Now generally available in Clay.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Run more timely and targeted cold outbound campaigns with the Clay Sequencer\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-7",
    "slug": "paid-ads-playbooks",
    "title": "How we turned a few thousand ad dollars into $1.3 million in pipeline",
    "excerpt": "Inside the workflow our growth team uses to turn Clay audience data into synced ad campaigns across Meta, LinkedIn, Google, and more.",
    "category": "Outbound Plays",
    "date": "Aug 23, 2026",
    "readTime": "4 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Inside the workflow our growth team uses to turn Clay audience data into synced ad campaigns across Meta, LinkedIn, Google, and more.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"How we turned a few thousand ad dollars into $1.3 million in pipeline\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-8",
    "slug": "agent-use-cases-gtm",
    "title": "Practical ways GTM teams can use agents",
    "excerpt": "Our growth team at Clay shares six agent use cases from our own workspace, including deal postmortems, account health scores, and personalized research for tier-one ABM campaigns.",
    "category": "Clay Announcements",
    "date": "Aug 22, 2026",
    "readTime": "5 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Our growth team at Clay shares six agent use cases from our own workspace, including deal postmortems, account health scores, and personalized research for tier-one ABM campaigns.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Practical ways GTM teams can use agents\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-9",
    "slug": "how-we-run-bug-triage",
    "title": "How we run bug triage without a second of engineering time",
    "excerpt": "The details behind Clay’s 100% autonomous bug triage process that runs in 15 minutes and closes 15% of bugs",
    "category": "Clay Announcements",
    "date": "Aug 21, 2026",
    "readTime": "6 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "The details behind Clay’s 100% autonomous bug triage process that runs in 15 minutes and closes 15% of bugs\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"How we run bug triage without a second of engineering time\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-10",
    "slug": "account-agents-workflows",
    "title": "Put an account expert inside every GTM play with Account Agents in Workflows",
    "excerpt": "Use Account Agents in workflows to run GTM plays on account research",
    "category": "Outbound Plays",
    "date": "Aug 20, 2026",
    "readTime": "7 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Use Account Agents in workflows to run GTM plays on account research\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Put an account expert inside every GTM play with Account Agents in Workflows\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-11",
    "slug": "top-1-brex-michael-tai",
    "title": "Top 1%: How Brex Scaled Its Outbound Engine and Made Operations More Efficient",
    "excerpt": "Five lessons from Michael Tai, Senior Growth PM at Brex, on relevance over personalization, forward-deployed growth engineers, and where go-to-market heads next.",
    "category": "Thought Leadership",
    "date": "Aug 19, 2026",
    "readTime": "8 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Five lessons from Michael Tai, Senior Growth PM at Brex, on relevance over personalization, forward-deployed growth engineers, and where go-to-market heads next.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Top 1%: How Brex Scaled Its Outbound Engine and Made Operations More Efficient\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-12",
    "slug": "ai-writing-policy",
    "title": "Why Clay Has an AI Writing Policy",
    "excerpt": "The policy that started on our engineering team, spread across the company, and went viral when our co-founder shared it.",
    "category": "Thought Leadership",
    "date": "Aug 18, 2026",
    "readTime": "4 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "The policy that started on our engineering team, spread across the company, and went viral when our co-founder shared it.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Why Clay Has an AI Writing Policy\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-13",
    "slug": "the-story-of-clay-workflows",
    "title": "Inside Clay Workflows: The Story Behind Our New Building Primitive",
    "excerpt": "Why we moved orchestration out of tables, and how to make the most of Workflows to power your GTM system.",
    "category": "Outbound Plays",
    "date": "Aug 17, 2026",
    "readTime": "5 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Why we moved orchestration out of tables, and how to make the most of Workflows to power your GTM system.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Inside Clay Workflows: The Story Behind Our New Building Primitive\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-14",
    "slug": "how-clay-uses-clay-automated-growth-plays",
    "title": "The Automated Growth Plays Behind Clay’s Self-Serve and Enterprise Motions",
    "excerpt": "Inside the always-on, automated plays Clay’s growth team uses to convert trials, rescue fading accounts, and open doors into top-tier accounts",
    "category": "Clay Announcements",
    "date": "Aug 16, 2026",
    "readTime": "6 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Inside the always-on, automated plays Clay’s growth team uses to convert trials, rescue fading accounts, and open doors into top-tier accounts\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"The Automated Growth Plays Behind Clay’s Self-Serve and Enterprise Motions\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-15",
    "slug": "introducing-workflows",
    "title": "Run your GTM workflows where your data lives",
    "excerpt": "Orchestrate any GTM play in Clay Workflows",
    "category": "Outbound Plays",
    "date": "Aug 15, 2026",
    "readTime": "7 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Orchestrate any GTM play in Clay Workflows\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Run your GTM workflows where your data lives\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-16",
    "slug": "ads",
    "title": "Make your ad spend efficient with targeted audiences and higher match rates",
    "excerpt": "Clay Ads builds unlimited ad audiences, updates them dynamically as your data changes, and boosts match rates by enriching across multiple providers.",
    "category": "Outbound Plays",
    "date": "Aug 14, 2026",
    "readTime": "8 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Clay Ads builds unlimited ad audiences, updates them dynamically as your data changes, and boosts match rates by enriching across multiple providers.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Make your ad spend efficient with targeted audiences and higher match rates\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-17",
    "slug": "how-first-party-signals-become-your-gtm-moat",
    "title": "How First-Party Signals Become Your GTM Moat",
    "excerpt": "Verkada&#x27;s Cody Leovic explains why first-party data — CRM notes, replies, call transcripts — builds a GTM edge that rented signals can&#x27;t match.",
    "category": "Outbound Plays",
    "date": "Aug 13, 2026",
    "readTime": "4 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Verkada&#x27;s Cody Leovic explains why first-party data — CRM notes, replies, call transcripts — builds a GTM edge that rented signals can&#x27;t match.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"How First-Party Signals Become Your GTM Moat\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-18",
    "slug": "tam-sourcing-updates",
    "title": "Continuously find every account in your TAM, at scale",
    "excerpt": "Combine company, people, and job data in one natural language search. Track which accounts convert to pipeline. Find more prospects like your best customers with Lookalikes.",
    "category": "Clay Announcements",
    "date": "Aug 12, 2026",
    "readTime": "5 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Combine company, people, and job data in one natural language search. Track which accounts convert to pipeline. Find more prospects like your best customers with Lookalikes.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Continuously find every account in your TAM, at scale\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-19",
    "slug": "build-on-clay-clays-product-roadmap-with-ceo-kareem-amin",
    "title": "Build on Clay: Clay’s Product Roadmap with CEO Kareem Amin",
    "excerpt": "Clay CEO Kareem Amin breaks down the shift to AI-driven GTM: data, infrastructure, and self-improving revenue engines. See what&#x27;s shipping this summer.",
    "category": "Clay Announcements",
    "date": "Aug 11, 2026",
    "readTime": "6 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Clay CEO Kareem Amin breaks down the shift to AI-driven GTM: data, infrastructure, and self-improving revenue engines. See what&#x27;s shipping this summer.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Build on Clay: Clay’s Product Roadmap with CEO Kareem Amin\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-20",
    "slug": "account-research-agents",
    "title": "Account Research Agents for always-on intelligence in Clay",
    "excerpt": "Use agents for up-to-date account inteliigence to run expansion or re-engagement plays",
    "category": "Clay Announcements",
    "date": "Aug 10, 2026",
    "readTime": "7 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Use agents for up-to-date account inteliigence to run expansion or re-engagement plays\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Account Research Agents for always-on intelligence in Clay\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-21",
    "slug": "open-weight-models-are-now-in-claygent",
    "title": "Open-weight models are now available in Claygent",
    "excerpt": "Use cost-effective open-weight models in Claygent for long-running tasks",
    "category": "Clay Announcements",
    "date": "Aug 9, 2026",
    "readTime": "8 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Use cost-effective open-weight models in Claygent for long-running tasks\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Open-weight models are now available in Claygent\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-22",
    "slug": "mcp-for-reps",
    "title": "Prospect more efficiently with MCP for Reps in AI tools",
    "excerpt": "Reps call Ops-built functions and data from 200+ providers in one place using natural language",
    "category": "Clay Announcements",
    "date": "Aug 28, 2026",
    "readTime": "4 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Reps call Ops-built functions and data from 200+ providers in one place using natural language\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Prospect more efficiently with MCP for Reps in AI tools\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-23",
    "slug": "behind-the-scenes-of-clays-marketing-and-growth",
    "title": "Behind the Scenes of Clay’s Marketing and Growth",
    "excerpt": "Go behind the scenes of Clay’s $100M ARR growth with Bruno Estrella and Davide Grieco as they reveal the marketing and growth playbooks driving enterprise and self-serve success.",
    "category": "Clay Announcements",
    "date": "Aug 27, 2026",
    "readTime": "5 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Go behind the scenes of Clay’s $100M ARR growth with Bruno Estrella and Davide Grieco as they reveal the marketing and growth playbooks driving enterprise and self-serve success.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Behind the Scenes of Clay’s Marketing and Growth\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-24",
    "slug": "build-on-clay-with-agent-plugin",
    "title": "Build on Clay with API &amp; CLI",
    "excerpt": "Build on Clay from any coding agent, like Claude Code or Codex",
    "category": "Clay Announcements",
    "date": "Aug 26, 2026",
    "readTime": "6 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Build on Clay from any coding agent, like Claude Code or Codex\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Build on Clay with API &amp; CLI\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-25",
    "slug": "new-homepage-2026",
    "title": "Behind the scenes of Clay’s new homepage",
    "excerpt": "Now, Clay is the infrastructure GTM engineers build on. Here&#x27;s how we built our new homepage to tell that story.",
    "category": "Clay Announcements",
    "date": "Aug 25, 2026",
    "readTime": "7 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Now, Clay is the infrastructure GTM engineers build on. Here&#x27;s how we built our new homepage to tell that story.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Behind the scenes of Clay’s new homepage\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-26",
    "slug": "gtm-infrastructure",
    "title": "The four layers of winning GTM infrastructure",
    "excerpt": "Every winning GTM engineering system runs on four layers: data, orchestration, execution, and agents. Here&#x27;s how the best teams build and compound them.",
    "category": "Clay Announcements",
    "date": "Aug 24, 2026",
    "readTime": "8 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Every winning GTM engineering system runs on four layers: data, orchestration, execution, and agents. Here&#x27;s how the best teams build and compound them.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"The four layers of winning GTM infrastructure\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-27",
    "slug": "announcing-audiences",
    "title": "Run unlimited searches on Clay’s GTM data layer",
    "excerpt": "Clay users can now build campaigns at any scale, instead of being limited to working across 50,000 records at a time. Audiences lets you run unlimited people and company searches without row limits, import millions of records from your CRM and data warehouse, and enrich them with first and third party data.",
    "category": "Clay Announcements",
    "date": "Aug 23, 2026",
    "readTime": "4 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Clay users can now build campaigns at any scale, instead of being limited to working across 50,000 records at a time. Audiences lets you run unlimited people and company searches without row limits, import millions of records from your CRM and data warehouse, and enrich them with first and third party data.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Run unlimited searches on Clay’s GTM data layer\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-28",
    "slug": "how-clay-uses-clay-from-inside-claude-and-chatgpt",
    "title": "How Clay uses Clay from inside Claude and ChatGPT",
    "excerpt": "Clay reps run their highest-leverage plays from Claude or ChatGPT. Behind every prompt is a Clay Function. Here are four we use every week.",
    "category": "Clay Announcements",
    "date": "Aug 22, 2026",
    "readTime": "5 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Clay reps run their highest-leverage plays from Claude or ChatGPT. Behind every prompt is a Clay Function. Here are four we use every week.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"How Clay uses Clay from inside Claude and ChatGPT\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-29",
    "slug": "what-does-growth-actually-do-slg-edition",
    "title": "So…what does growth actually do? SLG edition",
    "excerpt": "Three growth leaders share the tactics, trade-offs, and organizational battles that come with doing growth at a sales-led company.",
    "category": "Clay Announcements",
    "date": "Aug 21, 2026",
    "readTime": "6 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Three growth leaders share the tactics, trade-offs, and organizational battles that come with doing growth at a sales-led company.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"So…what does growth actually do? SLG edition\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-30",
    "slug": "ai-sdr-team",
    "title": "What AI native SDR teams are doing right now",
    "excerpt": "We asked three leaders who are actively building and scaling SDR teams what&#x27;s actually working and how they’re using AI to build pipeline.",
    "category": "Clay Announcements",
    "date": "Aug 20, 2026",
    "readTime": "7 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "We asked three leaders who are actively building and scaling SDR teams what&#x27;s actually working and how they’re using AI to build pipeline.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"What AI native SDR teams are doing right now\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-31",
    "slug": "how-clay-uses-clay-for-closed-lost-deals",
    "title": "How Clay turns closed lost deals into pipeline, product signals, and buyer intelligence",
    "excerpt": "Learn how Clay&#x27;s GTM team uses Clay to mine CRM data and Gong transcripts for re-engagement plays, product insights, and voice of customer feedback.",
    "category": "Clay Announcements",
    "date": "Aug 19, 2026",
    "readTime": "8 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Learn how Clay&#x27;s GTM team uses Clay to mine CRM data and Gong transcripts for re-engagement plays, product insights, and voice of customer feedback.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"How Clay turns closed lost deals into pipeline, product signals, and buyer intelligence\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-32",
    "slug": "mcp-in-codex",
    "title": "Clay MCP is now available in Codex",
    "excerpt": "With Clay MCP, reps can self-serve data and ops-built workflows from Clay within Codex.",
    "category": "Clay Announcements",
    "date": "Aug 18, 2026",
    "readTime": "4 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "With Clay MCP, reps can self-serve data and ops-built workflows from Clay within Codex.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Clay MCP is now available in Codex\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-33",
    "slug": "how-clay-uses-clay-for-recruiting-top-talent",
    "title": "How Clay uses Clay for recruiting top talent",
    "excerpt": "See how Clay&#x27;s recruiting team finds, prioritizes, and reaches candidates using Clay.",
    "category": "Clay Announcements",
    "date": "Aug 17, 2026",
    "readTime": "5 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "See how Clay&#x27;s recruiting team finds, prioritizes, and reaches candidates using Clay.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"How Clay uses Clay for recruiting top talent\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-34",
    "slug": "claygent-builder",
    "title": "Claygent Builder: The easiest way to build, test, and deploy GTM Agents",
    "excerpt": "Build production-ready Claygents in natural language with Sculptor. Test on real data for free, track versions, and deploy once across every workflow. All inside Clay.",
    "category": "Clay Announcements",
    "date": "Aug 16, 2026",
    "readTime": "6 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Build production-ready Claygents in natural language with Sculptor. Test on real data for free, track versions, and deploy once across every workflow. All inside Clay.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Claygent Builder: The easiest way to build, test, and deploy GTM Agents\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-35",
    "slug": "how-clay-uses-clay-ads",
    "title": "How Clay Uses Clay Ads: From $250 to $25 CPL",
    "excerpt": "See how Clay uses its own Ads feature to cut LinkedIn CPL from $250 to $25 and unlock Meta with enriched CRM audiences. No manual uploads needed.",
    "category": "Outbound Plays",
    "date": "Aug 15, 2026",
    "readTime": "7 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "See how Clay uses its own Ads feature to cut LinkedIn CPL from $250 to $25 and unlock Meta with enriched CRM audiences. No manual uploads needed.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"How Clay Uses Clay Ads: From $250 to $25 CPL\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-36",
    "slug": "hg-insights-corporate-hierarchy",
    "title": "HG Insights Corporate Hierarchy: GTM Precision in Clay",
    "excerpt": "Use HG Insights corporate hierarchy data in Clay to clean CRMs, map parent-child accounts, and trigger expansion plays. See how it works.",
    "category": "Clay Announcements",
    "date": "Aug 14, 2026",
    "readTime": "8 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Use HG Insights corporate hierarchy data in Clay to clean CRMs, map parent-child accounts, and trigger expansion plays. See how it works.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"HG Insights Corporate Hierarchy: GTM Precision in Clay\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-37",
    "slug": "sales-gtm-engineering",
    "title": "Sales GTM Engineering: How Clay Built the Role From Scratch",
    "excerpt": "Learn what sales GTM engineering is, how it collapses SDR, AE, and SE roles into one, and how Clay built and hires for this high-leverage function. See how it works.",
    "category": "Clay Announcements",
    "date": "Aug 13, 2026",
    "readTime": "4 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Learn what sales GTM engineering is, how it collapses SDR, AE, and SE roles into one, and how Clay built and hires for this high-leverage function. See how it works.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"Sales GTM Engineering: How Clay Built the Role From Scratch\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-38",
    "slug": "how-to-automate-inbound-lead-outreach",
    "title": "How to Automate Inbound Lead Outreach: The Clay Playbook",
    "excerpt": "Learn how to automate inbound lead outreach with enrichment, scoring, and personalized sequences. See the exact Clay workflow that runs without manual work.",
    "category": "Clay Announcements",
    "date": "Aug 12, 2026",
    "readTime": "5 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Learn how to automate inbound lead outreach with enrichment, scoring, and personalized sequences. See the exact Clay workflow that runs without manual work.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"How to Automate Inbound Lead Outreach: The Clay Playbook\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-39",
    "slug": "demanddrive",
    "title": "demandDrive Joins Clay’s Partner Ecosystem as an Official Clay Studio Partner",
    "excerpt": "demandDrive joins Clay’s partner ecosystem to help B2B teams turn account intelligence into pipeline and revenue with GTM engineering and automation.",
    "category": "Clay Announcements",
    "date": "Aug 11, 2026",
    "readTime": "6 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "demandDrive joins Clay’s partner ecosystem to help B2B teams turn account intelligence into pipeline and revenue with GTM engineering and automation.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"demandDrive Joins Clay’s Partner Ecosystem as an Official Clay Studio Partner\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-40",
    "slug": "b2b-sales-prospecting-15-strategies-to-drive-more-conversions",
    "title": "B2B Sales Prospecting: 15 Strategies to Drive More Conversions",
    "excerpt": "Master B2B sales prospecting with 15 proven strategies covering ICP building, multi-channel outreach, and list hygiene. Build a pipeline that converts.",
    "category": "Clay Announcements",
    "date": "Aug 10, 2026",
    "readTime": "7 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Master B2B sales prospecting with 15 proven strategies covering ICP building, multi-channel outreach, and list hygiene. Build a pipeline that converts.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"B2B Sales Prospecting: 15 Strategies to Drive More Conversions\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  },
  {
    "id": "blog-41",
    "slug": "ai-sales-assistants",
    "title": "AI Sales Assistants: 11 Ways to Accelerate Your Outbound",
    "excerpt": "Discover 11 ways AI sales assistants automate lead research, enrichment, and email personalization. See how top B2B teams use them to accelerate outbound.",
    "category": "Clay Announcements",
    "date": "Aug 9, 2026",
    "readTime": "8 min read",
    "authors": [
      {
        "name": "Clay Team",
        "role": "GTM Engineering",
        "avatar": "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6aa1bbf14a796696fa0be9b3_talia.png"
      }
    ],
    "thumbnail": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa80ad72d0f2ae558f3fb13_Grok_thumbnail.png",
    "bannerImage": "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    "isFeatured": false,
    "tableOfContents": [
      {
        "id": "overview",
        "title": "Overview & Context"
      },
      {
        "id": "architecture",
        "title": "Workflow Architecture"
      },
      {
        "id": "key-takeaways",
        "title": "Key Takeaways"
      }
    ],
    "contentSections": [
      {
        "id": "overview",
        "heading": "Overview & Context",
        "body": "Discover 11 ways AI sales assistants automate lead research, enrichment, and email personalization. See how top B2B teams use them to accelerate outbound.\n\nIn modern sales and marketing organizations, speed to lead and data precision are the two biggest levers for pipeline generation. This article explores how to architect workflows that continuously self-enrich and trigger downstream actions automatically."
      },
      {
        "id": "architecture",
        "heading": "Workflow Architecture",
        "body": "By decoupling data extraction from campaign sequencing, GTM engineers can maintain a unified source of truth across Salesforce, HubSpot, Snowflake, and ad platforms.",
        "codeSnippet": "// Example automation workflow payload\nconst trigger = await clay.workflows.create({\n  name: \"AI Sales Assistants: 11 Ways to Accelerate Your Outbound\",\n  frequency: \"hourly\",\n  targetList: \"high_intent_accounts\"\n});"
      },
      {
        "id": "key-takeaways",
        "heading": "Key Takeaways",
        "body": "1. Centralize your data foundation before scaling outbound volume.\n2. Leverage agentic AI for deep account qualification, not just surface-level scraping.\n3. Continually measure conversion rates per data provider to optimize credit costs."
      }
    ]
  }
];
