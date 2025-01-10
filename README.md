# Project Name: Centro de Línguas e Formação | CELF

First steps into freelancing work. This project is a fully functional website designed to offer professional courses and showcase available training programs. While the core features are complete, the website will continue to be maintained and refined, with potential new features rolling out to enhance its functionality.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Deployment](#deployment)
3. [Testing Strategy](#testing-strategy)
4. [CI/CD Pipeline](#cicd-pipeline)
5. [Future Plans](#future-plans)

## Technologies Used

- **Frontend**: React with SASS for styling.
- **Backend**: ExpressJS and Node.js, serving data from static JSON files.
- **Testing**: React Testing Library and Jest (currently focused on testing the navbar component, with plans to expand).
- **CI/CD**: GitLab CI/CD pipeline for automated workflows.

## Deployment

The website is hosted at: [CELF](https://www.celfcentrodeformacao.com/)

### Hosting Details

- **Platform**: [Ping.pt](https://ping.pt)
- **Deployment Process**:  
  The website is deployed manually after building the optimized folder locally with 'npm run build'. The hosting service used allows Git integration but it's currently having deployment issues on their side. Once these get fixed, this feature will be used which will allow Ping to keep updating the website as changes happen in the repo!

This setup will ensure a seamless and reliable deployment process.

## Testing Strategy

This project includes a growing testing strategy to ensure quality and reliability as features are added and refined.

### Current Testing Focus

- **Unit Tests**: Currently testing the navigation bar component to verify its functionality and responsiveness.

### Future Testing Plans

- Additional unit tests for other key components.
- Possible integration tests to ensure smooth navigation and data flow between components.
