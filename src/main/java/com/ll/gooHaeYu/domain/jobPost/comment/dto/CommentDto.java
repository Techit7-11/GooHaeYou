package com.ll.gooHaeYu.domain.jobPost.comment.dto;

import com.ll.gooHaeYu.domain.jobPost.comment.entity.Comment;
import com.ll.gooHaeYu.domain.jobPost.jobPost.entity.JobPost;
import com.ll.gooHaeYu.domain.member.member.entity.Member;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
public class CommentDto {

    private Long id;
    private Long jobPostId;
    private String author;
    private String content;
    private LocalDateTime createAt;
    private LocalDateTime modifyAt;

    public static CommentDto formEntity(Comment comment) {
        return CommentDto.builder()
                .id(comment.getId())
                .jobPostId(comment.getJobPost().getId())
                .author(comment.getMember().getUsername())
                .content(comment.getContent())
                .createAt(comment.getCreatedAt())
                .modifyAt(comment.getModifiedAt())
                .build();
    }

    public static List<CommentDto> toDtoList(List<Comment> comments) {
        return comments.stream()
                .map(CommentDto::formEntity)
                .toList();
    }
}
