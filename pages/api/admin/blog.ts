import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from 'octokit'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
const owner = 'DartonStaker'
const repo = 'green-street-elite'
const branch = 'main'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // If filename is provided, fetch a single post
      const { filename } = req.query
      if (filename) {
        const ghRes = await octokit.request('GET /repos/{owner}/{repo}/contents/content/{filename}', {
          owner, repo, path: `content/${filename}`, ref: branch,
        })
        return res.status(200).json(ghRes.data)
      }
      // List blog posts
      const ghRes = await octokit.request('GET /repos/{owner}/{repo}/contents/content', {
        owner, repo, ref: branch,
      })
      const files = (ghRes.data as any[]).filter(f => f.name.endsWith('.md') || f.name.endsWith('.mdx'))
      return res.status(200).json(files)
    }
    if (req.method === 'POST') {
      // Create blog post
      const { filename, content } = req.body
      const ghRes = await octokit.request('PUT /repos/{owner}/{repo}/contents/content/{filename}', {
        owner, repo, path: `content/${filename}`, message: `Create blog post: ${filename}`, content: Buffer.from(content).toString('base64'), branch,
      })
      return res.status(200).json(ghRes.data)
    }
    if (req.method === 'PUT') {
      // Update blog post
      const { filename, content, sha } = req.body
      const ghRes = await octokit.request('PUT /repos/{owner}/{repo}/contents/content/{filename}', {
        owner, repo, path: `content/${filename}`, message: `Update blog post: ${filename}`, content: Buffer.from(content).toString('base64'), branch, sha,
      })
      return res.status(200).json(ghRes.data)
    }
    if (req.method === 'DELETE') {
      // Delete blog post
      const { filename, sha } = req.body
      const ghRes = await octokit.request('DELETE /repos/{owner}/{repo}/contents/content/{filename}', {
        owner, repo, path: `content/${filename}`, message: `Delete blog post: ${filename}`, branch, sha,
      })
      return res.status(200).json(ghRes.data)
    }
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err: any) {
    return res.status(500).json({ error: err.message })
  }
} 