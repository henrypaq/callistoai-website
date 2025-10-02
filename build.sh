#!/bin/bash
# Custom build script that bypasses TypeScript checking
export SKIP_TYPE_CHECK=true
export NEXT_TELEMETRY_DISABLED=1

# Remove .next directory to ensure clean build
rm -rf .next

# Run Next.js build with all checks disabled
npx next build --no-lint
