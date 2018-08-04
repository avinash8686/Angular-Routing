import { Component, OnInit } from '@angular/core';

// For getting the blog id we need to import route related code.
// Importing route related code
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  // Declare a dummy blog variable here.
  public allBlogs = [
    {

      author: "Shahrukh Sayyed",
      imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/theguywithideas/blog/home-bg.jpg',
      bodyHtml: "Let's start!",
      subHeading: "What it mean?",
      heading: "Let's talk about e-commerce",
      created: "2018-03-08T03:14:47.036Z",
      blogId: "1",
      tags: ['flipkart', 'amazon']
    },
    {

      author: "Amit",
      imageUrl: "https://s3-ap-southeast-1.amazonaws.com/theguywithideas/blog/home-bg.jpg",
      bodyHtml: '<a href="http://tutorials.jenkov.com/angularjs/views-and-directives.html">Click here</a>',
      subHeading: "Link",
      heading: "Jenkov Link",
      created: "2018-03-08T07:58:20.300Z",
      blogId: "2",
      tags: []
    },
    {

      author: "ravi bhagat",
      imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/theguywithideas/blog/home-bg.jpg',
      bodyHtml: "hello guys",
      subHeading: "testing and deleting",
      heading: "Testing Blog",
      created: "2018-05-29T11:44:08.880Z",
      blogId: "3",
      tags: ['Unit', 'Automation']
    }
  ];
  constructor(private _route: ActivatedRoute, private router:Router) {
    console.log("constructor is called");
   }

  ngOnInit() {
    console.log("ng On init is called");
    // From the route related code.
    // We are getting the blog id from route.
    
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.getSingleBlogId(myBlogId);
  }

  public getSingleBlogId(currentBlogId):any {
    for(let blog of this.allBlogs){
      if (blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
  }

}
