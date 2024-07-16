import { Component, OnInit } from '@angular/core';
import { InstagramMediaService } from 'src/app/Services/instagram-media.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  posts: any;

  constructor(private instagramMediaService: InstagramMediaService) { }

  ngOnInit(): void {
    this.instagramMediaService.getAllInstagramPosts().subscribe(
      data=>{
        this.posts=data;
        console.log(data)
      }
    )
  }

}
