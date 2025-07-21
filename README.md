# Issue: sentry-react-native #4961

> Minimal reproduction of https://github.com/getsentry/sentry-react-native/issues/4961

This is a managed Expo project.

## Instructions

1. Create a Sentry project
2. Create a Sentry token with scope `org:ci` (this scope is the one chosen when generating the token from the docs)
3. Configure Sentry in `app/_layout.tsx`
    - Set `dsn` to the project DSN
4. Create an EAS project
5. Add the token as a variable `SENTRY_AUTH_TOKEN` to all EAS environments (including `preview`)
6. Configure `app.json`
    - Set `expo.extra.eas.projectId` to the project id
    - Set `expo.slug` & `expo.plugins[1].project` to the proejct slug
    - Set `expo.plugins[1].project` to the project organization
7. Run `npm install`
8. Run `npx eas build --platform ios --profile preview`

## Expected

The preview build should succeed and source maps should be uploaded

## Actual

Observe the following error causing the build fail when attempting to upload source maps:

``` 
- sentry-cli - To disable source maps auto upload, set SENTRY_DISABLE_AUTO_UPLOAD=true in your environment variables. Or to allow failing upload, set SENTRY_ALLOW_FAILURE=true
- sentry-cli -   WARN    2025-07-21 06:04:30.385560 -07:00 Failed to load .env file: Failed to load custom .env file: /Users/expo/workingdir/build/ios/../.env.sentry-build-plugin
- Project not found. Ensure that you configured the correct project and organization.
```
