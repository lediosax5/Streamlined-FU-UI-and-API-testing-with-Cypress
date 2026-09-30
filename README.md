# Cypress UI and API Testing

An end-to-end testing portfolio project built with Cypress and JavaScript. It exercises the Pushing IT demo application through browser workflows and HTTP requests, with page objects, fixture data, and Mochawesome reporting.

## Overview

The repository collects examples of UI and API testing against the public Pushing IT demo site. The tests cover registration and login, negative login cases, a to-do list, timed messages, and browser alerts, prompts, and confirmations. The application and API are external services; this repository contains the test suite, not the application under test.

## Features

- UI workflows and API requests using Cypress.
- Page objects for common screens and interactions.
- JSON fixtures for test data.
- Mochawesome reports when Cypress runs.
- XPath support through `cypress-xpath`.

## Tech stack

- JavaScript (CommonJS configuration and ES module test files)
- Cypress 13
- Mocha assertions provided by Cypress
- Mochawesome reporter

## Project structure

```text
cypress/
  e2e/             # Registration, login, and showcase specs
  fixtures/        # Example user and task data
  support/         # Cypress commands and page objects
cypress.config.js  # Cypress settings and demo application URL
```

## Getting started

Requirements: Node.js and npm, plus access to the public Pushing IT demo site. Install the locked dependencies with:

```sh
npm ci
```

The UI login examples use an account provided by the demo application. Supply its username and password through Cypress environment variables before opening or running the suite; do not commit real credentials. In PowerShell:

```powershell
$env:CYPRESS_user = "your-demo-username"
$env:CYPRESS_pass = "your-demo-password"
npm run cy:open
```

The Cypress configuration points UI tests at `https://pushing-it.vercel.app/`. API custom commands currently target `https://pushing-it.onrender.com`; these are independently hosted demo services and may change availability or behavior.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run cy:open` | Open Cypress in Chrome (requires Chrome installed). |
| `npm run cy:open:electron` | Open Cypress in its bundled Electron browser. |
| `npm run cy:run` | Run the suite headlessly in Electron. |

## Test data and reports

`cypress/fixtures/dataUsers.json` contains a demo registration payload, and `dataTasks.json` supplies to-do list examples. The suite creates and deletes a user through the external API, so use only disposable demo data. Cypress writes Mochawesome output under `cypress/reports/`; generated reports are excluded from Git.

## What this project demonstrates

- Browser-based end-to-end testing and direct HTTP API checks.
- Cypress custom commands and page object organization.
- Fixture-driven test data and assertions on UI and API responses.
- Handling browser dialogs and asynchronous UI behavior.

The project demonstrates test automation against a demo application. It does not include the application's implementation, a CI pipeline, or a separately maintained unit test suite.

## Project status

This is a completed portfolio project. The repository is documented for review and reference; its tests depend on public demo services that are outside this repository's control.
