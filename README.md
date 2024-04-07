# paywright-dragan
This is a test playwright repository

# install
- node.js
- npm
- playwright
`npm init playwright@latest`

# runing tests and reporting
- npx playwright test
- npx playwright test --workers=1
- npx playwright show-report
- for debug start in debug console

# Github actions report
- Download the report fro one of the runs
https://github.com/dragan-lukac/playwright-dragan/actions/workflows/playwright.yml

- Extract the report
- Run command to view the report `npx playwright show-report playwright-report`

# Feature improvements
- Implement 3 layer architecture for more flexability
- Investigate flaky tests