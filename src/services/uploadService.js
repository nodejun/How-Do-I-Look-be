class UploadService {
  /**
   * @param {object} filename - Multer 미들웨어를 통해 `req.file`에 담기는 파일 정보 객체입니다.
   * @returns {string} 생성된 이미지의 상대 URL 경로입니다.
   */
  createImageUrl = (filename) => {
    return `/images/${filename}`;
  };
};

export default new UploadService();