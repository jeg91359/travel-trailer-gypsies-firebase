import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class BlogpostsService {
  constructor(private firestore: AngularFirestore) {}

  getBlogPosts() {
    let blogpostsCollectionRef = this.firestore.collection("blogposts", (ref) =>
      ref.orderBy("cron_order")
    );
    //return this.firestore.collection("blogposts").snapshotChanges();
    return blogpostsCollectionRef.snapshotChanges();
  }
}
