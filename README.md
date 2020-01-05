# Connect Test - Server

This is a basic web server written in `NodeJS` that was taken from `steadweb/frontend-technical-test`. It contains the "server" part of the application, which splits the client and server into separate applications. This application simply uses Node 12.x and Express 4.x to serve data (JSON).

The purpose of this application is to demonstrate applications should follow SRP (Single Responsiblity). The original test contained both the client and server as one package.

## Prerequisites

The following needs to be installed for this application to work:

- Node 12.x
- Npm 6.x

## Quick Start

```
git clone git@github.com:steadweb/connect-test-server.git
cd connect-test-server
npm i
npm start
```
