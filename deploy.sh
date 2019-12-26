echo "Deployment Started"
cd /artifacts/stg
sam deploy --template-file outputtemplate.yaml --stack-name lossam --region us-east-1 --capabilities CAPABILITY_IAM --parameter-overrides StageName=Staging
echo "Deployment Completed"
