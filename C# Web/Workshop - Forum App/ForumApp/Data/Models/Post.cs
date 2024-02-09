﻿using System.ComponentModel.DataAnnotations;
using static ForumApp.Data.Constants.DataConstants;


namespace ForumApp.Data.Models
{
    public class Post
    {
        [Key]
        public int Id { get; init; }

        [Required]
        [MaxLength(TitleMaxLength)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(ContentMaxLength)]
        public string Content { get; set; } = string.Empty;

    }
}
