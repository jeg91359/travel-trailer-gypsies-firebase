import { Component, OnInit, OnDestroy } from "@angular/core";
import * as Rellax from "rellax";
import { ActivatedRoute } from "@angular/router";
import { BlogpostService } from "../services/blogpost.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireAuth } from "@angular/fire/auth";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-blogpost",
  templateUrl: "./blogpost.component.html",
  styleUrls: ["./blogpost.component.scss"],
})
export class BlogpostComponent implements OnInit, OnDestroy {
  data: Date = new Date();

  focus;
  blog;
  comments;
  user;
  id;
  i;

  constructor(
    private route: ActivatedRoute,
    private blogpostService: BlogpostService,
    private storage: AngularFireStorage,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        this.user = user;
      }
    });

    let storage = this.storage;
    let id = this.route.snapshot.paramMap.get("id");
    this.id = id;
    this.blogpostService.getBlogPost(id).subscribe((data) => {
      let blog = data.payload.data();

      const ref0 = storage.ref(blog["page_header_image"]);
      ref0.getDownloadURL().subscribe((data) => {
        blog["page_header_image_url"] = data;
      });

      const ref1 = storage.ref(blog["image_left"]);
      ref1.getDownloadURL().subscribe((data) => {
        blog["image_left_url"] = data;
      });

      const ref2 = storage.ref(blog["image_left_bottom"]);
      ref2.getDownloadURL().subscribe((data) => {
        blog["image_left_bottom_url"] = data;
      });

      const ref3 = storage.ref(blog["image_right"]);
      ref3.getDownloadURL().subscribe((data) => {
        blog["image_right_url"] = data;
      });

      this.blog = blog;

      blog["comments"] = [];
      let comments = blog["comments"];
      this.comments = comments;

      this.blogpostService.getBlogPostComments(id).subscribe((data) => {
        let i = 0;

        data.forEach((doc) => {
          this.comments.push(doc.data());

          if (this.comments[i].created_date != null) {
            this.comments[i].created_date = this.comments[
              i
            ].created_date.toDate();
          }
          i++;
        });
      });
    });

    var rellaxHeader = new Rellax(".rellax-header");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("blog-post");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }

  onAddComment(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.blogpostService.postComment(this.id, this.user.displayName, form.value.content, this.user.photoURL);
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("blog-post");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }
}
