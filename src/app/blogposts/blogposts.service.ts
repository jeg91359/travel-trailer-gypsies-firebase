import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class BlogpostsService {
  constructor(private firestore: AngularFirestore) {}

  getBlogPosts() {
    return this.firestore.collection("blogposts").snapshotChanges();
  }
}
