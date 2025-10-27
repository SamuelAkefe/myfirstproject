output "frontend_bucket_name" {
  value       = aws_s3_bucket.frontend.id
  description = "S3 bucket name for frontend assets (private)"
}

output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.frontend.id
  description = "CloudFront distribution id"
}

output "cloudfront_domain_name" {
  value       = aws_cloudfront_distribution.frontend.domain_name
  description = "cloudfront_domain_name (use this to access the site)"
}