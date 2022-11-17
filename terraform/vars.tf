variable "name" {
  type = string
}

variable "environment" {
  type = string
}

variable "github_owner" {
  type = string
}

variable "github_repo_name" {
  type = string
}

variable "github_push_trigger_branch" {
  type = string
}

variable "next_public_graphql_url" {
  type = string
}

variable "next_public_graphql_wss_url" {
  type = string
}

variable "next_public_rpc_wss_url" {
  type = string
}

variable "next_public_chain_type" {
  type = string
}

variable "node_env" {
  type = string
}

variable "port" {
  type = string
}

variable "bigdipper_cloudbuild_sa_roles" {
  type = list(string)
}
