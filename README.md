# Zenjob Coding Challenge

This is a **coding challenge** intended for **frontend engineers**. It holds **two different tasks**. For finishing Tasks A and B with some brief documentation, you should not need to invest more than **2 hours** depending on your familiarity with the tech stack and your skills. 

## What this is about

This repository consists of a simplified version of a **ticketing system** like it could be used by Zenjob to handle customer requests. We would like you to extend the functionality of it and ensure it can be used across devices.

### No bootstrapping needed

To allow you to dive right into it, there is a simplified version which already contains the following features:

- an endpoint to list all **people**
- an endpoint to list all **tickets**
- an endpoint to delete **tickets**
- a UI to list all **tickets**

Feel free to adjust the exiting code as much as you like.

For your convenience the repo contains additionally to the UI also the API as well as a local DB. You can play with it as much as you like and re-seed the app whenever needed. To get started just follow the steps in the next section.

### Getting started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, install the dependencies:

```bash
yarn install
```

Then seed the database:

```bash
yarn seed
```

Now you can start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### API endpoints

`GET /api/tickets` - get all tickets
`DELETE /api/tickets/:ticketId` - delete a ticket with id = ticketId
`GET /api/users` - get all users

### Specifications

There are certain specifications defined which **must** be met. If you should encounter some shortcomings (bugs) of the existing system this would need to be corrected.

- the UI should follow the [given designs](https://www.figma.com/file/XRLLHLtNSgEKSQGE4kaFQ9/Front-end-Task?node-id=0%3A1)
- the UI should use the Material-UI component library
- it is up to you to go TDD or test afterwards but there should be reasonable tests covering any added functionality

## Objective

Your job is to extend the existing UI so it satisfies the following requirements. For more details please see the [attached designs](https://www.figma.com/file/XRLLHLtNSgEKSQGE4kaFQ9/Front-end-Task?node-id=0%3A1). If you have any questions feel free to ask at any time.

### Task A

**AS** a User
I want to be able to delete tasks.

### Task B

**AS** a User
I want to be able to manage the tasks on all my devices.
