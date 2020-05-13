import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BlogpostService } from './blogpost.service';
import { NgControlStatus } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit, OnDestroy {
  data: Date = new Date();

  focus;
  blog;

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    let storage = this.storage;
    let id = this.route.snapshot.paramMap.get("id");
      this.blogpostService.getBlogPost(id).subscribe(data => {
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
      });

    var rellaxHeader = new Rellax('.rellax-header');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('blog-post');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('blog-post');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
