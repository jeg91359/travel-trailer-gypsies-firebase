import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class BlogpostService {
  constructor(private firestore: AngularFirestore) {}

  getBlogPost(id: string) {
    return this.firestore.collection("blogposts").doc(id).snapshotChanges();
  }

  getBlogPostComments(id: string) {
    return this.firestore
      .collection("blogposts")
      .doc(id)
      .collection("comments")
      .get();
  }

  postComment(id: string) {
    console.log("Made it here!");
    this.firestore.collection("blogposts/" + id + "/comments").add({
      creator_name: "Eloisa Garoutte",
      content: "I love this guy!",
      created_date: new Date(),
    });
  }
}
