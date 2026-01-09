# Web Apps by PC
Demo apps by Paul Collins, Ballarat, Victoria

## Setup 
The app uses AWS Amplify for PaaS hosting. Refer to 
[docs](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html)
and 
[docs](https://docs.amplify.aws/nextjs/) for local environment setup

Run the following:
```
read -p "Enter email address: " user_email # hit enter
```

```
response=$(aws sso-admin list-instances)

ssoId=$(echo $response | jq '.Instances[0].IdentityStoreId' -r)

ssoArn=$(echo $response | jq '.Instances[0].InstanceArn' -r)

email_json=$(jq -n --arg email "$user_email" '{"Type":"Work","Value":$email}')

response=$(aws identitystore create-user --identity-store-id $ssoId --user-name amplify-admin --display-name 'Amplify Admin' --name Formatted=string,FamilyName=Admin,GivenName=Amplify --emails "$email_json")

userId=$(echo $response | jq '.UserId' -r)

response=$(aws sso-admin create-permission-set --name amplify-policy --instance-arn=$ssoArn --session-duration PT12H)

permissionSetArn=$(echo $response | jq '.PermissionSet.PermissionSetArn' -r)

aws sso-admin attach-managed-policy-to-permission-set --instance-arn $ssoArn --permission-set-arn $permissionSetArn --managed-policy-arn arn:aws:iam::aws:policy/service-role/AmplifyBackendDeployFullAccess

accountId=$(aws sts get-caller-identity | jq '.Account' -r)

aws sso-admin create-account-assignment --instance-arn $ssoArn --target-id $accountId --target-type AWS_ACCOUNT --permission-set-arn $permissionSetArn --principal-type USER --principal-id $userId

```


```
printf "\n\nStart session url: https://$ssoId.awsapps.com/start\nRegion: $AWS_REGION\nUsername: amplify-admin\n\n"
```

It should return something like:
```
Start session url: https://d-9767905631.awsapps.com/start
Region: ap-southeast-2
Username: amplify-admin
```

Then on local shell `aws configure sso`:

| SSO session name (Recommended): amplify-admin
| SSO start URL: <START SESSION URL>
| SSO region: <your-region>
| SSO registration scopes [sso:account:access]: <leave blank>
| Profile name: `default`
| Attempting to automatically open the SSO authorization page in your default browser.
| If the browser does not open or you wish to use a different device to authorize this request, open the following URL:
|
| https://device.sso.us-east-2.amazonaws.com/
|
| Then enter the code:
|
| SOME-CODE



Once set up, clone the repo and run the following:

- ` npm i `
- `npx ampx sandbox delete`
- ` npx ampx sandbox --profile default `

Then run the following in a separate terminal:
- ` npm run dev `
