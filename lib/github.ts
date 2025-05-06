import { Octokit } from "octokit"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const owner = "DartonStaker"
const repo = "green-street-elite"
const branch = "main"

export async function listBlogPosts() {
  const res = await octokit.request('GET /repos/{owner}/{repo}/contents/content', {
    owner,
    repo,
    ref: branch,
  })
  return res.data.filter((file: any) => file.name.endsWith('.md') || file.name.endsWith('.mdx'))
}

export async function getBlogPost(filename: string) {
  const res = await octokit.request('GET /repos/{owner}/{repo}/contents/content/{filename}', {
    owner,
    repo,
    path: `content/${filename}`,
    ref: branch,
  })
  return res.data
}

export async function createOrUpdateBlogPost(filename: string, content: string, sha?: string) {
  const message = sha ? `Update blog post: ${filename}` : `Create blog post: ${filename}`
  const res = await octokit.request('PUT /repos/{owner}/{repo}/contents/content/{filename}', {
    owner,
    repo,
    path: `content/${filename}`,
    message,
    content: Buffer.from(content).toString('base64'),
    branch,
    sha,
  })
  return res.data
}

export async function deleteBlogPost(filename: string, sha: string) {
  const res = await octokit.request('DELETE /repos/{owner}/{repo}/contents/content/{filename}', {
    owner,
    repo,
    path: `content/${filename}`,
    message: `Delete blog post: ${filename}`,
    branch,
    sha,
  })
  return res.data
} 