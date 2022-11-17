gcp_project = "villagelabs-staging-8d48e"
gcp_region = "us-central1"
gcp_zone = "us-central1-a"
environment = "dev"
name = "bigdipper-fe"
next_public_graphql_url = "http://34.70.251.119:8080/v1/graphql"
next_public_graphql_wss_url = "wss://34.70.251.119:8080/v1/graphql"
next_public_rpc_wss_url = "wss://35.209.247.183:26657/websocket"
next_public_chain_type = "testnet"
node_env = "development"
port = 3000
github_owner = "villagelabsco"
github_repo_name = "big-dipper-2.0-cosmos"
github_push_trigger_branch = "staging"
bigdipper_cloudbuild_sa_roles = [
  "roles/cloudbuild.builds.builder",
  "roles/iam.serviceAccountUser",
  "roles/run.admin"
]
