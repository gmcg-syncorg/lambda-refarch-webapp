// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7vf59is28lvidvb9fi0hsdukgf",     // CognitoClientID
  "api_base_url": "https://9bboptc5ed.execute-api.eu-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-syncorg-platform-arch.auth.eu-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1oxpqe1febune.amplifyapp.com"                                      // AmplifyURL
};

export default config;
