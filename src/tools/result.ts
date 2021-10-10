import { WrapperResult, WrapperResultLazyProps } from '.';

export function $_$(
  opcode: number,
  statusCode: number,
  message?: string,
  reportable?: boolean
): (props?: WrapperResultLazyProps) => WrapperResult {
  return (lazyOptions: WrapperResultLazyProps = {}) =>
    new WrapperResult({
      opcode,
      statusCode,
      message,
      reportable,
      ...lazyOptions,
    });
}

export const RESULT = {
  /** SAME ERRORS  */
  SUCCESS: $_$(0, 200),
  REQUIRED_ACCESS_KEY: $_$(601, 401, 'REQUIRED_ACCESS_KEY'),
  EXPIRED_ACCESS_KEY: $_$(602, 401, 'EXPIRED_ACCESS_KEY'),
  PERMISSION_DENIED: $_$(603, 403, 'PERMISSION_DENIED'),
  INVALID_ERROR: $_$(604, 500, 'INVALID_ERROR'),
  FAILED_VALIDATE: $_$(605, 400, 'FAILED_VALIDATE'),
  INVALID_API: $_$(606, 404, 'INVALID_API'),
  /** CUSTOM ERRORS */
  CANNOT_FIND_WEBLINK: $_$(607, 404, 'CANNOT_FIND_WEBLINK'),
};
