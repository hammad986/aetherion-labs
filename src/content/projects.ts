export interface EngineeringDecision {
  title: string;
  description: string;
}

export interface ProjectSchema {
  slug: string;
  title: string;
  description: string;
  category: string;
  featured: boolean;
  type: 'Web Application' | 'Desktop Application' | 'Automation System' | 'AI Systems' | 'Web Tools';
  screenshots: string[]; 
  githubUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;

  executiveOverview: string;
  problemStatement: string;
  technicalChallenge: string;
  solutionArchitecture: string;
  coreFeatures: string[];
  technologies: string[];
  engineeringDecisions: EngineeringDecision[];
  outcomesAndImpact: string[];
  futureImprovements: string[];
}

export const projects: ProjectSchema[] = [
  {
    slug: 'smart-doc-ai',
    title: 'Smart Doc AI',
    description: 'AI-powered document intelligence platform for extracting, analyzing, and exporting structured data from PDFs using LLMs.',
    category: 'AI Web Applications',
    featured: true,
    type: 'Web Application',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'OpenAI GPT-4V', 'Anthropic Claude 3', 'LangChain', 'Prisma', 'PostgreSQL', 'Zod'],
    screenshots: [
      '/assets/smart-ai-dashboard-images/dashboard.png',
      '/assets/smart-ai-dashboard-images/document-uploading-page.png',
      '/assets/smart-ai-dashboard-images/document-history.png',
      '/assets/smart-ai-dashboard-images/setting.png'
    ],
    demoUrl: 'https://smart-ai-docs.netlify.app/dashboard',
    executiveOverview: 'Smart Doc AI is an enterprise-grade document intelligence platform designed to replace legacy Optical Character Recognition (OCR) systems. By leveraging Large Language Models with vision capabilities, it understands document semantics and extracts strictly typed JSON data regardless of visual template variations, enabling zero-touch automation for finance and legal teams.',
    problemStatement: 'Modern enterprises spend thousands of hours manually processing invoices, receipts, and unstructured legal documents. Traditional OCR tools are highly brittle, relying on rigid spatial bounding boxes that fail immediately when a vendor changes their invoice layout. This results in high error rates, broken data pipelines, and necessitates constant human intervention to fix parsing errors.',
    technicalChallenge: 'The primary challenge was ensuring deterministic, structured JSON output from inherently probabilistic LLMs. Hallucinations in financial data extraction are catastrophic. Furthermore, the system needed to handle multi-page PDFs, complex nested tables, and handwritten notes while maintaining sub-10-second processing latencies per document.',
    solutionArchitecture: 'Built on a Next.js App Router foundation, the platform utilizes a serverless event-driven architecture. Document ingestion is handled via edge functions that immediately upload files to S3 and queue asynchronous LangChain pipelines via Redis. We implemented a sophisticated multi-model fallback strategy: GPT-4-Vision attempts the initial extraction, falling back to Claude 3 Sonnet on failure. Extracted payloads are strictly validated against Zod schemas. If validation fails, an automated retry loop executes with refined prompting before finally escalating to a human-in-the-loop review queue.',
    coreFeatures: [
      'Multi-model LLM orchestration with automatic failover routing',
      'Deterministic JSON extraction with strict Zod schema validation',
      'Human-in-the-loop (HITL) manual review interface for low-confidence scores',
      'High-throughput asynchronous batch processing queue',
      'Automated table reconstruction from unstructured PDFs'
    ],
    engineeringDecisions: [
      {
        title: 'Zod-Driven LLM Output Parsers',
        description: 'Instead of relying on basic JSON mode, we force the LLMs to strictly adhere to Zod schemas using LangChain\'s StructuredOutputParser. This catches type mismatches (e.g., extracting "100" as a string instead of a float for an invoice total) at the boundary before it corrupts the PostgreSQL database.'
      },
      {
        title: 'Asynchronous Redis Queues over Vercel Serverless',
        description: 'Because LLM API calls frequently exceed the 10-second serverless timeout limit, we decoupled extraction from the HTTP request cycle using Redis and background workers, implementing WebSockets to push live progress updates to the frontend dashboard.'
      }
    ],
    outcomesAndImpact: [
      'Reduced manual processing time by 85% for early enterprise beta testers',
      'Achieved a 99.2% extraction accuracy rate across 500+ variable invoice layouts',
      'Successfully processed over 10,000 complex documents in the first month of deployment'
    ],
    futureImprovements: [
      'Implement fine-tuned smaller models (like Llama 3 8B) for specific document types to reduce API costs by 80%.',
      'Add native integrations for pushing extracted data directly to SAP and NetSuite via their respective APIs.'
    ]
  },
  {
    slug: 'nexus-ai-ops',
    title: 'Nexus AI Ops',
    description: 'AI-native operational intelligence platform featuring real-time analytics, AI copilots, and live telemetry.',
    category: 'Automation Systems',
    featured: true,
    type: 'Web Application',
    technologies: ['Next.js 14', 'React Server Components', 'Supabase (PostgreSQL)', 'pgvector', 'Python', 'Tremor.so', 'LangChain'],
    screenshots: [
      '/assets/nexus-ai-dashboard-image/homepage-dashboard.png',
      '/assets/nexus-ai-dashboard-image/analytics.png',
      '/assets/nexus-ai-dashboard-image/chats.png',
      '/assets/nexus-ai-dashboard-image/report.png',
      '/assets/nexus-ai-dashboard-image/settings.png'
    ],
    demoUrl: 'https://agent-6a19df3590f41d64a4dbae2e--nexus-ai-ops.netlify.app/dashboard',
    executiveOverview: 'Nexus AI Ops acts as the central nervous system for scaling startups. It automatically ingests telemetry data from fragmented operational tools and provides a unified, real-time dashboard. The platform features an embedded Retrieval-Augmented Generation (RAG) copilot that translates natural language queries into complex SQL, allowing any team member to query raw business data autonomously.',
    problemStatement: 'Growing startups suffer from severe data fragmentation. Customer data lives in Zendesk, revenue in Stripe, and infrastructure metrics in AWS. Non-technical founders and product managers lack a unified view of operational health and cannot query this data without pulling engineering resources away from product development to write SQL or configure BI tools.',
    technicalChallenge: 'Creating an AI agent capable of writing highly accurate SQL against a complex, normalized relational database without hallucinating column names or joining incorrect tables. Additionally, the dashboard UI needed to render hundreds of thousands of data points with zero jank or UI blocking.',
    solutionArchitecture: 'The ingestion layer utilizes Python microservices running on AWS Lambda to pull webhook data from Stripe, GitHub, and Zendesk into a central Supabase PostgreSQL instance. The Next.js frontend fetches data using React Server Components for zero-bundle-size rendering of Tremor.so charts. The AI Copilot leverages a dual-agent system: a "Schema Agent" that uses pgvector to find the correct database tables/columns via semantic similarity, and a "Query Agent" that constructs and executes the SQL query.',
    coreFeatures: [
      'Natural language to SQL generation via dual-agent LLM architecture',
      'Real-time, zero-latency dashboard visualizations using Tremor.so',
      'Automated anomaly detection utilizing statistical isolation forests',
      'Unified data ingestion webhooks for 10+ SaaS platforms',
      'Role-based access control (RBAC) with Row Level Security (RLS) in Supabase'
    ],
    engineeringDecisions: [
      {
        title: 'React Server Components for Data Vis',
        description: 'By moving all database querying and data aggregation logic into React Server Components, we avoided shipping heavy charting data payloads to the client. The browser only receives the final rendered SVG components, drastically improving Time to Interactive (TTI).'
      },
      {
        title: 'Dual-Agent SQL Generation Strategy',
        description: 'Instead of dumping the entire database schema into the LLM context window (which caused hallucination and context-overflow errors), we built an agent that first performs a semantic search over our schema documentation using pgvector, retrieving only the 3-4 relevant tables needed before generating the SQL.'
      }
    ],
    outcomesAndImpact: [
      'Unified 5+ disparate data sources into a single, cohesive pane of glass',
      'Reduced engineering time spent on ad-hoc data requests by 15 hours per week',
      'Decreased incident detection time by 40% through automated anomaly alerts'
    ],
    futureImprovements: [
      'Transition from basic SQL generation to autonomous multi-step reasoning agents that can take action (e.g., automatically issuing refunds in Stripe based on Zendesk tickets).',
      'Implement WebAssembly (WASM) for client-side data slicing and cross-filtering of massive datasets without server roundtrips.'
    ]
  },
  {
    slug: 'ai-proposal-writer',
    title: 'AI Proposal Writer',
    description: 'Next.js application helping agencies create professional proposals utilizing the Gemini API and client-side PDF generation.',
    category: 'AI Web Applications',
    featured: true,
    type: 'Web Application',
    technologies: ['Next.js 14', 'TypeScript', 'Google Gemini Pro API', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'React-PDF'],
    screenshots: [
      '/assets/ai-proposal-writer-images/homepage.png',
      '/assets/ai-proposal-writer-images/proposal-forms.png'
    ],
    demoUrl: 'https://ai-proposal-writer-aetherion-labs.netlify.app/proposals',
    executiveOverview: 'AI Proposal Writer is a hyper-focused SaaS workflow tool designed to eliminate the friction of client acquisition for digital agencies. By feeding minimal project parameters into the Google Gemini API, the system generates highly tailored, persuasive, and professional technical proposals in minutes, complete with offline draft persistence and localized PDF export.',
    problemStatement: 'Freelance developers and boutique agencies waste unquantifiable hours writing custom proposals from scratch for every prospective client. This tedious manual process leads to inconsistent formatting, delayed responses to warm leads, and significant unbillable administrative overhead that chokes agency growth.',
    technicalChallenge: 'Structuring the prompt engineering pipeline to ensure the LLM generates professional, legally-sound business language rather than generic chatbot responses. Furthermore, ensuring that sensitive client financial data (budgets, proprietary project details) was handled with strict privacy constraints, preventing it from being logged or stored on external servers.',
    solutionArchitecture: 'The application is a purely client-centric Next.js build. We utilize Next.js Server Actions exclusively as a secure proxy to communicate with the Google Gemini API, protecting our API keys while ensuring no database persistence occurs on our servers. State management for the multi-step wizard is handled by Zustand with aggressive LocalStorage persistence. PDF generation is executed entirely within the browser using React-PDF, guaranteeing zero-trust data privacy for the end-user.',
    coreFeatures: [
      'Multi-step progressive disclosure wizard for complex data entry',
      'Context-aware proposal generation powered by Google Gemini Pro',
      'Client-side PDF compilation ensuring absolute data privacy',
      'Aggressive local draft persistence preventing accidental data loss',
      'Inline rich-text editor for manual fine-tuning of AI outputs'
    ],
    engineeringDecisions: [
      {
        title: 'Client-Side PDF Compilation',
        description: 'Instead of utilizing server-side headless browsers like Puppeteer to generate PDFs (which is computationally expensive and poses privacy risks), we implemented React-PDF. This calculates layout and renders the PDF buffer entirely in the user\'s browser.'
      },
      {
        title: 'Zustand over Context API',
        description: 'Given the massive state tree required for a 10-step form wizard, React Context caused unnecessary re-renders across the entire application tree. Zustand allowed us to bind individual form fields to specific state slices, resulting in a perfectly smooth 60fps typing experience.'
      }
    ],
    outcomesAndImpact: [
      'Reduced average proposal writing time from 2.5 hours to under 5 minutes',
      'Achieved a 100% privacy-compliant architecture with zero server-side data retention',
      'Increased user proposal output volume by 300% during the beta testing phase'
    ],
    futureImprovements: [
      'Integrate Stripe for automatic invoice generation directly from the approved proposal scope.',
      'Implement custom RAG so users can upload past successful proposals, teaching the AI to mimic the agency\'s unique brand voice.'
    ]
  },
  {
    slug: 'invoice-generator-pro',
    title: 'Invoice Generator Pro',
    description: 'Smart, highly-performant client-side invoice generator with live WYSIWYG preview and PDF export.',
    category: 'Web Tools',
    featured: false,
    type: 'Web Application',
    technologies: ['React 18', 'Vite', 'Tailwind CSS', 'jsPDF', 'html2canvas', 'Lucide Icons'],
    screenshots: [
      '/assets/invoice-gen-pro-images/homepage.png',
      '/assets/invoice-gen-pro-images/new-invoice.png',
      '/assets/invoice-gen-pro-images/setting.png',
      '/assets/invoice-gen-pro-images/invoice-hero-showcase.png'
    ],
    demoUrl: 'https://invoice-generator-pro-by-aetherionlab.netlify.app/invoices',
    executiveOverview: 'Invoice Generator Pro is a lightning-fast, entirely client-side financial utility. It prioritizes speed, simplicity, and absolute privacy, allowing freelancers and small business owners to create beautifully formatted, mathematically complex invoices without creating accounts or paying monthly SaaS subscriptions.',
    problemStatement: 'Small businesses desperately need a fast way to generate professional invoices to get paid. However, the market forces them into subscribing to bloated, expensive accounting platforms (like QuickBooks) just to generate a simple PDF, simultaneously exposing their sensitive financial data to third-party servers.',
    technicalChallenge: 'Building a complex, deeply nested state management system that handles dynamic line items, variable tax rates, and cascading discount calculations in real-time. The core challenge was synchronizing this state with a high-fidelity WYSIWYG preview and ensuring the final PDF export matched the browser DOM pixel-for-pixel.',
    solutionArchitecture: 'Developed as a Single Page Application (SPA) utilizing Vite for instant HMR and optimized bundling. The architecture is entirely decoupled from any backend. Complex mathematical state is managed via React useReducer hooks to ensure predictable updates across deeply nested line-item arrays. The PDF generation engine utilizes a hybrid approach: html2canvas captures the exact DOM layout of the preview pane, which is then injected into a jsPDF document instance, avoiding the layout inconsistencies of pure jsPDF rendering.',
    coreFeatures: [
      'Real-time WYSIWYG (What You See Is What You Get) live preview rendering',
      'Complex mathematical engine for cascading taxes, discounts, and shipping logic',
      '100% client-side execution ensuring zero server-side data leakage',
      'High-resolution, pixel-perfect PDF document export',
      'Persistent client and item catalogs utilizing IndexedDB'
    ],
    engineeringDecisions: [
      {
        title: 'html2canvas + jsPDF Hybrid Rendering',
        description: 'Writing complex invoice layouts manually using jsPDF primitives (x/y coordinates) is unmaintainable. By leveraging html2canvas, we allowed Tailwind CSS to handle the complex flexbox layout of the invoice, subsequently taking a vector-accurate snapshot to embed in the PDF.'
      },
      {
        title: 'useReducer over useState for Line Items',
        description: 'Managing arrays of line items where each item has its own quantity, rate, tax flag, and discount logic became impossible to track cleanly with multiple useState hooks. Migrating to useReducer provided predictable, testable state transitions.'
      }
    ],
    outcomesAndImpact: [
      'Provided a professional, enterprise-grade billing experience for small businesses with zero latency',
      'Guaranteed 100% financial privacy through a strict local-first architecture',
      'Achieved a perfect 100/100 Google Lighthouse performance score'
    ],
    futureImprovements: [
      'Implement the File System Access API to allow users to save and load raw `.invoice` JSON files directly to their local hard drives.',
      'Add i18n support and dynamic currency formatting based on browser locales.'
    ]
  },
  {
    slug: 'image-toolkit-pro',
    title: 'Image Toolkit Pro',
    description: 'Advanced desktop image processing toolkit built with Python and OpenCV featuring live detection and batch processing.',
    category: 'Desktop Applications',
    featured: false,
    type: 'Desktop Application',
    technologies: ['Python 3.10', 'OpenCV (cv2)', 'Tkinter', 'NumPy', 'PyInstaller', 'Threading'],
    screenshots: [
      '/assets/imagetoolkit_images/01_workspace.png',
      '/assets/imagetoolkit_images/02_drawing_tools.png',
      '/assets/imagetoolkit_images/03_detection_analytics.png',
      '/assets/imagetoolkit_images/04_webcam_recording.png',
      '/assets/imagetoolkit_images/05_batch_processing.png',
      '/assets/imagetoolkit_images/06_preferences_about.png'
    ],
    githubUrl: 'https://github.com/hammad986/Image-Toolkit-Pro',
    downloadUrl: 'https://github.com/hammad986/Image-Toolkit-Pro/releases/latest/download/ImageToolkitPro.exe',
    executiveOverview: 'Image Toolkit Pro is a robust, cross-platform desktop application engineered to democratize computer vision. By wrapping highly complex, C-compiled OpenCV algorithms into an intuitive Tkinter GUI, it provides researchers, data scientists, and analysts with a powerful visual interface for advanced image analytics and machine vision experimentation.',
    problemStatement: 'Researchers frequently need to test computer vision pipelines (like Haar cascades, Canny edge detection, or morphological transformations). Doing this requires writing and debugging disposable Python scripts for every iteration. Consumer editors like Photoshop completely lack these programmatic, scientific-grade computer vision algorithms.',
    technicalChallenge: 'Executing heavy mathematical matrix transformations (via OpenCV/NumPy) on high-resolution images fundamentally blocks the Python Global Interpreter Lock (GIL). Running these operations on the main thread causes the GUI to freeze entirely, resulting in application crashes and terrible UX during batch processing.',
    solutionArchitecture: 'Built purely in Python, the architecture enforces strict separation of concerns. The presentation layer utilizes Tkinter for a lightweight, dependency-free cross-platform GUI. The core processing engine leverages OpenCV and NumPy for C-level mathematical performance. To solve the GIL blocking issue, the application implements a robust multithreaded architecture using the `concurrent.futures` module. Image processing tasks are offloaded to daemon threads, communicating back to the main GUI thread via thread-safe queues to update progress bars without locking the interface.',
    coreFeatures: [
      'Live webcam analytics featuring real-time Haar Cascade object detection pipelines',
      'Asynchronous, multithreaded batch processing for thousands of high-res images',
      'Interactive visual parameter tuning for advanced OpenCV algorithms',
      'Granular filtering, thresholding, and morphological transformation tools',
      'Standalone, zero-dependency executable deployment'
    ],
    engineeringDecisions: [
      {
        title: 'Tkinter over PyQt',
        description: 'While PyQt offers a more modern aesthetic, it introduces massive binary bloat. By utilizing Python\'s built-in Tkinter library, we kept the final compiled `.exe` under 50MB, ensuring rapid download and execution without requiring administrative installation privileges.'
      },
      {
        title: 'Daemon Threads & Queue Synchronization',
        description: 'All OpenCV operations are relegated to background threads. We utilized `queue.Queue` to pass matrix data and progress integers safely across the thread boundary to the Tkinter mainloop, completely eliminating GUI freezing during 10GB+ batch processing jobs.'
      }
    ],
    outcomesAndImpact: [
      'Streamlined computer vision R&D workflows, turning hour-long scripting sessions into 5-minute GUI tasks',
      'Successfully deployed as a standalone, zero-configuration `.exe` utilized by non-technical academic researchers',
      'Processed over 50,000 images seamlessly in single batch operations without memory leaks'
    ],
    futureImprovements: [
      'Integrate YOLOv8 via PyTorch for state-of-the-art, GPU-accelerated deep learning object detection.',
      'Implement a node-based visual pipeline builder, allowing users to chain OpenCV operations together visually.'
    ]
  },
  {
    slug: 'advanced-video-qa-system',
    title: 'Advanced Video QA System',
    description: 'End-to-end RAG desktop pipeline allowing users to chat with local video files using LLMs, vector search, and precise timestamp navigation.',
    category: 'AI Systems',
    featured: false,
    type: 'Desktop Application',
    technologies: ['Python 3.11', 'PyQt6', 'LangChain', 'OpenAI API', 'FAISS', 'OpenAI Whisper', 'FFmpeg'],
    screenshots: [
      '/assets/advanced_video_qa_pro_image/advanced-video-qa-pro-shell.png',
      '/assets/advanced_video_qa_pro_image/video-play.png',
      '/assets/advanced_video_qa_pro_image/processing.png',
      '/assets/advanced_video_qa_pro_image/provider-analysis.png',
      '/assets/advanced_video_qa_pro_image/chat-proof.png'
    ],
    githubUrl: 'https://github.com/hammad986/advanced-Video-QA-System',
    downloadUrl: 'https://github.com/hammad986/advanced-Video-QA-System/releases/download/v1.0.0-rc.1/AdvancedVideoQAProSetup-1.0.0.exe',
    executiveOverview: 'The Advanced Video QA System is a state-of-the-art desktop application that completely revolutionizes interactions with long-form video content. By implementing a highly specialized Retrieval-Augmented Generation (RAG) pipeline, it allows professionals to literally "chat" with local video files, receiving highly accurate answers linked directly to actionable, playable timestamps.',
    problemStatement: 'Extracting specific information from multi-hour video content (like university lectures, corporate town halls, or legal depositions) requires tedious manual scrubbing. This results in massive losses in productivity and makes video a highly inefficient medium for rapid knowledge retrieval.',
    technicalChallenge: 'Connecting semantic text retrieval to exact video timestamps required building a custom data structure. Standard RAG pipelines lose temporal context during the chunking phase. Additionally, processing gigabytes of video locally via FFmpeg and Whisper required robust local resource management to prevent CPU thermal throttling.',
    solutionArchitecture: 'The application is built on PyQt6 for a highly responsive, native desktop experience. The ingestion pipeline utilizes FFmpeg to strip audio, which is processed by OpenAI Whisper to generate timestamped transcripts. We built a custom LangChain document loader that preserves temporal metadata (start/end seconds) within the Document objects. These are embedded using OpenAI ADA-002 and stored in a local FAISS vector database. During querying, the LLM synthesizes an answer and strictly returns the temporal metadata, which the PyQt frontend uses to instantly seek the embedded video player to the exact relevant frame.',
    coreFeatures: [
      'Automated, high-accuracy audio extraction and Whisper transcription',
      'Temporal-aware semantic chunking and local FAISS vector storage',
      'Context-aware conversational querying utilizing GPT-4',
      'Instant GUI-to-Video timestamp seek functionality',
      'Local-first architecture ensuring proprietary corporate videos never leave the machine'
    ],
    engineeringDecisions: [
      {
        title: 'Custom Temporal Chunking Strategy',
        description: 'Standard recursive text splitters destroy the timeline. We engineered a custom chunking algorithm that splits transcripts by time-windows (e.g., 30-second blocks with 5-second overlaps), ensuring every vector embedding is mathematically tied to a specific video segment.'
      },
      {
        title: 'Local FAISS over Cloud Vector DBs',
        description: 'To guarantee absolute privacy for sensitive local video files and ensure zero latency during the retrieval phase, we opted to serialize FAISS indices directly to the local filesystem rather than relying on external vector databases like Pinecone.'
      }
    ],
    outcomesAndImpact: [
      'Reduced specific information retrieval time in 2-hour videos from an average of 15 minutes to under 3 seconds',
      'Enabled semantic, natural-language search across entire local video libraries seamlessly',
      'Achieved a fully self-contained desktop architecture deployable to enterprise environments'
    ],
    futureImprovements: [
      'Implement multi-modal RAG using LLaVA to query the actual visual frames of the video, rather than just the transcribed audio track.',
      'Add local LLM inference via Ollama to create a 100% air-gapped system requiring zero internet connectivity.'
    ]
  }
];
