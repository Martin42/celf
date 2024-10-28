# Project Name: Centro de Línguas e Formação | CELF

This project is currently under development and is not yet fully functional. This website will serve as a platform to offer professional courses and showcase available training programms.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [To-Do / Roadmap](#to-do--roadmap)
3. [Testing Strategy](#testing-strategy)
4. [CI/CD Pipeline](#cicd-pipeline)

## Technologies Used

_Work in progress – Technologies to be documented here once finalized._

## To-Do / Roadmap

- [x] Implement basic navbar routing and respective tests
- [x] Implement hero section
- [x] Implement "Services" section
- [x] Implement "FAQ" section
- [x] Implement "Where to find us" Section
- [x] Implement Footer

### Technical Aspects

- [ ] Implement tests for hero section

## Testing Strategy

This project includes a comprehensive testing strategy to ensure all interactive components, navigational elements, and design elements function correctly and maintain quality as development progresses.

### Types of Tests

(WIP)

- **Unit Tests**: Focused on individual components, such as the navigation bar. These tests ensure each component renders correctly and responds to user interactions (e.g., navbar link clicks).
- **Integration Tests**: Testing interactions across multiple components to validate navigation flow and element visibility.
- **Accessibility Tests**: Using tools like `axe-core` to verify compliance with accessibility standards.
- **Responsive Design Tests**: Validating that core components display correctly across different screen sizes, including mobile and desktop.

### Running Tests

- **To run all tests**: `npm test`
- **To run accessibility tests**: `npm run test:accessibility`

## CI/CD Pipeline

This project uses a CI/CD pipeline to automate testing and ensure code quality.

### Pipeline Overview

The CI/CD pipeline is designed to automate the following processes for each commit:

1. **Code Quality and Formatting**: Checks for coding standards and formatting consistency using tools such as Prettier.
2. **Automated Testing**: Runs unit, integration, and accessibility tests on each commit to ensure functionality and accessibility are preserved.
3. **Build Validation**: Ensures the codebase builds successfully without errors.

### Current Pipeline Setup

- **Build and Test Jobs**: Every commit triggers a series of jobs to run all tests and validate the build process. If any test fails, the pipeline stops to maintain code quality.
- **Deployment**: A deployment job will be added once the website reaches a stable, production-ready state.

---

This setup ensures continuous integration and code quality throughout the development cycle. Future enhancements to the CI/CD pipeline will include automated deployment, pending project completion.
