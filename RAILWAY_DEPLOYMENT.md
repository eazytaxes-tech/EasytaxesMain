# Railway Deployment Guide

This guide details the steps to deploy the Eazytaxes application to [Railway](https://railway.app/).

## Prerequisites

-   A Railway account.
-   The codebase pushed to a GitHub repository (private or public).

## Project Configuration Verification

The project is already configured for deployment:
1.  **Build Command**: `npm run build` (runs `tsx script/build.ts` which builds both client and server).
2.  **Start Command**: `npm start` (runs `node dist/index.cjs`).
3.  **Port**: The server listens on `process.env.PORT` (defaults to 5000), which Railway provides automatically.

## Deployment Steps

1.  **Login to Railway**: Go to https://railway.app/ and logs in.
2.  **New Project**: Click "New Project" > "Deploy from GitHub repo".
3.  **Select Repository**: Choose the `Eazytaxes` repository.
4.  **Configure Service**:
    -   Railway should automatically detect the `package.json` and the scripts.
    -   Go to **Settings** > **Build**.
    -   Verify **Build Command**: `npm run build`.
    -   Verify **Start Command**: `npm start`.
5.  **Environment Variables**:
    -   Go to the **Variables** tab.
    -   Add the necessary environment variables found in your `.env` file (DO NOT copy everything blindly if some are local-only, but usually you need):
        -   `DATABASE_URL` (if using a database, see below).
        -   `EMAIL_USER` (for Nodemailer).
        -   `EMAIL_APP_PASSWORD` (for Nodemailer).
        -   `NODE_ENV`: `production` (Railway might set this, but good to be explicit).
        -   `SESSION_SECRET`: Set a strong random string.

## Database (PostgreSQL)

The application uses `pg` and `drizzle-orm`. You need a Postgres database.
1.  In your Railway project, right-click the canvas and select "New" > "Database" > "PostgreSQL".
2.  Wait for it to initialize.
3.  Connect your application service to this database:
    -   Railway often automatically adds `DATABASE_URL` to your service if they are in the same project. Check the Variables tab.

## Database Migrations

To apply database changes (Drizzle) in production:
1.  Add a deploy command or run it manually.
2.  **Option A (Recommended)**: Add a "Pre-deploy" or "Build" step command if Railway supports it, or modify `package.json` scripts.
    -   However, running migrations on every build can be risky.
3.  **Option B (Manual)**:
    -   Install Railway CLI: `npm i -g @railway/cli`.
    -   Run `railway link` to connect to your project.
    -   Run `railway run npm run db:push` (or `drizzle-kit push`) to update the schema.
    -   *Note*: Ensure `drizzle-kit` is available or use the locally generated sql files if using `migrate`.

## Troubleshooting

-   **Build Fails**: Check the "Build Logs". Ensure `drizzle-kit` or other dev dependencies are not wrongly required in the production runtime code. The current build script (`script/build.ts`) attempts to bundle dependencies. If issues arise with native modules (like `pg` or `bcrypt`), you might need to adjust `script/build.ts` to exclude them from bundling.
-   **Native Modules**: If you see errors about `pg` or `sharp` missing, strictly `npm install` in the start command might be needed, but usually Railway runs `npm install` before build. The bundled `dist/index.cjs` might not find the native bindings if path locations change. 
    -   *Fix*: If bundling fails for `pg`, edit `script/build.ts` to add `pg` to the `externals` list (if it's not working despite being in allowlist) or rely on `node_modules`.

## Domain Setup

1.  Go to **Settings** > **Networking**.
2.  Generate a Domain (e.g., `xxx.up.railway.app`) or add your Custom Domain (`eazytaxes.com`).
