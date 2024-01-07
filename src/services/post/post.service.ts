import { HttpResponse } from './../../data/shared/http.response.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from './Dto/post.dto';
import { QueryDto } from '../utils/dto';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(newPost: PostDto): Observable<HttpResponse<PostDto[]>> {
    return this.http.post<HttpResponse<PostDto[]>>(
      'https://dummyapi.io/data/v1/post/create',
      newPost
    );
  }

  getPosts(
    query: QueryDto = { keyword: '', page: 1, limit: 10 }
  ): Observable<HttpResponse<PostDto[]>> {
    return this.http.get<HttpResponse<PostDto[]>>(
      `https://dummyapi.io/data/v1/post?limit=${query.limit}?page=${query.page}?keyword=${query.keyword}`
    );
  }

  getPost(postId: string): Observable<HttpResponse<PostDto>> {
    return this.http.get<HttpResponse<PostDto>>(
      `https://dummyapi.io/data/v1/post/${postId}`
    );
  }

  deletePost(postId: string): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<PostDto>>(
      `https://dummyapi.io/data/v1/post/${postId}`
    );
  }

  UpdatePost(
    postId: string,
    updatedPost: PostDto
  ): Observable<HttpResponse<PostDto[]>> {
    return this.http.put<HttpResponse<PostDto[]>>(
      `https://dummyapi.io/data/v1/post/${postId}`,
      updatedPost
    );
  }
}
