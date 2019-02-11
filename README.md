# *git-workflow-example*

Git workflow example for a small team

## **Things to note before start:**

1. There are 3 main branches; 'development', 'staging', and 'master'
2. Branch 'development' is for the developers to see the integration of all merged feature branch
3. Branch 'staging' is for the QA to test and client for UAT, QA and Client will have different database but same sourcecode
4. Branch 'master' is for production once 'staging' passed QA and UAT
5. Merge 'staging' branch to your currently working on feature/fix branch at least once a day to minimize upstream conflict
6. Always diff your codes to make sure it wont break once merged
7. Commit early and often in feature branch, so others can see what are the changes in a detailed manner
8. Never ever directly edit/commit/push to main branches (development/staging/master)
9. All branches will have automated delivery pipeline, except staging for UAT

## **Writing Rules:**

1. for feature branch: feature/{module}/{sub_branch}
2. for fix branch: fix/{branch}/issue-{issue_number}
3. for feature commit message: feat:{why_you_change_that_spesific_code}
4. for fix commit message: fix:{why_you_change_that_spesific_code}

## **WORKFLOW**

### **DEVELOPMENT STAGE:**

if initial commit, tag the version number as 0.0.1

There are 2 main branch modules here currently:
> feature/homepage
> feature/about

And we break down the branches further:
> feature/homepage/master
> feature/about/master

'master' on each main branch module is where the sub-branch of it will receive pull request:
> feature/homepage/edit-comment > feature/homepage/master

after the sub-branch merged, the 'master' branch of feature then make pull request to 'development':
> feature/homepage/master > development

after the feature branch merged to development, developers will do unit testing on development:
> development (UNIT_TESTING)

### **TESTING STAGE:**

if all unit tests passed, the 'master' branch of feature then make pull request to 'staging':
> feature/homepage/master > staging

increase version number, add 0.1.0

after the feature branch merged to staging, QA will do testing on staging:
> staging (QA_TESTING)

any issues encountered during QA testing needs to be recorded on project management app (Jira, Trello, Spreadsheet)

for bugfixing, first use staging branch as a base then create a new branch:
> staging > fix/staging/issue-1

after making some changes, then make a pull request directly to staging:
> fix/staging/issue-1 > staging

once the issue is closed, pull request the fix to development branch:
> fix/staging/issue-1 > development

### **UAT STAGE:**

if all QA tests passed, time to do UAT in staging with different database:
> staging (DIFFERENT_DATABASE)

any issues encountered during UAT needs to be recorded on project management app (Jira, Trello, Spreadsheet)

for bugfixing, first use staging branch as a base then create a new branch:
> staging > fix/staging/issue-30

after making some changes, then make a pull request directly to staging:
> fix/staging/issue-30 > staging

let the QA test the fixed issue:
> staging (QA_TESTING)

once the issue is closed, pull request the fix to development branch:
> fix/staging/issue-30 > development

increase version number, add 0.0.1

rebuild the UAT environment project

### **PRODUCTION STAGE:**

if all UAT test passed, time to push to production

pull request staging to production:
> staging > master

if this is first time production, tag the version number as 1.0.0
if not, increase version number, add 0.1.0

any issues encountered during Production needs to be recorded on project management app (Jira, Trello, Spreadsheet)

for bugfixing, first use master branch as a base then create a new branch:
> master > fix/master/issue-488

after making some changes, then make a pull request directly to staging:
> fix/staging/issue-488 > staging

let the QA test the fixed issue:
> staging (QA_TESTING)

once the issue is closed, pull request the fix to development and master branch:
> fix/staging/issue-488 > development
> fix/staging/issue-488 > master

increase version number, add 0.0.1
