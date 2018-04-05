import { Injectable } from '@angular/core';
import { Post, Type } from '../Entidades/post';
import { Persona } from '../Entidades/persona';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';
import { SERVER, IMG_USER_PATH } from '../../../app.constants';
import { PersonaServiceService } from './persona-service.service';

@Injectable()
export class HistorietasService {

  constructor(private http: HttpClient, private personaService: PersonaServiceService) {
   }

  // Get all post
  getAllPost(): Observable<Post[]> {
    return this.http.get(`${SERVER}post`).map((post: Post[]) => {
      post.map(p => {
        let isLike = false;
        let typeLike = Type.COOL;
        p.likes.map( like => {
          if (like.creator.id == this.personaService.user.id) {
            isLike = true;
            typeLike = like.type;
          }
        });
        p.likeMe = isLike;
        p.like = typeLike;

        console.log(post);
        p.creator.picture = 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg';
        //p.creator.picture = `${IMG_USER_PATH}${p.creator.picture}`;
        return p;
      })
      return post;

    }).catch(error => Observable.throw(error));
  }

  // Get my post
  getMyPost(): Observable<Post []> {
    return this.http.get(`${SERVER}post/mine`).map((post: Post[]) => {
      post.map(p => {
        p.creator.picture = 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg';
        //p.creator.picture = `${IMG_USER_PATH}${p.creator.picture}`;
        return p;
      })
      return post;

    }).catch(error => Observable.throw(error));
  }

  // Get a concrete post
  getPost(id: number): Observable<Post> {
    return this.http.get(`${SERVER}post/${id}`)
      .map((post: Post) => {
        console.log(post);
        //post.creator.picture = `${IMG_USER_PATH}${post.creator.picture}`;   
        post.creator.picture = 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg';
        return post;
      }).catch(error => Observable.throw(error));
  }

  // Get all the post of a concrete person
  getPersonPost(id: number): Observable<Post[]> {
    return this.http.get(`${SERVER}post/person/${id}`)
      .map((post: Post[]) => {
        post.map(p => {
          console.log(post);
          p.creator.picture = 'https://3.bp.blogspot.com/-MFEE2ap2mqA/VB1NwuQ2oiI/AAAAAAAAAQU/U2s0JLanKGg/s1600/franki3.jpg';
          //p.creator.picture = `${IMG_USER_PATH}${p.creator.picture}`;
          return p;
        })
        return post;
      }).catch(error => Observable.throw(error));
  }

  // Save post
  savePost(post: Post) : Observable<{}>{
    //let body = JSON.stringify(post);
    return this.http.post(`${SERVER}post`, post)
      .catch(error => {
        throw(error)
      });
  }

  //Update post
  updatePost(post: Post) : Observable<{}> {
    return this.http.put(`${SERVER}post/${post.id}`, post)
    .catch(error => {
      throw(error)
    });
  }

  //Report post
  reportPost(post: Post) : Observable<{}> {
    return this.http.put(`${SERVER}post/reported/${post.id}`, post)
    .catch(error => {
      throw(error)
    });
  }

  //Unreport post
  unReportPost(post: Post) : Observable<{}> {
    return this.http.put(`${SERVER}post/unreported/${post.id}`, post)
    .catch(error => {
      throw(error)
    });
  }

  //AddLike
  addType(post: Post) : Observable<{}> {
    return this.http.put(`${SERVER}post/${post.id}/tipe`, post)
    .catch(error => {
      throw(error)
    });
  }

  //Delete post
  deletePost(id: number) {
    return this.http.delete(`${SERVER}post/${id}`)
    .catch(error => {
      throw(error)
    });
  }

  getReportedPost(): Observable<Post[]> {
    return this.http.get(`${SERVER}post/reported`).map( (posts: Post[]) => posts );
  }

  confirmReport(id: number): Observable<boolean> {
    return this.http.delete(`${SERVER}post/reported/${id}`).map(
      () => true
    ).catch( () => Observable.of(false) );
  }

  unreport(id: number) {
    return this.http.put(`${SERVER}post/unreported/${id}`, '').map(
      response => true
    ).catch( () => Observable.of(false) );
  }

}
