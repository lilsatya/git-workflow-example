# *git-workflow-example*

Git workflow example for a small agile team, we use JIRA for the agile management.

## **Things to note before start:**

1. There are 4 main branches; 'development', 'staging', 'master', and 'production'
2. Branch 'development' is for the developers to see the integration of all merged feature branch
3. Branch 'staging' is for the QA to test and client for UAT, QA and Client will have different database but same sourcecode
4. Branch 'master' is the main branch, it is the one truth for all of branches
5. Branch 'production' is for production ready application
6. Merge 'master' branch to your currently working on feature/fix branch at least once a day to minimize upstream conflict
7. Always diff your codes to make sure it wont break once merged
8. Commit early and often in feature/fix branch, so others can see what are the changes in a detailed manner
9. Never ever directly edit/commit/push to main branches (development/staging/master/production)
10. All branches will have automated delivery pipeline, except staging for UAT
11. Focus the branches on user stories rather than modules

## **Writing Rules:**

1. for feature branch: feature/{epic_story}/{user_story}
2. for fix branch: fix/{epic_story}/issue-{issue_number}
3. for hotfix branch: hotfix/{epic_story}/issue-{issue_number}
4. for feature commit message: feat:{why_you_change_that_spesific_code}
5. for fix commit message: fix:{why_you_change_that_spesific_code}

> *Difference in 'fix' and 'hotfix' is that 'fix' happens in internal testing, while 'hotfix' happens in UAT or production

> *When using JIRA, you have to put user story code before user story in branch name, i.e: feature/shop/US-121-add-cart

## **GIT WORKFLOW**

### **DEVELOPMENT STAGE:**

if initial commit, tag the version number as 0.0.1

There are 2 main branch modules here currently:
> feature/shop

And we break down the branches further:
> feature/shop/master

'master' on each main branch module is where the sub-branch of it will receive pull request:
> feature/shop/add-cart > feature/shop/master

after the sub-branch merged, the 'master' branch of feature then make pull request to 'development':
> feature/shop/master > development

after the feature branch merged to development, developers will do unit testing on development:
> development (UNIT_TESTING)

### **TESTING STAGE:**

if all unit tests passed, the 'master' branch of feature branch then make pull request to 'staging':
> feature/shop/master > staging

delete all merged user story branches to epic story branch:
> feature/shop/add-cart (DELETE)

increase version number, add 0.1.0

after the feature branch merged to staging, QA will do testing on staging:
> staging (QA_TESTING)

any issues encountered during QA testing needs to be recorded on project management app (Jira, Trello, Spreadsheet)

for bugfixing, first use staging branch as a base then create a new branch:
> staging > fix/shop/issue-1

after making some changes, then make a pull request directly to staging:
> fix/shop/issue-1 > staging

once the issue is closed, pull request the fix to the specific feature epic story master branch:
> fix/shop/issue-1 > feature/shop/master

delete the fix branch:
> fix/shop/issue-1 (DELETE)

merge staging to development:
> staging > development

### **UAT STAGE:**

if all QA tests passed, time to do UAT in staging with different database:
> staging (DIFFERENT_DATABASE)

any issues encountered during UAT needs to be recorded on project management app (Jira, Trello, Spreadsheet)

for bugfixing, first use staging branch as a base then create a new branch:
> staging > hotfix/shop/issue-30

after making some changes, then make a pull request directly to staging:
> fix/shop/issue-30 > staging

let the QA test the fixed issue:
> staging (QA_TESTING)

once the issue is closed, pull request the fix to the specific feature epic story master branch:
> hotfix/shop/issue-30 > feature/shop/master

delete the hotfix branch:
> hotfix/shop/issue-30 (DELETE)

merge staging to development:
> staging > development

increase version number, add 0.0.1

rebuild the UAT environment project

### **PRODUCTION STAGE:**

if all UAT test passed, time to push to master

pull request all of passed epic story branches to master:
> feature/shop/master > master

pull request master to production:
> master > production

if this is first time production, tag the version number as 1.0.0
if not, increase version number, add 0.1.0

any issues encountered during production needs to be recorded on project management app (Jira, Trello, Spreadsheet)

for bugfixing, first use production branch as a base then create a new branch:
> production > hotfix/shop/issue-488

after making some changes, then make a pull request directly to staging:
> hotfix/shop/issue-488 > staging

let the QA test the fixed issue:
> staging (QA_TESTING)

once the issue is closed, pull request the fix to the epic story master branch:
> hotfix/shop/issue-488 > feature/shop/master

delete the hotfix branch:
> hotfix/shop/issue-488 (DELETE)

merge staging to development:
> staging > development

pull request the epic story branch to master:
> feature/shop/master > master

pull request master to production:
> master > production

increase version number, add 0.0.1
