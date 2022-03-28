// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6tjgpv8jpnufh925evuoej41hn",     // CognitoClientID
  "api_base_url": "https://2b9omkuwxf.execute-api.eu-west-2.amazonaws.com/dev",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-syncorg-platform-arch.auth.eu-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1r6f58j33vipg.amplifyapp.com"                                      // AmplifyURL
};

export default config;
