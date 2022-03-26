## Code organization

For tests the folder structure should be similar to this as spec files are going to utilize multiple page objects for completing a test
```
─e2e
    │   tsconfig.e2e.json
    │
    ├───logger
    │       step-logger.ts
    │
    ├───components
    │       page-helper.ts
    │       textbox-helper.ts
    │       validation-helper.ts
    │       wait-helper.ts
    │
    ├───page-objects
    │   ├───(page-name)
    │           (page-name)-page.constants.ts
    │           (page-name)-page.helper.ts
    │           (page-name).po.ts
    │
    └───tests
    │      (test).spec.ts
```

* `*.constant.ts`, can have field/objects/properties but not methods
* `*.po.ts` can have objects/properties but not methods
* `*.helper.ts` can only have methods used for manipulation of objects on UI


## Running end-to-end test
After pulling the repository to your local machine,
Run `npm install`
Run `webdriver-manager update`
Run `webdriver-manager start` and keep it running
On a different terminal,
Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/) or `protractor protractor.conf.js`
```
