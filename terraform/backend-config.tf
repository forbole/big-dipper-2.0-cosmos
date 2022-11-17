terraform {
  backend "gcs" {
    bucket = "bigdipper-tf"
    prefix = "state"
  }
  required_providers {
    google-beta = {
        source = "hashicorp/google-beta"
        version = "4.43.0"
    }
  }
}

provider "google-beta" {
  project = var.gcp_project
    region  = var.gcp_region
}
