import { Component, Input } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})

export class BlogDetailsComponent {
  @Input()
  blog: Blog;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private blogService: BlogService) {}

  createBlog(blog: Blog) {
    this.blogService.createBlog(blog).then((newBlog: Blog) => {
      this.createHandler(newBlog);
    });
  }

  updateBlog(blog: Blog): void {
    this.blogService.updateBlog(blog).then((updatedBlog: Blog) => {
      this.updateHandler(updatedBlog);
    });
  }

  deleteBlog(blogId: String): void {
    this.blogService.deleteBlog(blogId).then((deletedBlogId: String) => {
      this.deleteHandler(deletedBlogId);
    });
  }
}