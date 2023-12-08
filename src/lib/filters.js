export function by_author (posts, author_slug) {
    return posts.filter((post) => {
        return post.author_slug === author_slug
    })
}

export function by_topic (posts, topic_slug) {
    return posts.filter((post) => {
        return post.topics.include(topic_slug)
    })
}
