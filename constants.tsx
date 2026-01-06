import { N8NProject } from './types';

export const SAMPLE_PROJECTS: N8NProject[] = [
  {
    id: '1',
    title: 'AI Content Command Center',
    description: 'Automate multi-platform content distribution using OpenAI, WordPress, and Social Media nodes.',
    image:`images/1.png`,
    tags: ['AI', 'Content', 'Automation'],
    difficulty: 'Advanced',
    nodes: ['OpenAI', 'WordPress', 'Buffer', 'HTTP Request', 'Schedule'],
    businessValue: 'Reduces content management overhead by 85%. This workflow allows a single person to manage the output of an entire content team by automating drafting, formatting, and scheduling across four major platforms.',
    detailedImplementation: 'The workflow starts with a Schedule Trigger fetching trending topics from an API. It then pipes this into OpenAI to generate SEO-optimized drafts. The WordPress node handles the publishing, while the Buffer node coordinates social media teasers with specific delay logic to ensure maximum engagement.',
    prerequisites: ['OpenAI API Key', 'WordPress Application Password', 'Buffer Account', 'n8n v1.0+'],
    setupSteps: [
      'Configure the HTTP node with your preferred news/RSS feed.',
      'Connect your OpenAI credentials and set the model to GPT-4o.',
      'Install the n8n-helper plugin on your WordPress site.',
      'Map the social media handles in the Buffer node settings.'
    ]
  },
  {
    id: '2',
    title: 'Smart CRM Sync Engine',
    description: 'Seamlessly synchronize customer data between HubSpot, Salesforce, and a custom PostgreSQL database.',
    image: `images/2.png`,
    tags: ['CRM', 'Sync', 'PostgreSQL'],
    difficulty: 'Intermediate',
    nodes: ['HubSpot', 'Salesforce', 'Postgres', 'Merge', 'Wait'],
    businessValue: 'Eliminates data silos and prevents duplicate lead entry. Saves sales teams an average of 10 hours per week by ensuring the data they see in Salesforce is perfectly mirrored from their HubSpot marketing activities.',
    detailedImplementation: 'Utilizes a bidirectional sync pattern. Whenever a "Lead" record is updated in HubSpot, a webhook triggers this workflow. It checks for the existence of the user in Postgres; if they exist, it updates; if not, it creates a new entry and pushes a mirrored copy to Salesforce.',
    prerequisites: ['HubSpot Developer Account', 'Salesforce Enterprise', 'PostgreSQL Database Access'],
    setupSteps: [
      'Set up Webhooks in HubSpot for Lead Creation/Update.',
      'Configure Postgres table schema using the provided SQL script.',
      'Auth n8n with Salesforce via OAuth2.',
      'Run the initial bulk sync workflow to align existing records.'
    ]
  },
  {
    id: '3',
    title: 'Discord Moderation Bot',
    description: 'A custom n8n workflow that listens to Discord events and uses AI to detect spam or sentiment.',
    image: `images/3.png`,
    tags: ['Discord', 'Security', 'Bot'],
    difficulty: 'Beginner',
    nodes: ['Discord', 'Sentiment Analysis', 'Wait', 'If'],
    businessValue: 'Protects your community 24/7 without the cost of human moderators. Reduces spam response time to under 2 seconds and automatically flags toxic behavior for administrative review.',
    detailedImplementation: 'This workflow listens to every message event in specified channels. It sends message content to a lightweight NLP node. If sentiment is highly negative or contains known spam patterns, it triggers a temporary mute on Discord and notifies the #admin-log channel.',
    prerequisites: ['Discord Bot Token', 'Privileged Gateway Intents enabled'],
    setupSteps: [
      'Create a Discord Application in the Developer Portal.',
      'Invite the Bot with "Manage Roles" and "Send Messages" permissions.',
      'Connect the Discord Node in n8n using your Bot Token.',
      'Customize the NLP sensitivity threshold in the IF node.'
    ]
  },
  {
    id: '4',
    title: 'AI WhatsApp Business Chatbot',
    description: 'Automate customer support on WhatsApp using AI to respond to queries, track orders, and provide product recommendations.',
    image: `images/4.png`,
    tags: ['WhatsApp', 'AI', 'Automation'],
    difficulty: 'Intermediate',
    nodes: ['Twilio', 'OpenAI', 'Webhook', 'Function', 'HTTP Request'],
    businessValue: 'Reduces response time for customer queries, improves engagement, and provides 24/7 automated support.',
    detailedImplementation: 'The workflow triggers on incoming WhatsApp messages via Twilio. Messages are sent to OpenAI for AI-generated responses, which are then sent back to the customer automatically. Additional logic handles order tracking and FAQs.',
    prerequisites: ['Twilio Account', 'OpenAI API Key', 'n8n v1.0+'],
    setupSteps: [
      'Configure Twilio WhatsApp number and webhook.',
      'Connect OpenAI credentials in n8n.',
      'Map message input/output in the Function node.',
      'Test the bot with sample messages.'
    ]
  },
  {
    id: '5',
    title: 'Automated Email Reply System',
    description: 'AI-powered email assistant that reads incoming emails and sends professional replies automatically.',
    image: `images/5.png`,
    tags: ['Email', 'AI', 'Automation'],
    difficulty: 'Intermediate',
    nodes: ['IMAP Email', 'OpenAI', 'SMTP', 'Function'],
    businessValue: 'Saves hours of manual email responses and ensures consistent, professional communication.',
    detailedImplementation: 'Incoming emails are fetched using IMAP. The content is sent to OpenAI for generating a professional reply, then sent via SMTP to the sender. The workflow can handle multiple email accounts and includes logging.',
    prerequisites: ['IMAP Email Account', 'SMTP Credentials', 'OpenAI API Key', 'n8n v1.0+'],
    setupSteps: [
      'Connect your IMAP and SMTP accounts in n8n.',
      'Set up OpenAI credentials.',
      'Map email content to the OpenAI node input.',
      'Test the workflow with sample emails.'
    ]
  }
];
