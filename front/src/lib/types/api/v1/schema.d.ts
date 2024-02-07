/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/post-comment/{postId}/comment/{commentId}": {
    /** 댓글 수정 */
    put: operations["modify"];
    /** 댓글 삭제 */
    delete: operations["delete"];
  };
  "/api/member": {
    /** 내 정보 조회 */
    get: operations["detailMember"];
    /** 내 정보 수정 */
    put: operations["modifyMember"];
  };
  "/api/member/social": {
    /** 최초 소셜로그인 - 필수 회원정보 입력 */
    put: operations["updateSocialMember"];
  };
  "/api/job-posts/{id}": {
    /** 구인공고 단건 조회 */
    get: operations["showDetailPost"];
    /** 구인공고 수정 */
    put: operations["modifyPost"];
    /** 구인공고 삭제 */
    delete: operations["deleteJobPost"];
  };
  "/api/employ/{postId}/{applicationIds}": {
    /** 지원서 승인 */
    put: operations["approve"];
  };
  "/api/applications/{id}": {
    /** 지원서 상세 내용 */
    get: operations["detailApplication"];
    /** 지원서 수정 */
    put: operations["modifyApplication"];
    /** 지원서 작성 */
    post: operations["writeApplication"];
    /** 지원서 삭제 */
    delete: operations["deleteApplication"];
  };
  "/api/token": {
    post: operations["createNewAccessToken"];
  };
  "/api/post-comment/{postId}/comment": {
    /** 댓글 작성 */
    post: operations["write"];
  };
  "/api/member/login": {
    /** 로그인, accessToken 쿠키 생성됨 */
    post: operations["login"];
  };
  "/api/member/join": {
    /** 회원가입 */
    post: operations["join"];
  };
  "/api/job-posts": {
    /** 구인공고 글 목록 가져오기 */
    get: operations["findAllPost"];
    /** 구인공고 작성 */
    post: operations["writePost"];
  };
  "/api/job-posts/{id}/interest": {
    /** 구인공고 관심 등록 */
    post: operations["increase"];
    /** 구인공고 관심 제거 */
    delete: operations["disinterest"];
  };
  "/member/socialLogin/{providerTypeCode}": {
    /** 소셜 로그인 */
    get: operations["socialLogin"];
  };
  "/api/post-comment/{postId}": {
    /** 해당 공고에 달린 댓글 목록 */
    get: operations["findByPostId"];
  };
  "/api/member/myposts": {
    /** 내 공고 조회 */
    get: operations["detailMyPosts"];
  };
  "/api/member/myinterest": {
    /** 내 관심 공고 조회 */
    get: operations["detailMyInterestingPosts"];
  };
  "/api/member/mycomments": {
    /** 내 댓글 조회 */
    get: operations["detailMyComments"];
  };
  "/api/member/myapplications": {
    /** 내 지원서 조회 */
    get: operations["detailMyApplications"];
  };
  "/api/job-posts/sort": {
    /** 구인공고 글 목록 정렬 */
    get: operations["findAllPostSort"];
  };
  "/api/job-posts/search": {
    /** 게시물 검색 */
    get: operations["searchJobPostsByTitleAndBody"];
  };
  "/api/employ/{postId}": {
    /** 공고 별 지원리스트 */
    get: operations["getList"];
  };
  "/api/job-posts/{id}/deadline": {
    /** 공고 마감 */
    delete: operations["deadline"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Register: {
      content: string;
    };
    Modify: {
      /** @enum {string} */
      gender?: "MALE" | "FEMALE" | "UNDEFINED";
      location?: string;
      /** Format: date */
      birth?: string;
      password?: string;
    };
    SocialProfileForm: {
      name: string;
      phoneNumber: string;
      /** @enum {string} */
      gender?: "MALE" | "FEMALE" | "UNDEFINED";
      location: string;
      /** Format: date */
      birth: string;
    };
    MemberDto: {
      /** Format: int64 */
      id: number;
      username: string;
      /** @enum {string} */
      gender?: "MALE" | "FEMALE" | "UNDEFINED";
      location?: string;
      /** Format: date */
      birth?: string;
      name?: string;
      phoneNumber?: string;
    };
    RsDataMemberDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["MemberDto"];
      success?: boolean;
      fail?: boolean;
    };
    CreateAccessTokenRequest: {
      refreshToken?: string;
    };
    CreateAccessTokenResponse: {
      accessToken?: string;
    };
    RsDataCreateAccessTokenResponse: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["CreateAccessTokenResponse"];
      success?: boolean;
      fail?: boolean;
    };
    RsDataURI: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      /** Format: uri */
      data?: string;
      success?: boolean;
      fail?: boolean;
    };
    LoginForm: {
      username: string;
      password: string;
    };
    RsDataString: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: string;
      success?: boolean;
      fail?: boolean;
    };
    JoinForm: {
      username: string;
      password: string;
      name: string;
      phoneNumber: string;
      /** @enum {string} */
      gender?: "MALE" | "FEMALE" | "UNDEFINED";
      location: string;
      /** Format: date */
      birth: string;
    };
    CommentDto: {
      /** Format: int64 */
      id: number;
      /** Format: int64 */
      jobPostId: number;
      author: string;
      content: string;
      /** Format: date-time */
      createAt: string;
      /** Format: date-time */
      modifyAt: string;
    };
    RsDataListCommentDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["CommentDto"][];
      success?: boolean;
      fail?: boolean;
    };
    JobPostDto: {
      /** Format: int64 */
      id: number;
      author: string;
      title: string;
      location: string;
      /** Format: int64 */
      commentsCount: number;
      /** Format: int64 */
      incrementViewCount: number;
      /** Format: date */
      deadLine?: string;
      createdAt: string;
    };
    RsDataListJobPostDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["JobPostDto"][];
      success?: boolean;
      fail?: boolean;
    };
    ApplicationDto: {
      /** Format: int64 */
      id?: number;
      author?: string;
      /** Format: int64 */
      postId?: number;
      body?: string;
      /** Format: date-time */
      createdAt?: string;
      approve?: boolean;
    };
    RsDataListApplicationDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["ApplicationDto"][];
      success?: boolean;
      fail?: boolean;
    };
    JobPostDetailDto: {
      /** Format: int64 */
      id: number;
      author: string;
      title: string;
      location: string;
      /** Format: int64 */
      commentsCount: number;
      /** Format: int64 */
      incrementViewCount: number;
      /** Format: date */
      deadLine?: string;
      createdAt: string;
      body: string;
      /** Format: int64 */
      applicationCount?: number;
      /** Format: int64 */
      interestsCount?: number;
      /** Format: int32 */
      minAge?: number;
      /** @enum {string} */
      gender?: "MALE" | "FEMALE" | "UNDEFINED";
      modifyAt?: string;
      closed?: boolean;
    };
    RsDataJobPostDetailDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["JobPostDetailDto"];
      success?: boolean;
      fail?: boolean;
    };
    PageJobPostDto: {
      /** Format: int64 */
      totalElements?: number;
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      size?: number;
      content?: components["schemas"]["JobPostDto"][];
      /** Format: int32 */
      number?: number;
      sort?: components["schemas"]["SortObject"];
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      pageable?: components["schemas"]["PageableObject"];
      empty?: boolean;
    };
    PageableObject: {
      /** Format: int64 */
      offset?: number;
      sort?: components["schemas"]["SortObject"];
      /** Format: int32 */
      pageSize?: number;
      /** Format: int32 */
      pageNumber?: number;
      paged?: boolean;
      unpaged?: boolean;
    };
    RsDataPageJobPostDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["PageJobPostDto"];
      success?: boolean;
      fail?: boolean;
    };
    SortObject: {
      empty?: boolean;
      sorted?: boolean;
      unsorted?: boolean;
    };
    RsDataApplicationDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["ApplicationDto"];
      success?: boolean;
      fail?: boolean;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** 댓글 수정 */
  modify: {
    parameters: {
      path: {
        postId: number;
        commentId: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Register"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 댓글 삭제 */
  delete: {
    parameters: {
      path: {
        postId: number;
        commentId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 내 정보 조회 */
  detailMember: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataMemberDto"];
        };
      };
    };
  };
  /** 내 정보 수정 */
  modifyMember: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Modify"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 최초 소셜로그인 - 필수 회원정보 입력 */
  updateSocialMember: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SocialProfileForm"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataMemberDto"];
        };
      };
    };
  };
  /** 구인공고 단건 조회 */
  showDetailPost: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataJobPostDetailDto"];
        };
      };
    };
  };
  /** 구인공고 수정 */
  modifyPost: {
    parameters: {
      path: {
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Modify"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 구인공고 삭제 */
  deleteJobPost: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 지원서 승인 */
  approve: {
    parameters: {
      path: {
        postId: number;
        applicationIds: number[];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 지원서 상세 내용 */
  detailApplication: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataApplicationDto"];
        };
      };
    };
  };
  /** 지원서 수정 */
  modifyApplication: {
    parameters: {
      path: {
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Modify"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 지원서 작성 */
  writeApplication: {
    parameters: {
      path: {
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Register"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataURI"];
        };
      };
    };
  };
  /** 지원서 삭제 */
  deleteApplication: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  createNewAccessToken: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateAccessTokenRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataCreateAccessTokenResponse"];
        };
      };
    };
  };
  /** 댓글 작성 */
  write: {
    parameters: {
      path: {
        postId: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Register"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataURI"];
        };
      };
    };
  };
  /** 로그인, accessToken 쿠키 생성됨 */
  login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginForm"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataString"];
        };
      };
    };
  };
  /** 회원가입 */
  join: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["JoinForm"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataURI"];
        };
      };
    };
  };
  /** 구인공고 글 목록 가져오기 */
  findAllPost: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListJobPostDto"];
        };
      };
    };
  };
  /** 구인공고 작성 */
  writePost: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Register"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataURI"];
        };
      };
    };
  };
  /** 구인공고 관심 등록 */
  increase: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 구인공고 관심 제거 */
  disinterest: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 소셜 로그인 */
  socialLogin: {
    parameters: {
      query: {
        redirectUrl: string;
      };
      path: {
        providerTypeCode: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  /** 해당 공고에 달린 댓글 목록 */
  findByPostId: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListCommentDto"];
        };
      };
    };
  };
  /** 내 공고 조회 */
  detailMyPosts: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListJobPostDto"];
        };
      };
    };
  };
  /** 내 관심 공고 조회 */
  detailMyInterestingPosts: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListJobPostDto"];
        };
      };
    };
  };
  /** 내 댓글 조회 */
  detailMyComments: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListCommentDto"];
        };
      };
    };
  };
  /** 내 지원서 조회 */
  detailMyApplications: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListApplicationDto"];
        };
      };
    };
  };
  /** 구인공고 글 목록 정렬 */
  findAllPostSort: {
    parameters: {
      query?: {
        page?: number;
        sortBy?: string[];
        sortOrder?: string[];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataPageJobPostDto"];
        };
      };
    };
  };
  /** 게시물 검색 */
  searchJobPostsByTitleAndBody: {
    parameters: {
      query?: {
        titleOrBody?: string;
        title?: string;
        body?: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["JobPostDto"][];
        };
      };
    };
  };
  /** 공고 별 지원리스트 */
  getList: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListApplicationDto"];
        };
      };
    };
  };
  /** 공고 마감 */
  deadline: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
}
