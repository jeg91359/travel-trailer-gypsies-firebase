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

  postComment(
    id: string,
    displayName: string,
    content: string,
    photoURL: string
  ) {
    console.log("Made it to the service!");
    this.firestore.collection("blogposts/" + id + "/comments").add({
      creator_name: displayName,
      content: content,
      creator_image: photoURL,
      created_date: new Date(),
    });
  }

  editComment(
    id: string,
    content: string
    ) {
    this.firestore
      .collection("comments")
      .doc(id)
      .update({
        content: content,
      })
      .then(() => {
        // this.snackBar.open("Job was updated successfully", "Ok", {
        //   duration: 2000,
        // });
      });
  }
}
