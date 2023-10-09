import { defineCollection, reference, z } from "astro:content";

// Defining the parent schema
const parent = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        color: z.string(),
        description: z.string().optional(),
        courses: z.array(reference('courses')),
        pubDate: z.string()
    })
})

// Define the schema for courses
const courses = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.string(),
        resources: z.object({
            relatedPosts: z.array(reference('posts')).optional(),
            videos: z.array(z.object({
                creator: z.string(),
                channel: z.string(),
                link: z.string(),
                miniLink: z.string(),
            }))
        })
    })
})

// Define the schema for posts
const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date()
    })
})

export const collections = {
    posts,
    courses,
    parent
}