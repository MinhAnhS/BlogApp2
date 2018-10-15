import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [BlogService]
})

export class BlogListComponent implements OnInit {

  blogs: Blog[]
  selectedBlog: Blog

  constructor(private blogService: BlogService) { }

  ngOnInit() {
     this.blogService
      .getBlogs()
      .then((blogs: Blog[]) => {
        this.blogs = blogs.map((blog) => {
          if (!blog.doc) {
            blog.doc = {
              author: '',
              content: ''
            }
          }
          return blog;
        });
      });
  }

  private getIndexOfBlog = (blogId: String) => {
    return this.blogs.findIndex((blog) => {
      return blog._id === blogId;
    });
  }

  selectBlog(blog: Blog) {
    this.selectedBlog = blog
  }

  createNewBlog() {
    var blog: Blog = {
      name: '',
      doc: {
        author: '',
        content: '',
        } 
    };

    // By default, a newly-created contact will have the selected state.
    this.selectBlog(blog);
  }

  deleteBlog = (blogId: String) => {
    var idx = this.getIndexOfBlog(blogId);
    if (idx !== -1) {
      this.blogs.splice(idx, 1);
      this.selectBlog(null);
    }
    return this.blogs;
  }

  addBlog = (blog: Blog) => {
    this.blogs.push(blog);
    this.selectBlog(blog);
    return this.blogs;
  }

  updateBlog = (blog: Blog) => {
    var idx = this.getIndexOfBlog(blog._id);
    if (idx !== -1) {
      this.blogs[idx] = blog;
      this.selectBlog(blog);
    }
    return this.blogs;
  }
}
