locals {
  gcr_node_image_url = "us-docker.pkg.dev/${var.gcp_project}/${var.name}:latest"
}

resource "google_service_account" "bigdipper_cloudbuild_sa" {
  project = var.gcp_project
  account_id = "${var.name}-${var.environment}-cb-svc-acc"
}

resource "google_project_iam_member" "chain_node_cloud_build_sa_iam" {
  project = var.gcp_project
  count = length(var.bigdipper_cloudbuild_sa_roles)
  role = var.bigdipper_cloudbuild_sa_roles[count.index]
  member = "serviceAccount:${google_service_account.bigdipper_cloudbuild_sa.email}"
}

resource "google_cloudbuild_trigger" "bigdipper_build_deploy_trigger" {
  project = var.gcp_project
  service_account = google_service_account.bigdipper_cloudbuild_sa.name

  name = "${var.name}-${var.environment}-build"

  github {
    owner = var.github_owner
    name  = var.github_repo_name

    push {
      branch = var.github_push_trigger_branch
    }
  }
  ignored_files = [".gitignore"]

  substitutions = {
    _NEXT_PUBLIC_GRAPHQL_URL = var.next_public_graphql_url
    _NEXT_PUBLIC_GRAPHQL_WS_URL = var.next_public_graphql_wss_url
    _NEXT_PUBLIC_RPC_WEBSOCKET = var.next_public_rpc_wss_url
    _NEXT_PUBLIC_CHAIN_TYPE = var.next_public_chain_type
    _NODE_ENV = var.node_env
    _PORT = var.port
  }

  filename = "./cloudbuild.yml"
}
