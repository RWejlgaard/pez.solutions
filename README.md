# Pez Solutions

Pez Solutions is a personal homelab website that serves as a central hub for various self-hosted services. It's a collection of servers and services running across multiple locations (London and Copenhagen), providing media streaming, cloud storage, file sharing, and other utilities primarily for personal use and friends/family.

## About

This project is a static website built for Cloudflare Pages that showcases and provides access to various homelab services. The infrastructure spans two primary locations with multiple servers per location, maintaining a 99.9% uptime SLO.

## Key Features

- **Media Streaming**: Plex and Jellyfin servers with content request system
- **Cloud Storage**: Private cloud drive with 100GB free tier (Seafile-based)
- **File Sharing**: Public file sharing capabilities
- **Infrastructure Documentation**: Technical documentation and incident reports
- **Service Status**: Real-time monitoring and incident tracking

## Technology Stack

- **Frontend**: Static HTML/CSS/JavaScript
- **Deployment**: Cloudflare Pages (via Wrangler)
- **Infrastructure**: Multi-location homelab setup
- **Storage Backend**: Seafile for cloud drive functionality

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
│   ├── 2024-06-13/          # Internet outage incident
│   ├── 2024-04-30/          # ZFS pool degradation
│   ├── 2024-04-19/          # ZFS pool suspension
│   └── 2024-04-15/          # Historical incidents
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
- **Plex Media Server** (`plex.pez.sh`) - High-quality media streaming with transcoding
- **Jellyfin Media Server** (`jellyfin.pez.sh`) - Open-source alternative media server
- **Content Requests** (`request.pez.sh`) - System for requesting new media content

### Cloud Storage
- **Pez Drive** (`files.pez.sh`) - Seafile-based private cloud storage
  - 100GB free tier
  - Real-time synchronization
  - File versioning and collaboration
  - Cross-platform support (Windows, macOS, Linux, iOS, Android)

### File Sharing
- **Public File Sharing** (`public.pez.solutions`) - Temporary file sharing service

### Infrastructure Services
- Multi-location setup (London & Copenhagen)
- High availability with redundancy
- Comprehensive monitoring and incident tracking

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
- Service-specific documentation (Plex, Jellyfin, Drive)
- Service Level Objectives (SLO)
- Operational procedures

## Incident Management

The `/rca` (Root Cause Analysis) section tracks infrastructure incidents with detailed post-mortems, demonstrating commitment to transparency and continuous improvement.

## Support

For inquiries or assistance: support@pez.solutions

## License

This is a personal project. The website code is available for reference, but the services are provided on a personal/friends & family basis only.