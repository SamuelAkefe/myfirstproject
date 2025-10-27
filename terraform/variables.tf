variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "project_name" {
  type    = string
  default = "ayomikun-web-app"
}

variable "environment" {
  type    = string
  default = "dev"
}

variable "frontend_bucket_name" {
  type        = string
  description = "Globally-unique S3 bucket name for frontend assets (no underscores)"
  default     = "ayomikun-web-app-frontend"
}

variable "cloudfront_price_class" {
  type    = string
  default = "PriceClass_100"
}
