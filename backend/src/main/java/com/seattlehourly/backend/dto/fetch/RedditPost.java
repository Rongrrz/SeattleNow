package com.seattlehourly.backend.dto.fetch;

public record RedditPost(
        String title,
        String subreddit,
        int comments,
        String url,
        String timeAgo,
        long created_utc
) {}