
## Construction Phases

### Phase 1 - Create new repo, auth, user login
- Clone the Amplify template and create an amplify app as per https://docs.amplify.aws/react/start/quickstart/##6-implement-login-ui
    - Add auth and user login: https://docs.amplify.aws/react/start/quickstart/##6-implement-login-ui
    - Add per-user authorization: https://docs.amplify.aws/react/start/quickstart/##9-implement-per-user-authorization
    - Add forms: https://docs.amplify.aws/react/build-ui/formbuilder/
        - npx ampx sandbox --profile default
        - npx ampx generate forms
- Deploy and verify


### Phase 2 - Update schema
- Update schema
- Deploy and verify


### Phase 3 - Add Home and Navbar components
- Copy Home and Navbar components. 
- Check it runs correctly
- Deploy and verify


### Phase 4 - Add Tailwind.css 
- Install tailwind.css: https://tailwindcss.com/docs/guides/vite
- Deploy and verify

### Phase 5 - Add React-Router
- https://reactrouter.com/en/main/start/tutorial
- Update routing files as per severalpens repo.
- Deploy and verify

## Demo Apps

## AWS Auth
All apps use AWS Amplify authentication and authorization
<img src="./ReadMeResources/AWSAmplifyLogin.png"/>

### Race Times
Record and track race times
<img src="./ReadMeResources/DemoAppsRaceTimes.png"/>


### Task Timer
Record and track time spend on tasks
<img src="./ReadMeResources/TaskTimer.png"/>

