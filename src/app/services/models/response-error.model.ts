export class ResponseError {
  code: number;
  result: string;
  message: string;
  error: {
    kind: string;
    path: string;
    message: string;
  };
}
