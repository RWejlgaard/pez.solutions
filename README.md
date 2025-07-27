# Pez Solutions

Pez Solutions is a personal homelab website that serves as a central hub for various self-hosted services. It's a collection of servers and services running across multiple locations (London and Copenhagen), providing media streaming, cloud storage, file sharing, and other utilities primarily for personal use and friends/family.

## About

This project is a static website built for Cloudflare Pages that showcases and provides access to various homelab services. The infrastructure spans two primary locations with multiple servers per location, maintaining a 99.9% uptime SLO.

## Key Features

- **Media Streaming**: Self-hosted media servers with content management
- **Cloud Storage**: Private cloud drive with file synchronization
- **File Sharing**: Secure file sharing capabilities
- **Infrastructure Documentation**: Technical documentation and incident reports
- **Service Status**: Real-time monitoring and incident tracking

## Technology Stack

- **Frontend**: Static HTML/CSS/JavaScript
- **Deployment**: Cloudflare Pages (via Wrangler)
- **Infrastructure**: Multi-location homelab setup
- **Storage Backend**: Self-hosted storage solutions

## File Structure

```
.
├── index.html                 # Main landing page
├── Makefile                   # Development commands (Wrangler Pages)
├── .gitignore                 # Git ignore rules
├── .DS_Store                  # macOS system file
│
├── css/
│   └── base.css              # Main stylesheet with responsive design
│
├── js/
│   ├── global_menu.js        # Navigation menu generator
│   └── menu_open.js          # Mobile menu toggle functionality
│
├── services/
│   └── index.html            # Comprehensive services listing and status
│
├── drive/
│   └── index.html            # Cloud storage service information and access
│
├── catering/
│   ├── index.html            # Food service ordering system (currently closed)
│   └── buy/                  # Catering purchase functionality
│
├── projects/
│   └── index.html            # Personal projects showcase
│
├── docs/
│   ├── index.html            # Documentation hub
│   ├── drive/                # Drive-specific documentation
│   ├── infrastructure/       # Infrastructure documentation
│   ├── jellyfin/            # Jellyfin media server docs
│   ├── plex/                # Plex media server docs
│   └── slo/                 # Service Level Objectives
│
├── rca/                      # Root Cause Analysis reports
│   ├── index.html            # Incident listing
│   └── [YYYY-MM-DD]/        # Individual incident RCA reports
│
├── deep-thoughts/
│   ├── index.html            # Blog/thoughts section
│   └── tty-only/            # Terminal-only content
│
└── legal/
    └── index.html            # Terms of Service and legal information
```

## Services Overview

### Media Streaming
- Self-hosted media servers with automatic transcoding
- Content management and request systems
- Multiple streaming platform support

### Cloud Storage
- Private cloud storage with synchronization
- File versioning and collaboration features
- Cross-platform client support
- Web-based file management interface

### File Sharing
- Secure file sharing capabilities
- Temporary and permanent sharing options

### Infrastructure Services
- Multi-location setup for high availability
- Redundant systems and monitoring
- Comprehensive incident tracking and reporting

## Development

### Prerequisites
- Node.js and npm (for Wrangler CLI)
- Cloudflare account for Pages deployment

### Local Development
```bash
# Install Wrangler CLI
npm install -g wrangler

# Start local development server
make debug
# or
wrangler pages dev .
```

### Deployment
The site is deployed to Cloudflare Pages. The deployment is typically automated through Git integration.

## Architecture

The website follows a simple static site architecture:

1. **Frontend**: Pure HTML/CSS/JavaScript with no build process
2. **Navigation**: Dynamic menu generation via JavaScript
3. **Responsive Design**: Mobile-first approach with hamburger menu
4. **Service Integration**: Links to external services hosted on the homelab infrastructure

## Navigation Structure

The site uses a dynamic navigation system (`global_menu.js`) that generates consistent menus across all pages, including:

- Home
- Services (with status indicators)
- Drive (cloud storage)
- Projects
- Documentation
- Incident Reports (RCA)
- Legal/Terms

## Infrastructure Documentation

The `/docs` section contains comprehensive technical documentation including:
- Infrastructure setup and architecture
- Service-specific documentation and guides
- Service Level Objectives (SLO)
- Operational procedures

## Incident Management

The `/rca` (Root Cause Analysis) section tracks infrastructure incidents with detailed post-mortems, demonstrating commitment to transparency and continuous improvement.

## Support

For inquiries or assistance, please refer to the contact information provided on the website.

## License

This is a personal project. The website code is available for reference, but the services are provided on a personal/friends & family basis only.