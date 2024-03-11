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
  "/api/notification/{id}": {
    /** 알림 읽음 처리 */
    put: operations["read"];
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
  "/api/job-posts/{id}/closing": {
    /** 조기 마감 */
    put: operations["postEarlyClosing"];
  };
  "/api/chat/{roomId}": {
    /** 채팅방 입장 */
    get: operations["showRoom"];
    /** 채팅방 퇴장 */
    put: operations["exitsRoom"];
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
  "/batch": {
    post: operations["runBatch"];
  };
  "/api/post-comment/{postId}/comment": {
    /** 댓글 작성 */
    post: operations["write"];
  };
  "/api/payments": {
    /** 결제 요청 */
    post: operations["requestTossPayments"];
  };
  "/api/payments/cancel": {
    /** 결제 취소 */
    post: operations["tossPaymentCancel"];
  };
  "/api/member/review/{jobPostingId}": {
    /** 지원자 리뷰 작성 */
    post: operations["createReview"];
  };
  "/api/member/logout": {
    /** 로그아웃 처리 및 쿠키 삭제 */
    post: operations["logout"];
  };
  "/api/member/login": {
    /** 로그인, accessToken, refreshToken 쿠키 생성됨 */
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
    post: operations["interest"];
    /** 구인공고 관심 제거 */
    delete: operations["disinterest"];
  };
  "/api/chat/{roomId}/message": {
    /** 채팅 메세지 로드 */
    get: operations["writeChat_1"];
    /** 채팅 생성 */
    post: operations["writeChat"];
  };
  "/api/jobs/complete/{applicationId}/manually": {
    /** 구인자가 수동으로 알바완료 처리 */
    patch: operations["completeJobManually"];
  };
  "/api/employ/{postId}/{applicationIds}": {
    /** 지원서 승인 */
    patch: operations["approve"];
  };
  "/ready": {
    get: operations["isReady"];
  };
  "/member/socialLogin/{providerTypeCode}": {
    /** 소셜 로그인 */
    get: operations["socialLogin"];
  };
  "/api/post-comment/{postId}": {
    /** 해당 공고에 달린 댓글 목록 */
    get: operations["findByPostId"];
  };
  "/api/payments/success": {
    /** 결제 성공 */
    get: operations["tossPaymentSuccess"];
  };
  "/api/payments/fail": {
    /** 결제 실패 */
    get: operations["tossPaymentFail"];
  };
  "/api/notification": {
    /** 유저 별 알림리스트 */
    get: operations["getList"];
  };
  "/api/notification/new": {
    /** 읽지 않은 알림 유무 확인 */
    get: operations["unreadNotification"];
  };
  "/api/member/review": {
    /** 나의 전체 리뷰 조회 */
    get: operations["getAllReviews"];
  };
  "/api/member/review/{id}": {
    /** 리뷰 단건 조회 */
    get: operations["getReviewById"];
    /** 리뷰 삭제 */
    delete: operations["deleteReview"];
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
  "/api/job-posts/{id}/members/interest": {
    /** 로그인한 유저의 해당 구인공고 관심 등록 여부 */
    get: operations["isInterested"];
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
    get: operations["getList_1"];
  };
  "/api/chat": {
    /** 채팅방 목록 */
    get: operations["showRoomList"];
  };
  "/": {
    get: operations["showMain"];
  };
  "/api/notification/read": {
    /** 읽은 알림 전부 삭제 */
    delete: operations["deleteReadAll"];
  };
  "/api/notification/all": {
    /** 알림 전부 삭제 */
    delete: operations["deleteAll"];
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
    RsDataVoid: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: Record<string, never>;
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
    };
    RsDataModify: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["Modify"];
    };
    RsDataRegister: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["Register"];
    };
    PaymentReqDto: {
      /** @enum {string} */
      payStatus: "REQUEST" | "CARD" | "EASY_PAY";
      /** Format: int64 */
      amount: number;
      orderId?: string;
      orderName?: string;
      /** Format: int64 */
      applicationId?: number;
    };
    PaymentResDto: {
      /** @enum {string} */
      payStatus: "REQUEST" | "CARD" | "EASY_PAY";
      /** Format: int64 */
      amount: number;
      orderId: string;
      orderName: string;
      payer: string;
      successUrl?: string;
      failUrl?: string;
      failReason?: string;
      canceled?: boolean;
      cancelReason?: string;
    };
    RsDataPaymentResDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["PaymentResDto"];
    };
    ApplicantReviewDto: {
      /** Format: int64 */
      id?: number;
      body?: string;
      /** Format: double */
      score?: number;
      /** Format: int64 */
      jobPostingId?: number;
      /** Format: int64 */
      applicantId?: number;
    };
    RsDataApplicantReviewDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["ApplicantReviewDto"];
    };
    LoginForm: {
      username: string;
      password: string;
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
    RsDataJoinForm: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["JoinForm"];
    };
    RsDataURI: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      /** Format: uri */
      data?: string;
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
    };
    PaymentSuccessDto: {
      paymentKey?: string;
      orderId?: string;
      orderName?: string;
      method?: string;
      /** Format: int32 */
      totalAmount?: number;
      approvedAt?: string;
      card?: components["schemas"]["SuccessCardDto"];
      easyPay?: components["schemas"]["SuccessEasyPayDto"];
    };
    RsDataPaymentSuccessDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["PaymentSuccessDto"];
    };
    SuccessCardDto: {
      company?: string;
      number?: string;
      installmentPlanMonths?: string;
      isInterestFree?: string;
      approveNo?: string;
      useCardPoint?: string;
      cardType?: string;
      acquireStatus?: string;
    };
    SuccessEasyPayDto: {
      provider?: string;
      /** Format: int32 */
      amount?: number;
      /** Format: int32 */
      discountAmount?: number;
    };
    PaymentFailDto: {
      errorCode?: string;
      errorMessage?: string;
      orderId?: string;
    };
    RsDataPaymentFailDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["PaymentFailDto"];
    };
    NotificationDto: {
      /** Format: int64 */
      id?: number;
      createAt?: string;
      toMember?: string;
      fromMember?: string;
      relPostTitle?: string;
      /** @enum {string} */
      causeTypeCode?: "POST_MODIFICATION" | "POST_DELETED" | "POST_INTERESTED" | "POST_DEADLINE" | "COMMENT_CREATED" | "APPLICATION_CREATED" | "APPLICATION_MODIFICATION" | "APPLICATION_APPROVED" | "APPLICATION_UNAPPROVE" | "CHATROOM_CREATED";
      /** @enum {string} */
      resultTypeCode?: "NOTICE" | "DELETE" | "APPROVE";
      seen?: boolean;
      url?: string;
    };
    RsDataListNotificationDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["NotificationDto"][];
    };
    RsDataBoolean: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: boolean;
    };
    RsDataListApplicantReviewDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["ApplicantReviewDto"][];
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
      /** Format: int64 */
      interestsCount: number;
      createdAt: string;
      employed: boolean;
      /** Format: date */
      deadLine?: string;
      closed?: boolean;
    };
    RsDataListJobPostDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["JobPostDto"][];
    };
    ApplicationDto: {
      /** Format: int64 */
      id: number;
      jobPostAuthorUsername: string;
      /** Format: int64 */
      jobPostId: number;
      jobPostName: string;
      /** Format: int32 */
      deposit: number;
      author: string;
      body: string;
      name: string;
      /** Format: date */
      birth: string;
      phone: string;
      location: string;
      depositStatus: string;
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
      /** Format: int64 */
      interestsCount: number;
      createdAt: string;
      employed: boolean;
      /** Format: date */
      deadLine?: string;
      body: string;
      /** Format: int64 */
      applicationCount?: number;
      /** Format: int32 */
      minAge?: number;
      /** @enum {string} */
      gender?: "MALE" | "FEMALE" | "UNDEFINED";
      modifiedAt?: string;
      interestedUsernames?: string[];
      /** Format: int32 */
      deposit?: number;
      workTime?: string;
      /** Format: int32 */
      cost?: number;
      /** @enum {string} */
      payBasis?: "UNDEFINED" | "TOTAL_HOURS" | "TOTAL_DAYS" | "TOTAL_PROJECTS";
      closed?: boolean;
    };
    RsDataJobPostDetailDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["JobPostDetailDto"];
    };
    GetPostsResponseBody: {
      itemPage: components["schemas"]["PageDtoJobPostDto"];
    };
    PageDtoJobPostDto: {
      /** Format: int64 */
      totalElementsCount: number;
      /** Format: int64 */
      pageElementsCount: number;
      /** Format: int64 */
      totalPagesCount: number;
      /** Format: int32 */
      number: number;
      content: components["schemas"]["JobPostDto"][];
    };
    RsDataGetPostsResponseBody: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["GetPostsResponseBody"];
    };
    RoomListDto: {
      /** Format: int64 */
      roomId?: number;
      username1?: string;
      username2?: string;
      lastChat?: string;
      lastChatDate?: string;
    };
    RsDataListRoomListDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["RoomListDto"][];
    };
    Message: {
      /** Format: int64 */
      id?: number;
      room?: components["schemas"]["Room"];
      sender?: string;
      content?: string;
      /** Format: date-time */
      createdAt?: string;
    };
    Room: {
      /** Format: int64 */
      id?: number;
      username1?: string;
      username2?: string;
      /** Format: date-time */
      user1Enter?: string;
      /** Format: date-time */
      user2Enter?: string;
      user1HasExit?: boolean;
      user2HasExit?: boolean;
    };
    RoomDto: {
      username1?: string;
      username2?: string;
      messages?: components["schemas"]["Message"][];
    };
    RsDataRoomDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["RoomDto"];
    };
    MessageDto: {
      /** Format: int64 */
      id?: number;
      sender: string;
      text: string;
      createdAt?: string;
    };
    RsDataListMessageDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["MessageDto"][];
    };
    RsDataApplicationDto: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: components["schemas"]["ApplicationDto"];
    };
    RsDataString: {
      resultCode?: string;
      /** Format: int32 */
      statusCode?: number;
      msg?: string;
      data?: string;
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
  /** 알림 읽음 처리 */
  read: {
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
        content: {
          "*/*": components["schemas"]["RsDataVoid"];
        };
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
        content: {
          "*/*": components["schemas"]["RsDataModify"];
        };
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
  /** 조기 마감 */
  postEarlyClosing: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataVoid"];
        };
      };
    };
  };
  /** 채팅방 입장 */
  showRoom: {
    parameters: {
      path: {
        roomId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataRoomDto"];
        };
      };
    };
  };
  /** 채팅방 퇴장 */
  exitsRoom: {
    parameters: {
      path: {
        roomId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataVoid"];
        };
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
        content: {
          "*/*": components["schemas"]["RsDataVoid"];
        };
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
        content: {
          "*/*": components["schemas"]["RsDataVoid"];
        };
      };
    };
  };
  runBatch: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": string;
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
          "*/*": components["schemas"]["RsDataRegister"];
        };
      };
    };
  };
  /** 결제 요청 */
  requestTossPayments: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["PaymentReqDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataPaymentResDto"];
        };
      };
    };
  };
  /** 결제 취소 */
  tossPaymentCancel: {
    parameters: {
      query: {
        paymentKey: string;
        cancelReason: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
        };
      };
    };
  };
  /** 지원자 리뷰 작성 */
  createReview: {
    parameters: {
      path: {
        jobPostingId: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ApplicantReviewDto"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataApplicantReviewDto"];
        };
      };
    };
  };
  /** 로그아웃 처리 및 쿠키 삭제 */
  logout: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  /** 로그인, accessToken, refreshToken 쿠키 생성됨 */
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
          "*/*": components["schemas"]["RsDataMemberDto"];
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
          "*/*": components["schemas"]["RsDataJoinForm"];
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
          "*/*": components["schemas"]["RsDataRegister"];
        };
      };
    };
  };
  /** 구인공고 관심 등록 */
  interest: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataVoid"];
        };
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
        content: {
          "*/*": components["schemas"]["RsDataVoid"];
        };
      };
    };
  };
  /** 채팅 메세지 로드 */
  writeChat_1: {
    parameters: {
      path: {
        roomId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListMessageDto"];
        };
      };
    };
  };
  /** 채팅 생성 */
  writeChat: {
    parameters: {
      path: {
        roomId: number;
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
          "*/*": components["schemas"]["RsDataVoid"];
        };
      };
    };
  };
  /** 구인자가 수동으로 알바완료 처리 */
  completeJobManually: {
    parameters: {
      path: {
        applicationId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataVoid"];
        };
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
        content: {
          "*/*": components["schemas"]["RsDataVoid"];
        };
      };
    };
  };
  isReady: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": string;
        };
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
  /** 결제 성공 */
  tossPaymentSuccess: {
    parameters: {
      query: {
        paymentKey: string;
        orderId: string;
        amount: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataPaymentSuccessDto"];
        };
      };
    };
  };
  /** 결제 실패 */
  tossPaymentFail: {
    parameters: {
      query: {
        code: string;
        message: string;
        orderId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataPaymentFailDto"];
        };
      };
    };
  };
  /** 유저 별 알림리스트 */
  getList: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListNotificationDto"];
        };
      };
    };
  };
  /** 읽지 않은 알림 유무 확인 */
  unreadNotification: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataBoolean"];
        };
      };
    };
  };
  /** 나의 전체 리뷰 조회 */
  getAllReviews: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListApplicantReviewDto"];
        };
      };
    };
  };
  /** 리뷰 단건 조회 */
  getReviewById: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataApplicantReviewDto"];
        };
      };
    };
  };
  /** 리뷰 삭제 */
  deleteReview: {
    parameters: {
      path: {
        id: number;
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
  /** 로그인한 유저의 해당 구인공고 관심 등록 여부 */
  isInterested: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataBoolean"];
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
          "*/*": components["schemas"]["RsDataGetPostsResponseBody"];
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
          "*/*": components["schemas"]["RsDataListJobPostDto"];
        };
      };
    };
  };
  /** 공고 별 지원리스트 */
  getList_1: {
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
  /** 채팅방 목록 */
  showRoomList: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["RsDataListRoomListDto"];
        };
      };
    };
  };
  showMain: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": string;
        };
      };
    };
  };
  /** 읽은 알림 전부 삭제 */
  deleteReadAll: {
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
  /** 알림 전부 삭제 */
  deleteAll: {
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
}
