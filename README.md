# Jenna Portfolio

Portfolio website for Jenna Mathison, a Software Engineer at Lyntris and a University of Michigan - Dearborn Computer Science Graduate

This portfolio website is available at [jennamat.com](https://jennamat.com)

## Pages

### Home

Home page displaying an introduction with my full name and title

### About

About page with a picture, biography, work history and education

### Projects

Projects page containing interactive cards for each project with a description, technologies, and website/github links

1. Synthesis Engine
2. VendUMD
3. Translation Networks

### Contact

Contact page containing an email form and social media links

## Development

### Setup

Setup Commands:
```
cp .env.example .env
npm ci
```

### Run

Run the dev server:
```
npm run dev
```
Access at http://localhost:3000

Run in docker:
```
./build-dev.sh
docker compose up -d
```
Access at http://localhost:5000

## Deployment

This app is built and deployed with Komodo behind Cloudflare Tunnel on Jenna's homelab
